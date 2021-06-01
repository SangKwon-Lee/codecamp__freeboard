import BoardsUI from './Boards.presenter';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './Boards.queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Boards() {
	const router = useRouter();

	//* 페이지네이션 상태
	const [currentPage, setCurrentPage] = useState(1);
	const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	//* 전체 게시글 불러오기
	const { data } = useQuery(FETCH_BOARDS, {
		variables: { page: currentPage },
	});

	//* 전체 게시글 숫자 불러오기
	const { data: count } = useQuery(FETCH_BOARDS_COUNT);

	//* 페이지네이션에서 숫자 클릭시
	const onClickPage = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (currentPage > pageArr[pageArr.length - 1]) {
			let newArr = pageArr.map((data) => data + 1);
			setPageArr(newArr);
		}
		setCurrentPage(Number(event.target.id));
	};

	//* 페이지네이션에서 오른쪽 화살표 이동시
	const RightArrowPage = () => {
		let newArr = pageArr.map((data) => data + 10);
		let last = Math.floor(count.fetchBoardsCount / 10) + 1;

		if (currentPage === last) {
			return alert('마지막 페이지 입니다.');
		}
		if (pageArr[pageArr.length - 1] === last) {
			setCurrentPage(last);
			return;
		}

		if (newArr[newArr.length - 1] > count.fetchBoardsCount / 10) {
			newArr = newArr.map((data) => data - (newArr[newArr.length - 1] - last));
			setPageArr(newArr);
			setCurrentPage(newArr[newArr.length - 1]);
		}
		setPageArr(newArr);
		setCurrentPage(newArr[0]);
	};

	//* 페이지네이션에서 왼쪽 화살표 이동시
	const LeftArrowPage = () => {
		let last = Math.floor(count.fetchBoardsCount / 10) + 1;
		let lastString = String(last);
		let WhenLastPage = Number(lastString[lastString.length - 1]);

		if (currentPage <= 1) {
			return alert('처음 페이지 입니다.');
		}

		if (pageArr[pageArr.length - 1] === last) {
			let newArr = pageArr.map((data) => data - WhenLastPage);
			setPageArr(newArr);
			setCurrentPage(newArr[newArr.length - 1]);
			return;
		}

		if (pageArr[0] === 1) {
			setCurrentPage(1);
			return;
		}

		let newArr = pageArr.map((data) => data - 10);

		if (newArr[0] < 1) {
			newArr = newArr.map((data) => data + Math.abs(1 - newArr[0]));
			setPageArr(newArr);
			setCurrentPage(newArr[newArr.length - 1]);
		}

		setPageArr(newArr);
		setCurrentPage(newArr[newArr.length - 1]);
	};

	//* 리스트에 있는 게시글로 이동
	const handleMoveList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		router.push(`/board/${e.target.id}`);
	};

	//* 등록페이지로 이동
	const handleMoveRegister = () => {
		router.push(`/board/`);
	};

	return (
		<>
			<BoardsUI
				data={data}
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
