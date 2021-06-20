import { useState } from 'react';
import MyBoardUI from './MyBoard.presenter';
export default function MyBoard() {
	const [changeMyBoardMenu, setChangeMyBoardMenu] = useState('product');

	const handleChangeMyBoardMenu = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		setChangeMyBoardMenu(e.target.id);
	};

	return (
		<MyBoardUI
			changeMyBoardMenu={changeMyBoardMenu}
			handleChangeMyBoardMenu={handleChangeMyBoardMenu}
		></MyBoardUI>
	);
}
