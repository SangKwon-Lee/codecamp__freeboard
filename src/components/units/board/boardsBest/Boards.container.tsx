import BoardsUIBest from './Boards.presenter';
import { FETCH_BEST_BOARDS } from './Boards.queries';
import { useQuery } from '@apollo/client';
import { Query } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

export default function BoardsBest() {
	const router = useRouter();

	//* 베스트 게시글 불러오기
	const { data } = useQuery<Query>(FETCH_BEST_BOARDS);

	//* 베스트 게시글 이동
	const handleMoveList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		router.push(`/board/${e.target.id}`);
	};

	return (
		<BoardsUIBest data={data} handleMoveList={handleMoveList}></BoardsUIBest>
	);
}
