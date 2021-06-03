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

function MyApp({ Component, pageProps }) {
	const uploadLink = createUploadLink({
		uri: 'http://backend.codebootcamp.co.kr/graphql',
	});

	const clinet = new ApolloClient({
		link: ApolloLink.from([(uploadLink as unknown) as ApolloLink]),
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={clinet}>
			<Layout>
				<GlobalStyles />
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
