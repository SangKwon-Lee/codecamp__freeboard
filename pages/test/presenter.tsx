import { memo } from 'react';

const PresenterPage = ({ countState }) => {
	return <div>{countState}</div>;
};

export default memo(PresenterPage);
