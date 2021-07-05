import {
	DivdieLine,
	MenuMyPage,
	MenuWrapper,
	MenuBoard,
	TitleWrapper,
	MenuProduct,
} from './Menu.styles';
import { MenuProps } from './Menu.types';
export default function MenuUI({ handleMove, move }: MenuProps) {
	return (
		<MenuWrapper>
			<TitleWrapper>
				<MenuBoard
					id="boards"
					onClick={handleMove}
					isActive={move === 'boards'}
				>
					자유게시판
				</MenuBoard>
				<DivdieLine></DivdieLine>
				<MenuProduct
					id="products"
					onClick={handleMove}
					isActive={move === 'products'}
				>
					중고마켓
				</MenuProduct>
				<DivdieLine></DivdieLine>
				<MenuMyPage
					id="mypage"
					onClick={handleMove}
					isActive={move === 'mypage'}
				>
					마이페이지
				</MenuMyPage>
			</TitleWrapper>
		</MenuWrapper>
	);
}
