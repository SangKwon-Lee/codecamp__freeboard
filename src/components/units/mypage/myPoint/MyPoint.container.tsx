import { useState } from 'react';
import MyPointUI from './MyPoint.presenter';

export default function MyPoint() {
	//* 메뉴 변경 상태
	const [myPointChoice, setMyPointChoice] = useState('all');

	//* 메뉴 변경 함수
	const handleMyPointChoice = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		const target = e.target as HTMLTextAreaElement;
		setMyPointChoice(target.id);
	};
	return (
		<MyPointUI
			myPointChoice={myPointChoice}
			handleMyPointChoice={handleMyPointChoice}
		></MyPointUI>
	);
}
