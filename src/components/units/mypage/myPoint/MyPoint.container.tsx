import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
	Query,
	QueryFetchUseditemsArgs,
} from '../../../../commons/types/generated/types';
import MyPointUI from './MyPoint.presenter';
import {
	FETCH_POINT_TRANSACTIONS_OF_LOADING,
	FETCH_POINT_TRANSACTIONS_OF_BUYING,
	FETCH_POINT_TRANSACTIONS_OF_SELLING,
	FETCH_POINT_TRANSACTIONS,
} from './MyPoint.queries';

export default function MyPoint() {
	const router = useRouter();
	//* 메뉴 변경 상태
	const [myPointChoice, setMyPointChoice] = useState('all');

	//* 메뉴 변경 함수
	const handleMyPointChoice = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		const target = e.target as HTMLTextAreaElement;
		setMyPointChoice(target.id);
	};

	//* 모든 내역 쿼리
	const { data: allData } = useQuery<Query, QueryFetchUseditemsArgs>(
		FETCH_POINT_TRANSACTIONS,
	);
	//* 내 포인트 충전내역 쿼리
	const { data: pointData } = useQuery<Query, QueryFetchUseditemsArgs>(
		FETCH_POINT_TRANSACTIONS_OF_LOADING,
	);

	//* 내 구매내역 쿼리
	const { data: buyingData } = useQuery<Query, QueryFetchUseditemsArgs>(
		FETCH_POINT_TRANSACTIONS_OF_BUYING,
	);

	//* 내 판매내역 쿼리
	const { data: sellData } = useQuery<Query, QueryFetchUseditemsArgs>(
		FETCH_POINT_TRANSACTIONS_OF_SELLING,
	);

	//* 페이지 이동
	const handleMovePage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLTextAreaElement;
		router.push(`product/${target.id}`);
	};

	return (
		<MyPointUI
			allData={allData}
			pointData={pointData}
			buyingData={buyingData}
			sellData={sellData}
			myPointChoice={myPointChoice}
			handleMyPointChoice={handleMyPointChoice}
			handleMovePage={handleMovePage}
		></MyPointUI>
	);
}
