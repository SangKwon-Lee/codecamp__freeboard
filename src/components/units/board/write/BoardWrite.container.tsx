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

	//* 이미지 관련 상태
	const [imgArr, setImgArr] = useState(['0', '0', '0']);

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
			images: data?.fetchBoard.images,
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
		try {
			const result = await createBoard({
				variables: {
					createBoardInput: {
						...input,
					},
				},
			});
			alert('게시글 등록 성공');
			router.push(`/board/${result.data?.createBoard._id}`);
		} catch (error) {
			alert(error);
		}
	};

	//* 수정함수
	const handleClickUpdateBoard = async () => {
		try {
			const result = await updateBoard({
				variables: {
					updateBoardInput: {
						title: input.title,
						contents: input.contents,
						youtubeUrl: input.youtubeUrl,
						images: input.images,
					},
					password: input.password,
					boardId: String(router.query.id),
				},
			});

			alert('게시글 수정 성공');
			router.push(`/board/${result.data?.updateBoard._id}`);
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

		let newInputImg = [...newArr];
		newInputImg = newInputImg.filter((data) => data !== '0');
		setInput({
			...input,
			images: newInputImg,
		});
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
		></BoardUI>
	);
}

export default BoardWritePage;
