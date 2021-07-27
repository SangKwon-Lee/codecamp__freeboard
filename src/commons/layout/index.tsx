import HeaderContainer from './header/Header.container';
import Slide from './slide/Slide.container';
import Menu from './menu/Menu.container';
import { useRouter } from 'next/router';

interface ILayout {
	children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
	const router = useRouter();
	const pathName =
		router.pathname !== '/signup' &&
		router.pathname !== '/login' &&
		router.pathname.slice(0, 4) !== '/css' &&
		router.pathname !== '/';
	return (
		<div>
			{pathName && (
				<>
					<HeaderContainer />
					<Slide></Slide>
					<Menu></Menu>
				</>
			)}
			<div>{children}</div>
		</div>
	);
}
