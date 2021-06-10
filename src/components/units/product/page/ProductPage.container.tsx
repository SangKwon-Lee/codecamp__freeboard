import ProductDetailPageUI from './ProductPage.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_USED_ITEM, TOGGLES_USED_ITEM_PICK } from './ProductPage.queries';
import { useRouter } from 'next/router';
import {
	Query,
	QueryFetchUseditemArgs,
} from '../../../../commons/types/generated/types';
import ProductComments from '../comments/ProductComments.container';
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

	useEffect(() => {
		if (userEmail === data?.fetchUseditem.seller.email) {
			setIsUser(true);
		}
	}, [data?.fetchUseditem.seller.email]);

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
			></ProductDetailPageUI>
			<ProductComments></ProductComments>
		</>
	);
}
