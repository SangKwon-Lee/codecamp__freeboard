import { useContext } from 'react';
import { GlobalContext } from '../../../../pages/_app';
import HeaderUI from './Header.presenter';
import { useRouter } from 'next/router';

const HeaderContainer = () => {
	const { accessToken } = useContext(GlobalContext);

	const router = useRouter();

	const handleMoveLoginPage = () => {
		router.push(`/login`);
	};

	return (
		<HeaderUI
			accessToken={accessToken}
			handleMoveLoginPage={handleMoveLoginPage}
		/>
	);
};

export default HeaderContainer;
