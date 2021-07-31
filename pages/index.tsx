import Link from 'next/link';
import { useState } from 'react';
import {
	Container,
	MenuWrapper,
	Menu,
	Menu1,
	Menu2,
	Title,
} from '../src/css/menuhover';

export default function MenuHover() {
	const [isTrue, setIsTrue] = useState(false);

	const handleIsTrue = (e) => {
		setIsTrue(e.target.id);
	};

	const handleIsFalse = () => {
		setIsTrue(false);
	};

	return (
		<Container>
			<Title>Kogong FrontEnd Life</Title>
			<MenuWrapper>
				<Menu
					id="github"
					//@ts-ignore
					isTrue={isTrue === 'github'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Github
				</Menu>
				<Menu1
					id="github"
					//@ts-ignore
					isTrue={isTrue === 'github'}
					rel="noreferrer"
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Github
				</Menu1>
				<Link href="https://naver.com">
					<Menu2
						href="https://github.com/SangKwon-Lee"
						target="_blank"
						id="github"
						//@ts-ignore
						isTrue={isTrue === 'github'}
						onMouseOver={handleIsTrue}
						onMouseLeave={handleIsFalse}
					>
						Github
					</Menu2>
				</Link>
			</MenuWrapper>
			<MenuWrapper>
				<Menu
					id="Blog"
					//@ts-ignore
					isTrue={isTrue === 'Blog'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Blog
				</Menu>
				<Menu1
					id="Blog"
					//@ts-ignore
					isTrue={isTrue === 'Blog'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Blog
				</Menu1>
				<Menu2
					id="Blog"
					href="https://sangkwon-lee.github.io/tabs/categories/"
					target="_blank"
					//@ts-ignore
					isTrue={isTrue === 'Blog'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Blog
				</Menu2>
			</MenuWrapper>
			<MenuWrapper>
				<Menu
					id="port"
					//@ts-ignore
					isTrue={isTrue === 'port'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Portfolio
				</Menu>
				<Menu1
					id="port"
					//@ts-ignore
					isTrue={isTrue === 'port'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Portfolio
				</Menu1>
				<Menu2
					id="port"
					href="/boards"
					target="_blank"
					//@ts-ignore
					isTrue={isTrue === 'port'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Portfolio
				</Menu2>
			</MenuWrapper>
			<MenuWrapper>
				<Menu
					id="CSS"
					//@ts-ignore
					isTrue={isTrue === 'CSS'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					CSS
				</Menu>
				<Menu1
					id="CSS"
					//@ts-ignore
					isTrue={isTrue === 'CSS'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					CSS
				</Menu1>
				<Menu2
					id="CSS"
					href="/css"
					// target="_blank"
					//@ts-ignore
					isTrue={isTrue === 'CSS'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					CSS
				</Menu2>
			</MenuWrapper>
		</Container>
	);
}
