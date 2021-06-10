import { useQuery } from '@apollo/client';
import { assertValidSDLExtension } from 'graphql/validation/validate';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../../pages/_app';

export default function withAuth(Component) {
	return function test(props, asd) {
		//* 토큰 체크
		const router = useRouter();
		const { accessToken } = useContext(GlobalContext);
		console.log(props, asd, 'asd');
		useEffect(() => {
			if (!accessToken) {
				alert('로그인이 필요한 페이지입니다.');
				router.push('/login');
			}
		}, []);
		if (!accessToken) return <></>;
		console.log(4);
		return <Component {...props}></Component>;
	};
}
