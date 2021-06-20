import {
	DivdieLine,
	MenuTitle,
	MenuWrapper,
	TitleWrapper,
} from './Menu.styles';
import { MenuProps } from './Menu.types';
export default function MenuUI({ handleMove, move }: MenuProps) {
	return (
		<MenuWrapper>
			<TitleWrapper>
				<MenuTitle
					id="boards"
					onClick={handleMove}
					isActive={move === 'boards'}
				>
					자유게시판
				</MenuTitle>
				<DivdieLine></DivdieLine>
				<MenuTitle
					id="products"
					onClick={handleMove}
					isActive={move === 'products'}
				>
					중고마켓
				</MenuTitle>
				<DivdieLine></DivdieLine>
				<MenuTitle
					id="mypage"
					onClick={handleMove}
					isActive={move === 'mypage'}
				>
					마이페이지
				</MenuTitle>
			</TitleWrapper>
		</MenuWrapper>
	);
}
