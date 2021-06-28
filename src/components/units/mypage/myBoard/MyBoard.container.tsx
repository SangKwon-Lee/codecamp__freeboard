import { useState } from 'react';
import MyBoardUI from './MyBoard.presenter';
export default function MyBoard() {
	//* 페이지네이션 상태
	const [currentPage, setCurrentPage] = useState(1);
	const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	//* 메뉴 변경 상태
	const [changeMyBoardMenu, setChangeMyBoardMenu] = useState('product');

	//* 메뉴 변경 함수
	const handleChangeMyBoardMenu = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		const target = e.target as HTMLTextAreaElement;
		setChangeMyBoardMenu(target.id);
	};

	return (
		<MyBoardUI
			changeMyBoardMenu={changeMyBoardMenu}
			handleChangeMyBoardMenu={handleChangeMyBoardMenu}
			pageArr={pageArr}
			currentPage={currentPage}
		></MyBoardUI>
	);
}
