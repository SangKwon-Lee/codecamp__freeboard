import ProductUI from './Products.presenter';
import { FETCH_USED_ITEMS_COUNT, FETCH_USED_ITEMS } from './Products.queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Query } from '../../../../commons/types/generated/types';

export default function Product() {
	const router = useRouter();

	//* 게시글 페이지 상태
	const [currentPage, setCurrentPage] = useState(0);

	//* 검색어 상태
	const [search, setSearch] = useState('');
	const [searchBtn, setSearchBtn] = useState('');

	//* 전체 게시글 불러오기
	const { data, fetchMore } = useQuery<Query>(FETCH_USED_ITEMS, {
		variables: { page: currentPage, search },
	});

	//* 로컬스토리지를 이용하여 오늘 본 상품 로직
	const [todayList, setTodayList] = useState([]);
	useEffect(() => {
		let data = [];
		let jsonData = JSON.parse(window.localStorage.getItem('todayList'));
		if (window.localStorage.getItem('todayList')) {
			for (let i = 0; i < jsonData.length; i++) {
				data.push(JSON.parse(jsonData[i]));
			}
			setTodayList(data);
		}
	}, []);

	//* 검색어 관련 함수들
	const hadleSearchInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
		let timer;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			setSearch(e.target.value);
		}, 1000);
	};

	//* 버튼 클릭시 검색되도록
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

	//* 인피니티 스크롤 설정
	const LoadMore = () => {
		if (data?.fetchUseditems.length % 10 !== 0) return;

		fetchMore({
			variables: {
				page: Math.floor(data?.fetchUseditems.length / 10) + 1,
			},
			updateQuery: (prev, { fetchMoreResult }) => ({
				fetchUseditems: [
					...prev.fetchUseditems,
					...fetchMoreResult.fetchUseditems,
				],
			}),
		});
	};

	return (
		<>
			<ProductUI
				data={data}
				handleMoveList={handleMoveList}
				handleMoveRegister={handleMoveRegister}
				currentPage={currentPage}
				hadleSearchInput={hadleSearchInput}
				handleSearchBtn={handleSearchBtn}
				LoadMore={LoadMore}
				todayList={todayList}
			></ProductUI>
		</>
	);
}
