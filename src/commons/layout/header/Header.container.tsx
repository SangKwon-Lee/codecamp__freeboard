import { useContext, useState } from 'react';
import { GlobalContext } from '../../../../pages/_app';
import HeaderUI from './Header.presenter';
import { useRouter } from 'next/router';
import { LOGOUT_USER } from './Header.queries';
import { useMutation } from '@apollo/client';
import { Mutation } from '../../types/generated/types';

const HeaderContainer = () => {
	//* 토큰 및 본인 정보 받아오기
	const { accessToken, userData } = useContext(GlobalContext);

	//* 본인 정보 모달 상태
	const [isModal, setIsModal] = useState(false);

	const [isPayment, setIsPayment] = useState(false);

	const router = useRouter();

	const handleMoveLoginPage = () => {
		router.push(`/login`);
	};

	//* 본인 정보 모달창 열고 닫는 함수
	const handleIsModal = () => {
		setIsModal((prev) => !prev);
	};

	//* 충전 모달 열고 닫는 함수.
	const handleIsPayment = () => {
		setIsPayment(true);
		setIsModal((prev) => !prev);
	};

	const handleIsPaymentClose = () => {
		setIsPayment(false);
	};

	//* 로그아웃 뮤테이션
	const [logoutUser] = useMutation<Mutation>(LOGOUT_USER);

	//* 로그아웃 뮤테이션 함수

	const handleLogout = async () => {
		try {
			const result = await logoutUser({});
			router.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<HeaderUI
			accessToken={accessToken}
			handleMoveLoginPage={handleMoveLoginPage}
			userData={userData}
			isModal={isModal}
			handleIsModal={handleIsModal}
			handleIsPayment={handleIsPayment}
			isPayment={isPayment}
			handleIsPaymentClose={handleIsPaymentClose}
			handleLogout={handleLogout}
		/>
	);
};

export default HeaderContainer;
