import ProductDetailPageUI from './ProductPage.presenter';
import { useMutation, useQuery } from '@apollo/client';
import {
	FETCH_USED_ITEM,
	TOGGLES_USED_ITEM_PICK,
	CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from './ProductPage.queries';
import { useRouter } from 'next/router';
import {
	Mutation,
	MutationCreatePointTransactionOfBuyingAndSellingArgs,
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
	const { userData } = useContext(GlobalContext);
	const [isUser, setIsUser] = useState(false);
	
	//* 이미지 배열
	const [imgArr, setImgArr] = useState([1, 2, 3, 4]);

	//* 현재 이미지에 따른 상태
	const [isActive, setIsActive] = useState(0);
	//* 이미지 갯수가 몇개인가
	const [dataLength, setDataLength] = useState(0);

	//* 구매 뮤테이션
	const [createPointTransactionOfBuyingAndSelling] = useMutation<
		Mutation,
		MutationCreatePointTransactionOfBuyingAndSellingArgs
	>(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

	//* 본인 확인하는 내용
	useEffect(() => {
		setDataLength(imgArr.length);
		if (userData?._id === data?.fetchUseditem.seller._id) {
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

	//* 로컬스토리지를 이용하여 오늘 본 상품 로직
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

	//* 구매하기 함수
	const handleOnClickBuy = async () => {
		try {
			const result = await createPointTransactionOfBuyingAndSelling({
				variables: {
					useritemId: String(router.query.id),
				},
			});

			alert('구매 성공');
		} catch (error) {
			alert('이미 판매된 상품입니다.');
		}
	};

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
				handleOnClickBuy={handleOnClickBuy}
			></ProductDetailPageUI>
		</>
	);
}
