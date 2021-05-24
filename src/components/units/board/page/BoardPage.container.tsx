import BoardPageUI from './BoardPage.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from './BoardPage.queries';
import { useRouter } from 'next/router';
import {
	Mutation,
	MutationDislikeBoardArgs,
	MutationLikeBoardArgs,
	Query,
	QueryFetchBoardArgs,
} from '../../../../commons/types/generated/types';
import BoardComments from '../comments/BoardComments.container';

export default function BoardPage() {
	const router = useRouter();

	const { data, refetch } = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
		variables: { boardId: String(router.query.id) },
	});

	const handleUpdate = () => {
		router.push(`/board/${router.query.id}/edit`);
	};
	const handleMoveBoards = () => {
		router.push(`/boards`);
	};

	const [likeBoard] = useMutation<Mutation, MutationLikeBoardArgs>(LIKE_BOARD);
	const [disLikeBoard] = useMutation<Mutation, MutationDislikeBoardArgs>(
		DISLIKE_BOARD,
	);

	const handleLike = async () => {
		try {
			const result = await likeBoard({
				variables: {
					boardId: String(router.query.id),
				},
			});
			console.log(result);
			refetch();
		} catch (error) {
			console.log(error);
		}
	};
	const handleDisLike = async () => {
		try {
			const result = await disLikeBoard({
				variables: {
					boardId: String(router.query.id),
				},
			});
			console.log(result);
			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<BoardPageUI
				data={data}
				handleUpdate={handleUpdate}
				handleLike={handleLike}
				handleDisLike={handleDisLike}
				handleMoveBoards={handleMoveBoards}
			></BoardPageUI>
			<BoardComments></BoardComments>
		</>
	);
}
