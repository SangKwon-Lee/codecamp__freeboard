import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../../pages/_app';
import { Mutation, MutationLoginUserArgs } from '../types/generated/types';
import LoginUI from './Login.presenter';
import { LOGIN_USER } from './Login.queries';
export default function LoginPage() {
	const router = useRouter();

	//* 토큰 담기, 본인 확인을 위해 Email을 전역으로 관리.
	const { setAccessToken, setUserEmail } = useContext(GlobalContext);

	//* 로그인 Email 오류 메시지 관리 상태
	const [handleEmail, sethandleEmail] = useState(false);
	const [handlePassword, sethandlePassword] = useState(false);

	//* 내용입력에 따른 Disable 관리 상태
	const [handleLoginBtn, setHandleLoginBtn] = useState(true);

	//* 로그인 데이터 관리
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	//* 로그인 뮤테이션
	const [loginUser] = useMutation<Mutation, MutationLoginUserArgs>(LOGIN_USER);


	//* 로그인 데이터 관리 함수
	const handleLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newData = { ...loginData, [e.target.name]: e.target.value };
		setLoginData(newData);

		if (newData.email.length !== 0 && newData.password.length !== 0) {
			setHandleLoginBtn(false);
		} else {
			setHandleLoginBtn(true);
		}
		newData.email.length === 0 ? sethandleEmail(true) : sethandleEmail(false);

		newData.password.length === 0
			? sethandlePassword(true)
			: sethandlePassword(false);
	};

	//* 로그인 뮤테이션 함수
	const loginBtn = async () => {
		try {
			const { data } = await loginUser({
				variables: {
					...loginData,
				},
			});
			setAccessToken(data?.loginUser.accessToken);
			setUserEmail(loginData.email);
			router.push('/boards');
		} catch (error) {
			console.log(error);
		}
	};

	//* 회원가입 페이지로 이동
	const handleMoveSignUp = () => {
		router.push(`/signup`);
	};
	
	//* 엔터 누를시 로그인 뮤테이션 함수 실행
	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			loginBtn();
		}
	};
	return (
		<LoginUI
			handleEmail={handleEmail}
			handlePassword={handlePassword}
			handleLoginData={handleLoginData}
			loginBtn={loginBtn}
			handleLoginBtn={handleLoginBtn}
			handleMoveSignUp={handleMoveSignUp}
			onKeyPress={onKeyPress}
		/>
	);
}
