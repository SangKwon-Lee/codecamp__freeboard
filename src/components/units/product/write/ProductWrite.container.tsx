import ProductUI from './ProductWrite.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import {
	FETCH_USED_ITEM,
	UPDATE_USED_ITEM,
	UPLOAD_FILE,
	CREATE_USED_ITEM,
} from './ProductWrite.queries';
import { useRouter } from 'next/router';
import {
	Mutation,
	MutationUpdateBoardArgs,
	Query,
	MutationUploadFileArgs,
	MutationCreateUseditemArgs,
	QueryFetchUseditemArgs,
	MutationUpdateUseditemArgs,
} from '../../../../commons/types/generated/types';

function ProductWritePage() {
	const router = useRouter();

	//* 우편 주소 상태
	const [postOpen, setPostOpen] = useState(false);

	//* 우편 주소 인풋
	const [ZipCode, setZipCode] = useState('');

	//* 이미지 관련 상태
	const [imgArr, setImgArr] = useState(['0', '0']);

	//*이미지 Ref
	const fileRef = useRef<HTMLInputElement>(null);

	//* 등록버튼 ON OFF
	const [isTrue, setIsTrue] = useState(true);

	//* 인풋 데이터
	const [input, setInput] = useState({
		name: '',
		remarks: '',
		contents: '',
		price: 0,
		tags: [],
	});

	//* 등록 / 수정
	const [createUseditem] = useMutation<Mutation, MutationCreateUseditemArgs>(
		CREATE_USED_ITEM,
	);

	const [updateUsedItem] = useMutation<Mutation, MutationUpdateUseditemArgs>(
		UPDATE_USED_ITEM,
	);

	const { data } = useQuery<Query, QueryFetchUseditemArgs>(FETCH_USED_ITEM, {
		variables: { useditemId: String(router.query.id) },
	});

	console.log(data);
	//* 이미지 등록
	const [uploadFileMutation] = useMutation<Mutation, MutationUploadFileArgs>(
		UPLOAD_FILE,
	);

	//* 수정시 데이터 살리기
	useEffect(() => {
		setInput({
			name: data?.fetchUseditem.name,
			remarks: data?.fetchUseditem.remarks,
			contents: data?.fetchUseditem.contents,
			price: data?.fetchUseditem.price,
			tags: [data?.fetchUseditem.tags.join().replaceAll(',', ' ')],
		});
	}, [data]);

	//* 인풋 함수
	const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newInput = {
			...input,
			[event.target.name]: event.target.value,
		};
		const newInputData = {
			...newInput,
			price: Number(newInput.price),
			tags: [newInput.tags],
		};

		setInput(newInputData);
		if (
			newInput.name &&
			newInput.remarks &&
			newInput.contents &&
			newInput.price &&
			newInput.tags
		) {
			setIsTrue(false);
		} else {
			setIsTrue(true);
		}
		console.log(newInputData);
	};

	//* 등록함수
	const handleClickCreateBoard = async () => {
		let newTags = input.tags;
		newTags = newTags[0]
			.split('#')
			.filter((data) => data !== '')
			.map((data) => '#' + data.trim());

		try {
			const result = await createUseditem({
				variables: {
					createUseditemInput: {
						name: input.name,
						remarks: input.remarks,
						contents: input.contents,
						price: input.price,
						tags: newTags,
					},
				},
			});
			alert('게시글 등록 성공');
			router.push(`/product/${result.data?.createUseditem._id}`);
		} catch (error) {
			alert(error);
		}
	};

	//* 수정함수
	const handleClickUpdateBoard = async () => {
		let newTags = input.tags;
		newTags = newTags[0]
			.split('#')
			.filter((data) => data !== '')
			.map((data) => '#' + data.trim());

		try {
			const result = await updateUsedItem({
				variables: {
					updateUseditemInput: {
						name: input.name,
						remarks: input.remarks,
						contents: input.contents,
						price: input.price,
						tags: newTags,
					},
					useditemId: String(router.query.id),
				},
			});
			alert('게시글 수정 성공');
			router.push(`/product/${result.data?.updateUseditem._id}`);
		} catch (error) {
			alert(error.message);
		}
	};

	//* 이미지 등록 함수
	const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files[0];

		if (file.size > 5 * 1024 * 1024) {
			alert('파일이 크다');
			return;
		}

		if (!file.type.includes('png')) {
			alert('png 파일만 업로드 가능합니다!');
			return;
		}

		//* URL 뽑아주는 곳
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (e) => {
			console.log(e.target.result);
		};

		const { data } = await uploadFileMutation({
			variables: { file: file },
		});
		const ImageData = data?.uploadFile.url;

		let newArr = [...imgArr];
		newArr[Number(e.target.id)] = ImageData;

		for (let i = 0; i <= newArr.length; i++) {
			if (newArr[newArr.length - 1] === '0') {
				continue;
			}

			if (newArr[i] === '0' && newArr[i + 1] === '0') {
				newArr[i] = newArr[i + 2];
				newArr[i + 2] = '0';
			}

			if (newArr[i] === '0') {
				newArr[i] = newArr[i + 1];
				newArr[i + 1] = '0';
			}
		}

		setImgArr(newArr);

		// let newInputImg = [...newArr];
		// newInputImg = newInputImg.filter((data) => data !== '0');
		// setInput({
		// 	...input,
		// 	images: newInputImg,
		// });
	};

	//* 이미지 삭제 함수
	const UploadPhotoCancle = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		let newArr = [...imgArr];
		newArr[e.target.id] = '0';

		for (let i = 0; i <= 1; i++) {
			if (newArr[i] === '0') {
				newArr[i] = newArr[i + 1];
				newArr[i + 1] = '0';
			}
		}
		setImgArr(newArr);
	};

	const handleZipCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setZipCode(e.target.value);
	};

	return (
		<ProductUI
			data={data}
			handleChangeInput={handleChangeInput}
			handleClickCreateBoard={handleClickCreateBoard}
			isTrue={isTrue}
			handleClickUpdateBoard={handleClickUpdateBoard}
			fileRef={fileRef}
			onChangeFile={onChangeFile}
			UploadPhotoCancle={UploadPhotoCancle}
			imgArr={imgArr}
			postOpen={postOpen}
			ZipCode={ZipCode}
			handleZipCodeInput={handleZipCodeInput}
		></ProductUI>
	);
}

export default ProductWritePage;
