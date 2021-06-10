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
	Query,
	MutationUploadFileArgs,
	MutationCreateUseditemArgs,
	QueryFetchUseditemArgs,
	MutationUpdateUseditemArgs,
} from '../../../../commons/types/generated/types';
import withAuth from '../../../commons/hocs/withAuth';
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

	//* 이미지 등록
	const [uploadFileMutation] = useMutation<Mutation, MutationUploadFileArgs>(
		UPLOAD_FILE,
	);

	//* 수정시 데이터 살리기
	useEffect(() => {
		setInput({
			name: data?.fetchUseditem.name || '',
			remarks: data?.fetchUseditem.remarks || '',
			contents: data?.fetchUseditem.contents || '',
			price: data?.fetchUseditem.price || 0,
			tags: data?.fetchUseditem.tags,
		});
	}, [data]);

	//* 인풋 함수
	const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newInput = {
			...input,
			[event.target.name]: event.target.value,
		};

		setInput(newInput);
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
	};

	//* 등록함수
	const handleClickCreateBoard = async () => {
		// const res = await Promise.all(
		// 	input.images.map((file) => uploadFileMutation({ variables: { file } })),
		// );

		// let images = [];
		// for (let i = 0; i < res.length; i++) {
		// 	images.push(res[i].data.uploadFile.url);
		// }
		//* Tags의 배열 데이터 변환
		let newTags;
		if (typeof input.tags === 'object') {
			newTags = input.tags[0];
		} else {
			newTags = input.tags;
		}
		newTags
			.split('#')
			.filter((data) => data !== '')
			.map((data) => '#' + data);

		try {
			const result = await createUseditem({
				variables: {
					createUseditemInput: {
						name: input.name,
						remarks: input.remarks,
						contents: input.contents,
						price: Number(input.price),
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
		//* Tags의 배열 데이터 변환
		let newTags;
		if (typeof input.tags === 'object') {
			newTags = input.tags[0];
		} else {
			newTags = input.tags;
		}
		newTags
			.split('#')
			.filter((data) => data !== '')
			.map((data) => '#' + data);

		try {
			const result = await updateUsedItem({
				variables: {
					updateUseditemInput: {
						name: input.name,
						remarks: input.remarks,
						contents: input.contents,
						price: Number(input.price),
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
		// const fileArr = e.target.files;
		// let fileURLs = [];
		// let fileName = [];
		// let file;
		// for (let i = 0; i < fileArr.length; i++) {
		// 	if (fileArr[i].size > 5 * 1024 * 1024) {
		// 		alert('파일이 크다');
		// 		return;
		// 	}
		// 	if (!fileArr[i].type.includes('png')) {
		// 		alert('png 파일만 업로드 가능합니다!');
		// 		return;
		// 	}
		// 	file = fileArr[i];
		// 	fileName.push(fileArr[i]);
		// 	let reader = new FileReader();
		// 	reader.onload = () => {
		// 		console.log(reader.result);
		// 		fileURLs[i] = reader.result;
		// 		setImgArr([...fileURLs]);
		// 	};
		// 	reader.readAsDataURL(file);
		// }
		// setInput({
		// 	...input,
		// 	images: fileName,
		// });
	};

	//* 이미지 삭제 함수
	const UploadPhotoCancle = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		// let newArr = [...imgArr];
		// newArr.splice(Number(e.target.id), 1);
		// setImgArr(newArr);
	};

	//* 주소 추가
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

export default withAuth(ProductWritePage);
