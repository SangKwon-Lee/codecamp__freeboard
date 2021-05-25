import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import '../styles/globals.css';
import Layout from '../src/commons/layout/index';

function MyApp({ Component, pageProps }) {
	const clinet = new ApolloClient({
		uri: 'http://backend.codebootcamp.co.kr/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<Layout>
			<ApolloProvider client={clinet}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Layout>
	);
}

export default MyApp;
