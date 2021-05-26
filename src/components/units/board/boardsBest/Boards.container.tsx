import BoardsUIBest from './Boards.presenter';
import { FETCH_BOARDS, FETCH_BEST_BOARDS } from './Boards.queries';
import { useQuery } from '@apollo/client';
import { Query } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

export default function BoardsBest() {
	const router = useRouter();
	const BestDatas = useQuery<Query>(FETCH_BEST_BOARDS);

	const handleMoveList = (e) => {
		router.push(`/board/${e.target.id}`);
	};

	return (
		<BoardsUIBest
			BestDatas={BestDatas}
			handleMoveList={handleMoveList}
		></BoardsUIBest>
	);
}
