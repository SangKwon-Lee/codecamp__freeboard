import {
	DivdieLine,
	MenuTitle,
	MenuWrapper,
	TitleWrapper,
} from './Menu.styles';

export default function MenuUI({ handleMoveBoards }) {
	return (
		<MenuWrapper>
			<TitleWrapper>
				<MenuTitle onClick={handleMoveBoards}>자유게시판</MenuTitle>
				<DivdieLine></DivdieLine>
				<MenuTitle>중고마켓</MenuTitle>
				<DivdieLine></DivdieLine>
				<MenuTitle>마이페이지</MenuTitle>
			</TitleWrapper>
		</MenuWrapper>
	);
}
