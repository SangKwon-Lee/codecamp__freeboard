import { useContext } from 'react';
import HeaderUI from './Header.presenter';
import { GlobalContext } from '../../../../pages/_app';
import { useRouter } from 'next/router';

const HeaderContainer = () => {
	const { accessToken } = useContext(GlobalContext);
	console.log(accessToken);

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
