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
import { createContext, useState } from 'react';

export const GlobalContext = createContext({
	accessToken: '',
	setAccessToken: (__: string) => {},
});

function MyApp({ Component, pageProps }) {
	const [accessToken, setAccessToken] = useState('');

	const uploadLink = createUploadLink({
		uri: 'http://backend.codebootcamp.co.kr/graphql',
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});

	const clinet = new ApolloClient({
		link: ApolloLink.from([(uploadLink as unknown) as ApolloLink]),
		cache: new InMemoryCache(),
	});

	const value = {
		accessToken,
		setAccessToken,
	};

	return (
		<GlobalContext.Provider value={value}>
			<ApolloProvider client={clinet}>
				<Layout>
					<GlobalStyles />
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</GlobalContext.Provider>
	);
}

export default MyApp;
