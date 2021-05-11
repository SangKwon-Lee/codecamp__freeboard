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
} from "../../styles/Board.write";

export default function BoardWrithePage() {
	return (
		<Container>
			<BoardWrapper>
				<TitleWrapper>
					<Title>게시물 등록</Title>
				</TitleWrapper>

				<NameAndPassword>
					<NameWrapper>
						<Name>작성자</Name>
						<NameInput placeholder="이름을 적어주세요."></NameInput>
					</NameWrapper>

					<PasswordWrapper>
						<Password>비밀번호</Password>
						<PasswordInput placeholder="비밀번호를 입력해주세요."></PasswordInput>
					</PasswordWrapper>
				</NameAndPassword>

				<ContentTitle>제목</ContentTitle>
				<ContentTitleInput placeholder="제목을 작성해주세요."></ContentTitleInput>

				<Content>내용</Content>
				<ContentTextBot placeholder="내용을 작성해주세요."></ContentTextBot>

				<Address>주소</Address>
				<AddressWrapper>
					<AddressNumber> 07250</AddressNumber>
					<AddressBtn>우편번호 검색</AddressBtn>
				</AddressWrapper>
				<AddressInput></AddressInput>
				<AddressInput></AddressInput>

				<Youtube>유튜브</Youtube>
				<YoutubeLink placeholder="링크를 복사해주세요."></YoutubeLink>
				<Photo>사진 첨부</Photo>

				<PhotoBtnWrapper>
					<PhotoBtn>+ Upload</PhotoBtn>
					<PhotoBtn>+ Upload</PhotoBtn>
					<PhotoBtn>+ Upload</PhotoBtn>
				</PhotoBtnWrapper>

				<Main>메인 설정</Main>
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
		</Container>
	);
}
