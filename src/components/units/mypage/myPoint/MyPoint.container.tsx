import { useState } from 'react';
import MyPointUI from './MyPoint.presenter';

export default function MyPoint() {

  //* 메뉴 변경 상태
	const [myPointChoice, setMyPointChoice] = useState('all');

  //* 메뉴 변경 함수
	const handleMyPointChoice = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		setMyPointChoice(e.target.id);
	};
	return (
		<MyPointUI
			myPointChoice={myPointChoice}
			handleMyPointChoice={handleMyPointChoice}
		></MyPointUI>
	);
}
