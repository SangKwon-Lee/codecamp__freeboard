import { useState } from 'react';
import MyProfileUI from './myProfile.presenter';

export default function MyProfile() {
	const [password, setPassword] = useState({
		now: '',
		new: '',
		checknew: '',
	});

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newPassword = {
			...password,
			[e.target.name]: e.target.value,
		};
		setPassword(newPassword);
	};
	return <MyProfileUI handlePassword={handlePassword}></MyProfileUI>;
}
