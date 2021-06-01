import BoardUI from './BoardWrite.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { useRouter } from 'next/router';
import {
	Mutation,
	MutationCreateBoardArgs,
	MutationUpdateBoardArgs,
	Query,
	QueryFetchBoardArgs,
} from '../../../../commons/types/generated/types';

function BoardWritePage() {
	const router = useRouter();

	//* 등록버튼 ON OFF
	const [isTrue, setIsTrue] = useState(true);

	//* 인풋 데이터
	const [input, setInput] = useState({
		writer: '',
		password: '',
		title: '',
		contents: '',
		youtubeUrl: '',
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

	//* 수정시 데이터 살리기
	useEffect(() => {
		setInput({
			writer: data?.fetchBoard.writer,
			password: '',
			title: data?.fetchBoard.title,
			contents: data?.fetchBoard.contents,
			youtubeUrl: data?.fetchBoard.youtubeUrl,
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
					},
					password: input.password,
					boardId: String(router.query.id),
				},
			});
			console.log(result);
			alert('게시글 수정 성공');
			router.push(`/board/${result.data?.updateBoard._id}`);
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<BoardUI
			data={data}
			handleChangeInput={handleChangeInput}
			handleClickCreateBoard={handleClickCreateBoard}
			isTrue={isTrue}
			handleClickUpdateBoard={handleClickUpdateBoard}
		></BoardUI>
	);
}

export default BoardWritePage;
