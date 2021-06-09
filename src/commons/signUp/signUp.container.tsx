import { useRouter } from 'next/router';
import { useState } from 'react';
import { CREATE_USER } from './signUp.queries';
import SignUpUI from './signUp.presenter';
import { useMutation } from '@apollo/client';
import { Mutation, MutationCreateUserArgs } from '../types/generated/types';
export default function SignUpPage() {
	const router = useRouter();
	const [SignUpData, setSignUpData] = useState({
		email: '',
		name: '',
		password: '',
		passwordCheck: '',
	});
	const [createUser] = useMutation<Mutation, MutationCreateUserArgs>(
		CREATE_USER,
	);
	const [signUpIsTrue, setSignUpIstrue] = useState(true);
	const [signUpOK, setSignUpOk] = useState(false);

	const handleSignUpDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newData = {
			...SignUpData,
			[e.target.name]: e.target.value,
		};
		setSignUpData(newData);

		if (
			newData.email.length === 0 ||
			newData.name.length === 0 ||
			newData.password.length === 0 ||
			newData.passwordCheck.length === 0
		) {
			setSignUpIstrue(true);
		} else {
			setSignUpIstrue(false);
		}
	};

	const signUpBtn = async () => {
		if (SignUpData.password !== SignUpData.passwordCheck) {
			alert('비밀번호가 서로 일치하지 않습니다.');
			return;
		}

		try {
			const result = await createUser({
				variables: {
					createUserInput: {
						email: SignUpData.email,
						name: SignUpData.name,
						password: SignUpData.password,
					},
				},
			});
			setSignUpOk(true);
			console.log(signUpOK, 'asdasd');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SignUpUI
			handleSignUpDate={handleSignUpDate}
			signUpBtn={signUpBtn}
			signUpIsTrue={signUpIsTrue}
			signUpOK={signUpOK}
		/>
	);
}
