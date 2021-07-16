import BoardsUIBest from './Boards.presenter';
import { FETCH_BEST_BOARDS } from './Boards.queries';
import { useQuery } from '@apollo/client';
import { Query } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';
import react from 'react';

export default function BoardsBest() {
	const router = useRouter();

	//* 베스트 게시글 불러오기
	const { data } = useQuery<Query>(FETCH_BEST_BOARDS);

	//* 베스트 게시글 이동
	const handleMoveList = (e: react.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLTextAreaElement;
		router.push(`/board/${target.id}`);
	};

	return (
		<BoardsUIBest data={data} handleMoveList={handleMoveList}></BoardsUIBest>
	);
}
