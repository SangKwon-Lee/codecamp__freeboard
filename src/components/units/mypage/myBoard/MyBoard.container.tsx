import { useQuery } from '@apollo/client';
import { Router } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import {
	Query,
	QueryFetchUseditemArgs,
} from '../../../../commons/types/generated/types';
import MyBoardUI from './MyBoard.presenter';
import { FETCH_USEDITEM_ISOLD } from './MyBoard.queries';
export default function MyBoard() {
	const router = useRouter();

	//* 페이지네이션 상태
	const [currentPage, setCurrentPage] = useState(1);
	const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	//* 메뉴 변경 상태
	const [changeMyBoardMenu, setChangeMyBoardMenu] = useState('product');

	//* 내가 올린 게시글 쿼리
	const { data } = useQuery<Query, QueryFetchUseditemArgs>(
		FETCH_USEDITEM_ISOLD,
	);

	//* 메뉴 변경 함수
	const handleChangeMyBoardMenu = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		const target = e.target as HTMLTextAreaElement;
		setChangeMyBoardMenu(target.id);
	};

	//* 페이지 이동
	const handleMovePage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLTextAreaElement;
		router.push(`product/${target.id}`);
	};
	return (
		<MyBoardUI
			changeMyBoardMenu={changeMyBoardMenu}
			handleChangeMyBoardMenu={handleChangeMyBoardMenu}
			pageArr={pageArr}
			currentPage={currentPage}
			data={data}
			handleMovePage={handleMovePage}
		></MyBoardUI>
	);
}
