import BoardsUI from './Boards.presenter';
import {
	FETCH_BOARDS,
	FETCH_BEST_BOARDS,
	FETCH_BOARDS_COUNT,
} from './Boards.queries';
import { useQuery } from '@apollo/client';
import { Query } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Boards() {
	const router = useRouter();
	const BestDatas = useQuery<Query>(FETCH_BEST_BOARDS);

	const handleMoveList = (e) => {
		router.push(`/board/${e.target.id}`);
	};

	const handleMoveRegister = () => {
		router.push(`/board/`);
	};

	const [currentPage, setCurrentPage] = useState(1);
	const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	const { data, refetch } = useQuery(FETCH_BOARDS, {
		variables: { page: currentPage },
	});

	const { data: count } = useQuery(FETCH_BOARDS_COUNT);

	const onClickPage = (event) => {
		if (currentPage > pageArr[pageArr.length - 1]) {
			let newArr = pageArr.map((data) => data + 1);
			setPageArr(newArr);
		}
		setCurrentPage(Number(event.target.id));
	};

	const RightArrowPage = () => {
		if (currentPage > count.fetchBoardsCount / 10) {
			alert('마지막 페이지입니다.');
			return;
		}
		if (currentPage >= pageArr[pageArr.length - 1]) {
			let newArr = pageArr.map((data) => data + 1);
			setPageArr(newArr);
		}
		setCurrentPage((prev) => prev + 1);
	};
	const LeftArrowPage = () => {
		if (currentPage === 1) {
			return;
		}
		if (currentPage <= pageArr[0]) {
			let newArr = pageArr.map((data) => data - 1);
			setPageArr(newArr);
		}
		setCurrentPage((prev) => prev - 1);
	};

	return (
		<>
			<BoardsUI
				data={data}
				BestDatas={BestDatas}
				handleMoveList={handleMoveList}
				handleMoveRegister={handleMoveRegister}
				onClickPage={onClickPage}
				currentPage={currentPage}
				RightArrowPage={RightArrowPage}
				LeftArrowPage={LeftArrowPage}
				pageArr={pageArr}
			></BoardsUI>
		</>
	);
}
