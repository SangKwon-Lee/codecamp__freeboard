import { useState, useContext } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import MyPageLayoutUI from './MyPageLayout.presenter';

export default function MyPageLayout() {
	const { userData } = useContext(GlobalContext);
	const [menuHandle, setMenuHandle] = useState(false);

	//* 클릭한 메뉴에 따라 CSS 변경 상태
	const [menuChoice, setMenuChoice] = useState('Point');

	const handleMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setMenuChoice(e.target.id);
	};

	return (
		<MyPageLayoutUI
			handleMenu={handleMenu}
			menuChoice={menuChoice}
			userData={userData}
		></MyPageLayoutUI>
	);
}
