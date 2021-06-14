import { useRouter } from 'next/router';
import { useState } from 'react';
import { CREATE_USER } from './signUp.queries';
import SignUpUI from './signUp.presenter';
import { useMutation } from '@apollo/client';
import { Mutation, MutationCreateUserArgs } from '../types/generated/types';
export default function SignUpPage() {
	const router = useRouter();

	//* 회원가입 데이터 상태
	const [SignUpData, setSignUpData] = useState({
		email: '',
		name: '',
		password: '',
		passwordCheck: '',
	});

	//* 데이터 입력시에 따른 회원가입 버튼 disable 상태
	const [signUpIsTrue, setSignUpIstrue] = useState(true);

	//* 회원가입 성공 모달 오픈 상태
	const [signUpOK, setSignUpOk] = useState(false);

	//* 회원가입 뮤테이션
	const [createUser] = useMutation<Mutation, MutationCreateUserArgs>(
		CREATE_USER,
	);

	//* 회원가입 인풋 데이터 함수
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

	//* 회원가입 뮤테이션 함수
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
		} catch (error) {
			setSignUpOk(false);
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
