import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../../../pages/_app';
import HeaderUI from './Header.presenter';
import { useRouter } from 'next/router';
import { modalGlobalConfig } from 'antd/lib/modal/confirm';

const HeaderContainer = () => {
	//* 토큰 및 본인 정보 받아오기
	const { accessToken, userData } = useContext(GlobalContext);

	//* 본인 정보 모달 상태
	const [isModal, setIsModal] = useState(false);

	const router = useRouter();

	const handleMoveLoginPage = () => {
		router.push(`/login`);
	};

	const handleIsModal = () => {
		setIsModal((prev) => !prev);
	};

	return (
		<HeaderUI
			accessToken={accessToken}
			handleMoveLoginPage={handleMoveLoginPage}
			userData={userData}
			isModal={isModal}
			handleIsModal={handleIsModal}
		/>
	);
};

export default HeaderContainer;
