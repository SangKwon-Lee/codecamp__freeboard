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

	const [rating, setRating] = useState(0);

	const [createBoardComment] = useMutation<
		Mutation,
		MutationCreateBoardCommentArgs
	>(CREATE_BOARD_COMMENT);

	const [deleteBoardComment] = useMutation<
		Mutation,
		MutationDeleteBoardCommentArgs
	>(DELETE_BOARD_COMMENT);

	const [input, setInput] = useState({
		writer: '',
		password: '',
		contents: '',
		rating: '',
	});

	const { data, refetch } = useQuery<Query, QueryFetchBoardCommentsArgs>(
		FETCH_BOARD_COMMENTS,
		{
			variables: { boardId: String(router.query.id) },
		},
	);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newInput = {
			...input,
			[e.target.name]: e.target.value,
		};
		setInput(newInput);

	};

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

	const handleDeleteComment = async (e) => {
		try {
			const result = await deleteBoardComment({
				variables: {
					password: input.password,
					boardCommentId: String(e.target.id),
				},
			});
			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	const onSaveRating = (e) => {
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
			handleDeleteComment={handleDeleteComment}
		></BoardCommentsUI>
	);
}

export default BoardCommentsPage;
