import { useMutation } from '@apollo/client';
import { useState } from 'react';
import {
	Mutation,
	MutationResetUserPasswordArgs,
} from '../../../../commons/types/generated/types';
import MyProfileUI from './myProfile.presenter';
import { RESET_USER_PASSWORD } from './MyProfile.queries';

export default function MyProfile() {
	const [password, setPassword] = useState({
		now: '',
		new: '',
		checknew: '',
	});

	const [resetUserPassword] = useMutation<
		Mutation,
		MutationResetUserPasswordArgs
	>(RESET_USER_PASSWORD);

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newPassword = {
			...password,
			[e.target.name]: e.target.value,
		};
		setPassword(newPassword);
	};

	const handleResetUserPassword = async () => {
		if (password.new === password.checknew) {
			try {
				const result = await resetUserPassword({
					variables: {
						password: password.new,
					},
				});
				alert('비밀번호가 변경됐습니다.');
			} catch (error) {
				console.log(error);
			}
		} else {
			alert('비밀번호가 서로 다릅니다.');
		}
	};

	return (
		<MyProfileUI
			handlePassword={handlePassword}
			handleResetUserPassword={handleResetUserPassword}
		></MyProfileUI>
	);
}
