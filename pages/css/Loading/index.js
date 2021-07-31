import { Container, Loading, Text, Percent, Progress } from '../../../src/css/Loading';

export default function LoadingUI() {
	return (
		<Container>
			<Loading>
				<Text>Loading</Text>
				<Percent>
					<Progress></Progress>
				</Percent>
			</Loading>
		</Container>
	);
}
