import {
	Container,
	BoardWrapper,
	TitleWrapper,
	Title,
	NameAndPassword,
	NameWrapper,
	Name,
	NameInput,
	Password,
	PasswordInput,
	PasswordWrapper,
	Content,
	ContentTextBot,
	ContentTitle,
	ContentTitleInput,
	Address,
	AddressBtn,
	AddressWrapper,
	AddressInput,
	AddressNumber,
	Youtube,
	YoutubeLink,
	Photo,
	PhotoBtn,
	PhotoBtnWrapper,
	Main,
	MainBtn,
	MainLabel,
	MainWrapper,
	RegisterBtn,
	RegisterWrapper,
	ShadowBox,
	SubTitle,
	Test,
} from "../../styles/Board.write";

export default function BoardWrithePage() {
	return (
		<Container>
			<ShadowBox>
				<BoardWrapper>
					<TitleWrapper>
						<Title>게시물 등록</Title>
					</TitleWrapper>
					<NameAndPassword>
						<NameWrapper>
							<SubTitle>작성자</SubTitle>
							<NameInput placeholder="이름을 적어주세요."></NameInput>
						</NameWrapper>
						<PasswordWrapper>
							<SubTitle>비밀번호</SubTitle>
							<PasswordInput placeholder="비밀번호를 입력해주세요."></PasswordInput>
						</PasswordWrapper>
					</NameAndPassword>
					<SubTitle>제목</SubTitle>
					<ContentTitleInput placeholder="제목을 작성해주세요."></ContentTitleInput>
					<SubTitle>내용</SubTitle>
					<ContentTextBot placeholder="내용을 작성해주세요."></ContentTextBot>
					<SubTitle>주소</SubTitle>
					<AddressWrapper>
						<AddressNumber placeholder="07250"></AddressNumber>
						<AddressBtn>우편번호 검색</AddressBtn>
					</AddressWrapper>
					<AddressInput></AddressInput>
					<AddressInput></AddressInput>
					<SubTitle>유튜브</SubTitle>
					<YoutubeLink placeholder="링크를 복사해주세요."></YoutubeLink>
					<SubTitle>사진 첨부</SubTitle>
					<PhotoBtnWrapper>
						<PhotoBtn>+ Upload</PhotoBtn>
						<PhotoBtn>+ Upload</PhotoBtn>
						<PhotoBtn>+ Upload</PhotoBtn>
					</PhotoBtnWrapper>
					<SubTitle>메인 설정</SubTitle>
					<MainWrapper>
						<MainBtn type="radio"></MainBtn>
						<MainLabel>유튜브</MainLabel>
						<MainBtn type="radio"></MainBtn>
						<MainLabel>사진</MainLabel>
					</MainWrapper>
					<RegisterWrapper>
						<RegisterBtn>등록하기</RegisterBtn>
					</RegisterWrapper>
				</BoardWrapper>
			</ShadowBox>
		</Container>
	);
}
