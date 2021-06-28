import BoardsUI from './Boards.presenter';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './Boards.queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Boards() {
	const router = useRouter();

	//* 페이지네이션 상태
	const [currentPage, setCurrentPage] = useState(1);
	const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	//* 검색어 상태
	const [search, setSearch] = useState('');
	const [searchBtn, setSearchBtn] = useState('');

	//* 전체 게시글 불러오기
	const { data } = useQuery(FETCH_BOARDS, {
		variables: { page: currentPage, search },
	});

	//* 전체 게시글 숫자 불러오기
	const { data: count } = useQuery(FETCH_BOARDS_COUNT, {
		variables: { search },
	});

	//* 검색어 관련 함수들
	const hadleSearchInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
		let timer;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			console.log('asd', setSearch(e.target.value));
		}, 1000);
	};

	//* 검색어 버튼을 눌렀을 시 search가 되도록
	const handleSearchBtn = () => {
		setSearch(searchBtn);
	};

	//* Count에 따른 페이지네이션 값을 변경하기 위한 UesEffect
	useEffect(() => {
		if (count?.fetchBoardsCount / 10 <= 10) {
			let newArr = new Array(10)
				.fill(1)
				.map((data, index) => data + index)
				.filter((data) => data <= count.fetchBoardsCount / 10 + 1);
			setPageArr(newArr);
			setCurrentPage(1);
		} else {
			setCurrentPage(1);
			setPageArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		}
	}, [count]);

	//* 페이지네이션에서 숫자 클릭시
	const onClickPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLTextAreaElement;
		setCurrentPage(Number(target.id));
	};

	//* 페이지네이션에서 오른쪽 화살표 이동시
	const RightArrowPage = () => {
		//*먼저 pageArr에 있는 데이터에 10을 더한다.
		let newArr = pageArr.map((data) => data + 10);

		//* 마지막 페이지가 몇인지 구한다.
		let last = Math.floor(count.fetchBoardsCount / 10) + 1;

		//* 만약 현재 페이지가 마지막 페이지인 경우에서 한 번 더 화살표를 누르면
		//* 마지막 페이지라고 알려준다.
		if (currentPage === last) {
			return alert('마지막 페이지 입니다.');
		}

		//* 페이지를 넘길 때 1의 자리가 항상 1로 시작하게 된다. 11 / 21 / 31 / 41
		//* 이런 식으로 페이지가 넘어간다.
		//* 그럴 경우 만약 현재 페이지가 131이고 마지막 페이지가 136일 때
		//* 한 번 더 누르면 131 -> 136으로 넘어가게 된다.
		if (pageArr[pageArr.length - 1] === last) {
			setCurrentPage(last);
			return;
		}

		//* 만약 페이지를 넘기다가 마지막 페이지가 왔을 경우
		//* 더 이상 페이지가 넘어가지 않도록 막아주는 함수이다.
		//* 그리고 항상 10개씩 나오기 위해 121 ~ 130 에서 136이 마지막 페이지일 경우
		//* 127~136이 나오도록 했다.
		if (newArr[newArr.length - 1] > count.fetchBoardsCount / 10) {
			newArr = newArr.map((data) => data - (newArr[newArr.length - 1] - last));
			setPageArr(newArr);
			setCurrentPage(newArr[newArr.length - 1]);
		}
		//* pageArr에서 10이 더해진 값을 넣어주고
		//* 페이지를 넘길 때 기본 값은 각 페이지의 1번으로 해준다.
		setPageArr(newArr);

		setCurrentPage(newArr[0]);
	};

	//* 페이지네이션에서 왼쪽 화살표 이동시
	const LeftArrowPage = () => {
		//* 마지막 페이지 수
		let last = Math.floor(count.fetchBoardsCount / 10) + 1;
		//* 마지막 페이지는 넘버라서 스트링으로 변환
		let lastString = String(last);
		//* 마지막 페이지의 1의 자리를 구한다.
		let WhenLastPage = Number(lastString[lastString.length - 1]);
		if (currentPage <= 1) {
			return alert('처음 페이지 입니다.');
		}

		//* 126~137 이렇게 10의 단위로 떨어지지 않을 경우
		//* 이 상태에서 < 을 클릭하면 121~130으로 가도록 만들었다.
		//* 그러기 위해서 마지막 페이지의 1의 자리가 필요했다.
		if (pageArr.length < 10) {
			return setCurrentPage(1);
		}

		if (pageArr[pageArr.length - 1] === last) {
			let newArr = pageArr.map((data) => data - WhenLastPage);
			setPageArr(newArr);
			setCurrentPage(newArr[0]);
			return;
		}
		//* 1~10 페이지에서 현재 페이지가 10인 경우에서
		//* 화살표 클릭시 1로 간다
		if (pageArr[0] === 1) {
			setCurrentPage(1);
			return;
		}

		//* 여기는 평범하게.
		let newArr = pageArr.map((data) => data - 10);

		if (newArr[0] < 1) {
			newArr = newArr.map((data) => data + Math.abs(1 - newArr[0]));
			setPageArr(newArr);
			setCurrentPage(newArr[0]);
		}
		setPageArr(newArr);
		setCurrentPage(newArr[0]);
	};

	//* 리스트에 있는 게시글로 이동
	const handleMoveList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLTextAreaElement;
		router.push(`/board/${target.id}`);
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
				hadleSearchInput={hadleSearchInput}
				handleSearchBtn={handleSearchBtn}
			></BoardsUI>
		</>
	);
}
