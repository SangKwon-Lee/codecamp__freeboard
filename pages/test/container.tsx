import { useCallback, useMemo, useState } from 'react';
import PresenterPage from './presenter';
const ContainerPage = () => {
	let countLet = 0;

	let useMemoTest = useMemo(() => Math.random(), []);

	const onClickCountLet = () => {
		countLet += 1;
	};

	const [countState, setCountState] = useState(0);

	const onClickCountState = () => {
		setCountState((prev) => prev + 1);
	};

	const onClickCountState2 = useCallback(() => {
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
