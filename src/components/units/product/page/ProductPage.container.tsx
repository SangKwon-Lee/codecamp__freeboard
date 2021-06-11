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
	const { userEmail } = useContext(GlobalContext);
	const [isUser, setIsUser] = useState(false);
	const [imgArr, setImgArr] = useState([1, 2, 3, 4]);
	const [isActive, setIsActive] = useState(0);
	const [dataLength, setDataLength] = useState(0);

	//* 본인 확인하는 내용
	useEffect(() => {
		setDataLength(imgArr.length);
		if (userEmail === data?.fetchUseditem.seller.email) {
			setIsUser(true);
		}
	}, [data?.fetchUseditem.seller.email, data]);

	const handeImgLeft = () => {
		let newLength = isActive;
		newLength = newLength - 1;
		if (0 > newLength) {
			setIsActive(imgArr.length - 1);
		} else {
			setIsActive(newLength);
		}
	};

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
