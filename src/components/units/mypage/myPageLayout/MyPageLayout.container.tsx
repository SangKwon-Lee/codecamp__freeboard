import { useState, useContext } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import MyPageLayoutUI from './MyPageLayout.presenter';

export default function MyPageLayout() {
	const { userData } = useContext(GlobalContext);

	//* 클릭한 메뉴에 따라 CSS 및 컴포넌트 변경 상태
	const [menuChoice, setMenuChoice] = useState('Cart');

	//* 메뉴 변경 함수
	const handleMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLTextAreaElement;
		setMenuChoice(target.id);
	};

	return (
		<MyPageLayoutUI
			handleMenu={handleMenu}
			menuChoice={menuChoice}
			userData={userData}
		></MyPageLayoutUI>
	);
}
