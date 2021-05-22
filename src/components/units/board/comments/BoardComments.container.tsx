import BoardCommentsUI from './BoardComments.presenter';
import { useEffect, useState } from 'react';
import {
	FETCH_BOARD_COMMENTS,
	CREATE_BOARD_COMMENT,
} from './BoardComments.queries';
import { useMutation, useQuery } from '@apollo/client';
import {
	Mutation,
	MutationCreateBoardCommentArgs,
	Query,
	QueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';
function BoardCommentsPage() {
	const router = useRouter();

	const [rating, setRating] = useState(5);

	const [createBoardComment] = useMutation<
		Mutation,
		MutationCreateBoardCommentArgs
	>(CREATE_BOARD_COMMENT);

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
		console.log(newInput);
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
			console.log('성공');
			refetch();
		} catch (error) {
			alert(error);
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
			handleInputChange={handleInputChange}
			data={data}
			rating={rating}
			onSaveRating={onSaveRating}
			handleClickCreateComment={handleClickCreateComment}
		></BoardCommentsUI>
	);
}

export default BoardCommentsPage;
