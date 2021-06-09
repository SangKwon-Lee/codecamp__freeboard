import {
	DivdieLine,
	MenuTitle,
	MenuWrapper,
	TitleWrapper,
} from './Menu.styles';
import { MenuProps } from './Menu.types';
export default function MenuUI({
	handleMoveBoards,
	handleMoveUsedItem,
}: MenuProps) {
	return (
		<MenuWrapper>
			<TitleWrapper>
				<MenuTitle onClick={handleMoveBoards}>자유게시판</MenuTitle>
				<DivdieLine></DivdieLine>
				<MenuTitle onClick={handleMoveUsedItem}>중고마켓</MenuTitle>
				<DivdieLine></DivdieLine>
				<MenuTitle>마이페이지</MenuTitle>
			</TitleWrapper>
		</MenuWrapper>
	);
}
