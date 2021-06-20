import { useState } from 'react';
import MyPointUI from './MyPoint.presenter';

export default function MyPoint() {
	const [myPointChoice, setMyPointChoice] = useState('all');

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
