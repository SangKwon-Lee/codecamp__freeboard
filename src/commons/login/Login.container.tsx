import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../../pages/_app';
import { Mutation } from '../types/generated/types';
import LoginUI from './Login.presenter';
import { LOGIN_USER } from './Login.queries';
export default function LoginPage() {
	const router = useRouter();
	const [loginUser] = useMutation<Mutation>(LOGIN_USER);
	const { setAccessToken } = useContext(GlobalContext);
	const [handleEmail, sethandleEmail] = useState(false);
	const [handlePassword, sethandlePassword] = useState(false);
	const [handleLoginBtn, setHandleLoginBtn] = useState(true);
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

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

	const loginBtn = async () => {
		try {
			const { data } = await loginUser({
				variables: {
					...loginData,
				},
			});
			setAccessToken(data?.loginUser.accessToken);
			router.push('/boards');
		} catch (error) {
			console.log(error);
		}
	};

	const handleMoveSignUp = () => {
		router.push(`/signup`);
	};

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
