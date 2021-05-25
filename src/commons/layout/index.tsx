import styled from '@emotion/styled';
import HeaderContainer from './header/Header.container';
import Slide from './slide/Slide.container';

interface ILayout {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => (
	<div>
		<HeaderContainer />
		<Slide></Slide>
		<div>{children}</div>
	</div>
);

export default Layout;
