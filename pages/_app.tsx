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
		uri: 'http://backend.codebootcamp.co.kr/graphql',
		headers: {
			authorization: `Bearer ${accessToken}`,
			credentials: 'include',
		},
	});
	// @ts-ignore
	// const errorLink = onError(async ({ graphQLErrors, operation, forward }) => {
	// 	// 	//*만료된 토근을 재발급 받기
	// 	if (graphQLErrors) {
	// 		for (let err of graphQLErrors) {
	// 			//* 토큰이 만료된 메시지
	// 			if (err.extensions.code === 'UNAUTHENTICATED') {
	// 				//* 재발급 뮤테이션을 axios로 사용
	// 				const response = await axios.post(
	// 					'http://backend.codebootcamp.co.kr/graphql',
	// 					{
	// 						query: `
	// 						mutation restoreAccessToken {
	// 							restoreAccessToken {
	// 								accessToken
	// 							}
	// 						}
	// 					`,
	// 					},
	// 					//* 설정들
	// 					{
	// 						headers: { 'Content=Type': 'application/json' },
	// 						withCredentials: true,
	// 					},
	// 				);

	// 				//* 재발급토큰
	// 				const newAccessToken =
	// 					response.data.data.restoreAccessToken.accessToken;
	// 				setAccessToken(newAccessToken);

	// 				//* 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기
	// 				operation.setContext({
	// 					headers: {
	// 						...operation.getContext().headers,
	// 						authorization: `Bearer ${newAccessToken}`,
	// 					},
	// 				});
	// 				return forward(operation);
	// 			}
	// 		}
	// 	}
	// });

	const clinet = new ApolloClient({
		link: ApolloLink.from([(uploadLink as unknown) as ApolloLink]),
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
