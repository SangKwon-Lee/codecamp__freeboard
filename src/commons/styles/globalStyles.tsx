import { Global, css } from '@emotion/react';

const reset = css`
	* {
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
		font-family: 'Noto Sans Kr', Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
`;

const GlobalStyles = () => {
	return <Global styles={reset}></Global>;
};

export default GlobalStyles;
