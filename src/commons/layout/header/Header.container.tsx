import { useContext } from 'react';
import { GlobalContext } from '../../../../pages/_app';
import HeaderUI from './Header.presenter';
import { useRouter } from 'next/router';

const HeaderContainer = () => {
	const { accessToken, userData } = useContext(GlobalContext);

	const router = useRouter();

	const handleMoveLoginPage = () => {
		router.push(`/login`);
	};

	return (
		<HeaderUI
			accessToken={accessToken}
			handleMoveLoginPage={handleMoveLoginPage}
			userData={userData}
		/>
	);
};

export default HeaderContainer;
