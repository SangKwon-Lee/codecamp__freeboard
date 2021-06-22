import { useCallback, useMemo, useState } from 'react';
import PresenterPage from './presenter';
const ContainerPage = () => {
	console.log('컨테이너 부모 렌더링 됨');

	let countLet = 0;

	let useMemoTest = useMemo(() => Math.random(), []);

	const onClickCountLet = () => {
		console.log(countLet);
		countLet += 1;
	};

	const [countState, setCountState] = useState(0);

	const onClickCountState = () => {
		console.log(countState);
		setCountState((prev) => prev + 1);
	};

	const onClickCountState2 = useCallback(() => {
		console.log(countState);
		setCountState(countState + 1);
	}, []);

	
	return (
		<>
			<PresenterPage countState={countState}></PresenterPage>
			<button onClick={onClickCountLet}>CountLet</button>
			<div>countLet {countLet}</div>
			<button onClick={onClickCountState}>CountLet</button>
			<div>countLet {countState}</div>
		</>
	);
};

export default ContainerPage;
