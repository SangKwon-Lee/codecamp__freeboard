import BoardUI from './BoardWrite.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import {
	CREATE_BOARD,
	FETCH_BOARD,
	UPDATE_BOARD,
	UPLOAD_FILE,
} from './BoardWrite.queries';
import { useRouter } from 'next/router';
import {
	Mutation,
	MutationCreateBoardArgs,
	MutationUpdateBoardArgs,
	Query,
	QueryFetchBoardArgs,
	MutationUploadFileArgs,
} from '../../../../commons/types/generated/types';

function BoardWritePage() {
	const router = useRouter();

	//* 우편 주소 상태
	const [postOpen, setPostOpen] = useState(false);

	//* 이미지 관련 상태
	const [imgArr, setImgArr] = useState([]);

	//*이미지 Ref
	const fileRef = useRef<HTMLInputElement>(null);

	//* 등록버튼 ON OFF
	const [isTrue, setIsTrue] = useState(true);

	//* 인풋 데이터
	const [input, setInput] = useState({
		writer: '',
		password: '',
		title: '',
		contents: '',
		youtubeUrl: '',
		images: [],
		boardAddress: {
			zipcode: '',
			address: '',
			addressDetail: '',
		},
	});

	//* 등록 / 수정
	const [createBoard] = useMutation<Mutation, MutationCreateBoardArgs>(
		CREATE_BOARD,
	);

	const [updateBoard] = useMutation<Mutation, MutationUpdateBoardArgs>(
		UPDATE_BOARD,
	);

	const { data } = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
		variables: { boardId: String(router.query.id) },
	});

	//* 이미지 등록
	const [uploadFileMutation] = useMutation<Mutation, MutationUploadFileArgs>(
		UPLOAD_FILE,
	);

	//* 수정시 데이터 살리기
	useEffect(() => {
		setInput({
			writer: data?.fetchBoard.writer,
			password: '',
			title: data?.fetchBoard.title,
			contents: data?.fetchBoard.contents,
			youtubeUrl: data?.fetchBoard.youtubeUrl,
			images: [],
			boardAddress: {
				zipcode: data?.fetchBoard.boardAddress?.zipcode,
				address: data?.fetchBoard.boardAddress?.address,
				addressDetail: data?.fetchBoard.boardAddress?.addressDetail,
			},
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
			newInput.writer &&
			newInput.password &&
			newInput.title &&
			newInput.contents
		) {
			setIsTrue(false);
		} else {
			setIsTrue(true);
		}
	};

	//* 등록함수
	const handleClickCreateBoard = async () => {
		const res = await Promise.all(
			input.images.map((file) => uploadFileMutation({ variables: { file } })),
		);

		let images = [];
		for (let i = 0; i < res.length; i++) {
			images.push(res[i].data.uploadFile.url);
		}

		try {
			const result = await createBoard({
				variables: {
					createBoardInput: {
						...input,
						images,
					},
				},
			});
			alert('게시글 등록 성공');
			router.push(`board/${result.data.createBoard._id}`);
		} catch (error) {
			alert(error);
		}
	};

	//* 수정함수
	const handleClickUpdateBoard = async () => {
		const res = await Promise.all(
			input.images.map((file) => uploadFileMutation({ variables: { file } })),
		);

		let images = [];
		for (let i = 0; i < res.length; i++) {
			images.push(res[i].data.uploadFile.url);
		}

		try {
			const result = await updateBoard({
				variables: {
					updateBoardInput: {
						title: input.title,
						contents: input.contents,
						youtubeUrl: input.youtubeUrl,
						images: input.images,
						//@ts-ignore
						boardAddress: {
							zipcode: input.boardAddress.zipcode,
							address: input.boardAddress.address,
							addressDetail: input.boardAddress.addressDetail,
						},
					},
					password: input.password,
					boardId: String(router.query.id),
				},
			});

			alert('게시글 수정 성공');
			router.push(`/board/${result.data.updateBoard._id}`);
		} catch (error) {
			alert(error.message);
		}
	};

	//* 이미지 등록 함수
	const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileArr = e.target.files;

		let fileURLs = [];
		let fileName = [];
		let file;

		for (let i = 0; i < fileArr.length; i++) {
			if (fileArr[i].size > 5 * 1024 * 1024) {
				alert('파일이 크다');
				return;
			}
			if (!fileArr[i].type.includes('png')) {
				alert('png 파일만 업로드 가능합니다!');
				return;
			}
			file = fileArr[i];
			fileName.push(fileArr[i]);

			let reader = new FileReader();
			reader.onload = () => {
				console.log(reader.result);
				fileURLs[i] = reader.result;
				setImgArr([...fileURLs]);
			};
			reader.readAsDataURL(file);
		}

		setInput({
			...input,
			images: fileName,
		});
	};

	//* 이미지 삭제 함수
	const UploadPhotoCancle = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		const target = e.target as HTMLTextAreaElement;
		let newArr = [...imgArr];
		newArr.splice(Number(target.id), 1);
		setImgArr(newArr);
	};

	//* 우편 모달 오픈함수
	const handlePostOpen = () => {
		setPostOpen((prev) => !prev);
	};

	//* 상세주소 넣기
	const handleZipCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({
			...input,
			boardAddress: {
				...input.boardAddress,
				addressDetail: e.target.value,
			},
		});
	};

	//* 우편 함수
	const handleComplete = (data) => {
		let fullAddress = data.address;
		let extraAddress = '';
		let zipcode = data.zonecode;

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress +=
					extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}

		setInput({
			...input,
			boardAddress: {
				zipcode,
				address: fullAddress,
				addressDetail: '',
			},
		});

		setPostOpen(false);
	};

	return (
		<BoardUI
			data={data}
			handleChangeInput={handleChangeInput}
			handleClickCreateBoard={handleClickCreateBoard}
			isTrue={isTrue}
			handleClickUpdateBoard={handleClickUpdateBoard}
			fileRef={fileRef}
			onChangeFile={onChangeFile}
			UploadPhotoCancle={UploadPhotoCancle}
			imgArr={imgArr}
			handleComplete={handleComplete}
			handlePostOpen={handlePostOpen}
			postOpen={postOpen}
			input={input}
			handleZipCodeInput={handleZipCodeInput}
		></BoardUI>
	);
}

export default BoardWritePage;
