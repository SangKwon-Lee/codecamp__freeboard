import ProductsUIBest from './ProductsBest.presenter';
import { FETCH_USED_ITEMS_BEST } from './ProductsBest.queries';
import { useQuery } from '@apollo/client';
import {
	Query,
	QueryFetchUseditemArgs,
} from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

export default function ProductsBest() {
	const router = useRouter();

	//* 베스트 게시글 불러오기
	const { data } = useQuery<Query, QueryFetchUseditemArgs>(
		FETCH_USED_ITEMS_BEST,
	);

	//* 베스트 게시글 이동
	const handleMoveList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		router.push(`/product/${e.target.id}`);
	};

	return (
		<ProductsUIBest
			data={data}
			handleMoveList={handleMoveList}
		></ProductsUIBest>
	);
}
