import { memo } from 'react';

const PresenterPage = ({ countState }) => {
	console.log('프레젠터 렌더링 됨');
	return <div>{countState}</div>;
};

export default memo(PresenterPage);
