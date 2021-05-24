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
	ContentTop,
	ContentBottom,
	ContentWrapper,
} from './BoardPage.style';

interface IBoardPagePros {
	data?: Query;
	handleUpdate: () => void;
	handleLike: () => void;
	handleDisLike: () => void;
	handleMoveBoards: () => void;
}

export default function BoardPageUI({
	data,
	handleUpdate,
	handleLike,
	handleDisLike,
	handleMoveBoards,
}: IBoardPagePros) {
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
									{data?.fetchBoard.updatedAt
										? data?.fetchBoard.updatedAt.slice(0, 10)
										: data?.fetchBoard.createdAt.slice(0, 10)}
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
						<ContentTop>
							<TitleWrapper>
								<Title>{data?.fetchBoard.title}</Title>
							</TitleWrapper>
							<ContentWrapper>
								<Content>{data?.fetchBoard.contents}</Content>
							</ContentWrapper>
						</ContentTop>
						<ContentBottom>
							<LikeBtnWrapper>
								<LikeWrapper>
									<LikeImg onClick={handleLike} src="/like.png"></LikeImg>
									<LikeCount>{data?.fetchBoard.likeCount}</LikeCount>
								</LikeWrapper>
								<DisLikeWrapper>
									<DisLikeImg
										onClick={handleDisLike}
										src="/dislike.png"
									></DisLikeImg>
									<DisLikeCount>{data?.fetchBoard.dislikeCount}</DisLikeCount>
								</DisLikeWrapper>
							</LikeBtnWrapper>
						</ContentBottom>
					</ContentsWrapper>
				</Body>
			</Shadow>
			<BottomBtnWrapper>
				<ListBtn onClick={handleMoveBoards}>목록으로</ListBtn>
				<UpdateBtn onClick={handleUpdate}>수정하기</UpdateBtn>
			</BottomBtnWrapper>
		</Wrapper>
	);
}