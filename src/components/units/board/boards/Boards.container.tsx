import BoardsUI from './Boards.presenter';
import { FETCH_BOARDS, FETCH_BEST_BOARDS } from './Boards.queries';
import { useQuery } from '@apollo/client';
import { Query } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

export default function Boards() {
	const { data } = useQuery<Query>(FETCH_BOARDS);

	const router = useRouter();
	const BestDatas = useQuery<Query>(FETCH_BEST_BOARDS);

	const handleMoveList = (e) => {
		router.push(`/board/${e.target.id}`);
	};

	const handleMoveRegister = () => {
		router.push(`/board/`);
	};

	return (
		<>
			<BoardsUI
				data={data}
				BestDatas={BestDatas}
				handleMoveList={handleMoveList}
				handleMoveRegister={handleMoveRegister}
			></BoardsUI>
		</>
	);
}
