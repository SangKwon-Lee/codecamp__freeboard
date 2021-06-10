import ProductUI from './Products.presenter';
import { FETCH_USED_ITEMS_COUNT, FETCH_USED_ITEMS } from './Products.queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Product() {
	const router = useRouter();

	//* 페이지네이션 상태
	const [currentPage, setCurrentPage] = useState(1);
	const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	//* 검색어 상태
	const [search, setSearch] = useState('');
	const [searchBtn, setSearchBtn] = useState('');

	//* 전체 게시글 불러오기
	const { data } = useQuery(FETCH_USED_ITEMS);

	//* 전체 게시글 숫자 불러오기
	// const { data: count } = useQuery(FETCH_USED_ITEMS_COUNT, {
	// 	variables: { search },
	// });

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

	const handleSearchBtn = () => {
		setSearch(searchBtn);
	};

	//* 리스트에 있는 게시글로 이동
	const handleMoveList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		router.push(`/product/${e.target.id}`);
	};

	//* 등록페이지로 이동
	const handleMoveRegister = () => {
		router.push(`/product/`);
	};

	return (
		<>
			<ProductUI
				data={data}
				handleMoveList={handleMoveList}
				handleMoveRegister={handleMoveRegister}
				currentPage={currentPage}
				pageArr={pageArr}
				hadleSearchInput={hadleSearchInput}
				handleSearchBtn={handleSearchBtn}
			></ProductUI>
		</>
	);
}
