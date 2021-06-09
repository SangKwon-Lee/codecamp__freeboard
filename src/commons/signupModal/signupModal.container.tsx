import { useRouter } from 'next/router';
import SignUpModalUI from './signupModal.presenter';

export default function SignUpModal() {
	const router = useRouter();

	const hanldeMoveLoginPage = () => {
		router.push(`/login`);
	};

	return (
		<SignUpModalUI hanldeMoveLoginPage={hanldeMoveLoginPage}></SignUpModalUI>
	);
}
