import ProductDetailPageUI from './ProductPage.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_USED_ITEM, TOGGLES_USED_ITEM_PICK } from './ProductPage.queries';
import { useRouter } from 'next/router';
import {
	Query,
	QueryFetchUseditemArgs,
} from '../../../../commons/types/generated/types';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
export default function ProductDetailPage() {
	const router = useRouter();

	//* 데이터 받아오기
	const { data } = useQuery<Query, QueryFetchUseditemArgs>(FETCH_USED_ITEM, {
		variables: { useditemId: String(router.query.id) },
	});

	//* 본인 확인을 위한 전역 관리 상태
	const { userEmail } = useContext(GlobalContext);
	const [isUser, setIsUser] = useState(false);

	//* 이미지 배열
	const [imgArr, setImgArr] = useState([1, 2, 3, 4]);

	//* 현재 이미지에 따른 상태
	const [isActive, setIsActive] = useState(0);
	//* 이미지 갯수가 몇개인가
	const [dataLength, setDataLength] = useState(0);

	//* 본인 확인하는 내용
	useEffect(() => {
		setDataLength(imgArr.length);
		if (userEmail === data?.fetchUseditem.seller.email) {
			setIsUser(true);
		}
	}, [data?.fetchUseditem.seller.email, data]);

	//* 이미지 왼쪽 화살표 클릭시
	const handeImgLeft = () => {
		let newLength = isActive;
		newLength = newLength - 1;
		if (0 > newLength) {
			setIsActive(imgArr.length - 1);
		} else {
			setIsActive(newLength);
		}
	};

	//* 이미지 오른쪽 화살표 클릭시
	const handeImgRight = () => {
		let newLength = isActive;
		newLength = newLength + 1;
		if (imgArr.length <= newLength) {
			setIsActive(0);
		} else {
			setIsActive(newLength);
		}
	};

	//* 페이지 이동
	const handleUpdate = () => {
		router.push(`/product/${router.query.id}/edit`);
	};

	const handleMoveBoards = () => {
		router.push(`/product`);
	};

	let todayList =
		typeof window === 'undefined'
			? [0]
			: JSON.parse(window.localStorage.getItem('todayList'));

	useEffect(() => {
		if (!window.localStorage.getItem('todayList')) {
			window.localStorage.setItem('todayList', JSON.stringify([data]));
		} else if (data !== null) {
			let newTodayList = [];
			newTodayList = [...todayList, JSON.stringify(data)];
			newTodayList = newTodayList.filter((data) => data !== null);

			for (let i = 0; i < newTodayList.length; i++) {
				if (newTodayList[i] === newTodayList[i + 1]) {
					newTodayList.pop();
				}
			}

			if (newTodayList.length > 2) {
				newTodayList.splice(0, 1);
			}
			window.localStorage.setItem('todayList', JSON.stringify(newTodayList));
		}
	}, [data]);

	return (
		<>
			<ProductDetailPageUI
				data={data}
				handleUpdate={handleUpdate}
				handleMoveBoards={handleMoveBoards}
				isUser={isUser}
				imgArr={imgArr}
				handeImgRight={handeImgRight}
				handeImgLeft={handeImgLeft}
				isActive={isActive}
			></ProductDetailPageUI>
		</>
	);
}
