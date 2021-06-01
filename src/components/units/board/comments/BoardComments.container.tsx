import BoardCommentsUI from './BoardComments.presenter';
import { useState } from 'react';
import {
	FETCH_BOARD_COMMENTS,
	CREATE_BOARD_COMMENT,
	DELETE_BOARD_COMMENT,
} from './BoardComments.queries';
import { useMutation, useQuery } from '@apollo/client';
import {
	Mutation,
	MutationCreateBoardCommentArgs,
	MutationDeleteBoardCommentArgs,
	Query,
	QueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

function BoardCommentsPage() {
	const router = useRouter();

	//* 별점 상태
	const [rating, setRating] = useState(0);

	//* 댓글 작성 상태
	const [input, setInput] = useState({
		writer: '',
		password: '',
		contents: '',
		rating: '',
	});

	//* 댓글 작성 뮤테이션
	const [createBoardComment] = useMutation<
		Mutation,
		MutationCreateBoardCommentArgs
	>(CREATE_BOARD_COMMENT);

	//* 댓글 삭제 뮤테이션
	const [deleteBoardComment] = useMutation<
		Mutation,
		MutationDeleteBoardCommentArgs
	>(DELETE_BOARD_COMMENT);

	//* 댓글 불러오기 쿼리
	const { data, refetch } = useQuery<Query, QueryFetchBoardCommentsArgs>(
		FETCH_BOARD_COMMENTS,
		{
			variables: { boardId: String(router.query.id) },
		},
	);

	//* 댓글 작성 저장하는 함수
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newInput = {
			...input,
			[e.target.name]: e.target.value,
		};
		setInput(newInput);
	};

	//* 댓글 작성 뮤테이션 보내는 함수
	const handleClickCreateComment = async () => {
		try {
			const result = await createBoardComment({
				variables: {
					createBoardCommentInput: {
						writer: input.writer,
						password: input.password,
						rating: Number(input.rating),
						contents: input.contents,
					},
					boardId: String(router.query.id),
				},
			});
			setInput({
				writer: '',
				password: '',
				contents: '',
				rating: '',
			});
			setRating(0);
			refetch();
		} catch (error) {
			alert(error);
		}
	};

	//* 별점 저장 함수
	const onSaveRating = (e: any) => {
		const newInput = {
			...input,
			rating: e.target.id,
		};
		setInput(newInput);
		setRating(e.target.id);
	};

	return (
		<BoardCommentsUI
			input={input}
			handleInputChange={handleInputChange}
			data={data}
			rating={rating}
			onSaveRating={onSaveRating}
			handleClickCreateComment={handleClickCreateComment}
			refetch={refetch}
		></BoardCommentsUI>
	);
}

export default BoardCommentsPage;
