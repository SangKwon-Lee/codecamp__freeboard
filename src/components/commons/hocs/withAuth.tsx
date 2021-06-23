import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../../pages/_app';
import getAccessToken from '../../../commons/getAccessToken/getAccessToken';

export default function withAuth(Component) {
	return function test(props) {
		const router = useRouter();
		const { accessToken, setAccessToken } = useContext(GlobalContext);

		//* 토큰 체크
		useEffect(() => {
			if (accessToken) return;

			const restoreAccessToken = async () => {
				const newAccessToken = await getAccessToken({ setAccessToken });

				if (!newAccessToken) router.push('/login');
			};

			restoreAccessToken();
		}, []);
		if (!accessToken) return <></>;
		return <Component {...props}></Component>;
	};
}
