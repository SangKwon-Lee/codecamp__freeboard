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

	//* 데이터 받아오기
	const { data, refetch } = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
		variables: { boardId: String(router.query.id) },
	});

	//* 페이지 이동
	const handleUpdate = () => {
		router.push(`/board/${router.query.id}/edit`);
	};
	const handleMoveBoards = () => {
		router.push(`/boards`);
	};

	//*좋아요 싫어요
	const [likeBoard] = useMutation<Mutation, MutationLikeBoardArgs>(LIKE_BOARD);
	const [disLikeBoard] = useMutation<Mutation, MutationDislikeBoardArgs>(
		DISLIKE_BOARD,
	);

	//* 좋아요 뮤테이션 함수
	const handleLike = async () => {
		try {
			const result = await likeBoard({
				variables: {
					boardId: String(router.query.id),
				},
			});
			refetch();
		} catch (error) {
			console.log(error);
		}
	};
	//* 싫어요 뮤테이션 함수
	const handleDisLike = async () => {
		try {
			const result = await disLikeBoard({
				variables: {
					boardId: String(router.query.id),
				},
			});
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
