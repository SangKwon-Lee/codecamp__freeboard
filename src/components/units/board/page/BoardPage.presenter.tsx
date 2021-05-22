import {
	Query,
	QueryFetchBoardArgs,
} from '../../../../commons/types/generated/types';
import {
	Wrapper,
	Shadow,
	Body,
	HeaderDate,
	HeaderLeftWrapper,
	HeaderLinkImg,
	HeaderNavImg,
	HeaderProfileImg,
	HeaderRightWrapper,
	HeaderWrapper,
	HeaderWriter,
	HeaderWriterWrapper,
	DivideLine,
	ContentsWrapper,
	Title,
	Content,
	LikeBtnWrapper,
	LikeWrapper,
	LikeImg,
	LikeCount,
	DisLikeWrapper,
	DisLikeImg,
	DisLikeCount,
	TitleWrapper,
	UpdateBtn,
	ListBtn,
	BottomBtnWrapper,
} from './BoardPage.style';

interface IBoardPagePros {
	data?: Query;
	handleUpdate: () => void;
}

export default function BoardPageUI({ data, handleUpdate }: IBoardPagePros) {
	return (
		<Wrapper>
			<Shadow>
				<Body>
					<HeaderWrapper>
						<HeaderLeftWrapper>
							<HeaderProfileImg src="/profileImg.png"></HeaderProfileImg>
							<HeaderWriterWrapper>
								<HeaderWriter>{data?.fetchBoard.writer}</HeaderWriter>
								<HeaderDate>
									{data?.fetchBoard.createdAt.slice(0, 10)}
								</HeaderDate>
							</HeaderWriterWrapper>
						</HeaderLeftWrapper>
						<HeaderRightWrapper>
							<HeaderLinkImg src="/link.png"></HeaderLinkImg>
							<HeaderNavImg src="/nav.png"></HeaderNavImg>
						</HeaderRightWrapper>
					</HeaderWrapper>
					<DivideLine></DivideLine>
					<ContentsWrapper>
						<TitleWrapper>
							<Title>{data?.fetchBoard.title}</Title>
						</TitleWrapper>
						<Content>{data?.fetchBoard.contents}</Content>
						<LikeBtnWrapper>
							<LikeWrapper>
								<LikeImg src="/like.png"></LikeImg>
								<LikeCount>1920</LikeCount>
							</LikeWrapper>
							<DisLikeWrapper>
								<DisLikeImg src="/dislike.png"></DisLikeImg>
								<DisLikeCount>1920</DisLikeCount>
							</DisLikeWrapper>
						</LikeBtnWrapper>
					</ContentsWrapper>
				</Body>
			</Shadow>
			<BottomBtnWrapper>
				<ListBtn>목록으로</ListBtn>
				<UpdateBtn onClick={handleUpdate}>수정하기</UpdateBtn>
			</BottomBtnWrapper>
		</Wrapper>
	);
}
