import styled from '@emotion/styled';
import HeaderContainer from './header/Header.container';
import Slide from './slide/Slide.container';
import Menu from './menu/Menu.container';
import Search from '../search/Search.container';

interface ILayout {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => (
	<div>
		<HeaderContainer />
		<Slide></Slide>
		<Menu></Menu>
		<div>{children}</div>
	</div>
);

export default Layout;
