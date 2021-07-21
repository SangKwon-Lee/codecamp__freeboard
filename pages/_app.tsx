import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	ApolloLink,
} from '@apollo/client';
import '../styles/globals.css';
import Layout from '../src/commons/layout/index';
import GlobalStyles from '../src/commons/styles/globalStyles';
import { createUploadLink } from 'apollo-upload-client';
import { createContext, useEffect, useState } from 'react';
import { onError } from '@apollo/client/link/error';
import axios from 'axios';
import getAccessToken from '../src/commons/getAccessToken/getAccessToken';

const userDataInit = {
	name: '',
	_id: '',
	email: '',
	createdAt: '',
	updatedAt: '',
	userPoint: {
		_id: '',
		amount: '',
		createdAt: '',
		updatedAt: '',
	},
};

//* 전역상태로 보낼 것들
export const GlobalContext = createContext({
	accessToken: '',
	setAccessToken: (__: string) => {},
	userData: userDataInit,
	setUserData: (__: typeof userDataInit) => {},
});

function MyApp({ Component, pageProps }) {
	const [accessToken, setAccessToken] = useState('');
	const [userData, setUserData] = useState(userDataInit);
	//* 모든 쿼리, 뮤테이션에 토큰이 들어가게 만들어 줌.
	const uploadLink = createUploadLink({
		uri: 'https://backend02.codebootcamp.co.kr/graphql',
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
		credentials: 'include',
	});

	// @ts-ignore
	const errorLink = onError(({ graphQLErrors, operation, forward }) => {
		if (graphQLErrors) {
			for (let err of graphQLErrors) {
				if (err.extensions.code === 'UNAUTHENTICATED') {
					// const newAccessToken = getAccessToken({ setAccessToken });
					// 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기
					operation.setContext({
						headers: {
							...operation.getContext().headers,
							// 스프레드로 기존의 헤더 부분을 가져온 후
							authorization: `bearer ${getAccessToken({ setAccessToken })}`,
							// 새로 가져온 AccessToken 을 넣어준다.
						},
					});
					return forward(operation);
				}
			}
		}
	});

	const clinet = new ApolloClient({
		link: ApolloLink.from([errorLink, uploadLink]),
		cache: new InMemoryCache(),
	});

	const value = {
		accessToken,
		setAccessToken,
		userData,
		setUserData,
	};

	return (
		<>
			{/* //*프로바이더를 통해 전역으로 나가게 된다. */}
			<GlobalContext.Provider value={value}>
				<ApolloProvider client={clinet}>
					<Layout>
						<GlobalStyles />
						<Component {...pageProps} />
					</Layout>
				</ApolloProvider>
			</GlobalContext.Provider>
		</>
	);
}

export default MyApp;
