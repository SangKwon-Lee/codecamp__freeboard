import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazy-load';
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
	ContentImg,
	HeaderRightAddressWrapper,
	HeaderRightImgWrapper,
	HeaderRightAddress,
	HeaderRightAddressText,
} from './BoardPage.style';

import { IBoardPagePros } from './BoardPage.types';

export default function BoardPageUI({
	data,
	handleUpdate,
	handleLike,
	handleDisLike,
	handleMoveBoards,
	handleDeleteBoard,
}: IBoardPagePros) {
	return (
		<Wrapper>
			<Shadow>
				<Body>
					<HeaderRightAddressWrapper>
						{data?.fetchBoard.boardAddress?.address && (
							<HeaderRightAddress>
								<HeaderRightAddressText>
									{data?.fetchBoard.boardAddress?.address}
								</HeaderRightAddressText>
								<HeaderRightAddressText>
									상세주소 : {data?.fetchBoard.boardAddress?.addressDetail}
								</HeaderRightAddressText>
							</HeaderRightAddress>
						)}
					</HeaderRightAddressWrapper>
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
							<HeaderRightImgWrapper>
								<HeaderLinkImg src="/link.png"></HeaderLinkImg>
								<HeaderNavImg src="/nav.png"></HeaderNavImg>
							</HeaderRightImgWrapper>
						</HeaderRightWrapper>
					</HeaderWrapper>
					<DivideLine></DivideLine>
					<ContentsWrapper>
						<ContentTop>
							<TitleWrapper>
								<Title>{data?.fetchBoard.title}</Title>
							</TitleWrapper>
							<ContentWrapper>
								{data?.fetchBoard.images.map((data, index) => (
									<LazyLoad offsetVertical={40} key={index}>
										<ContentImg
											key={index}
											src={`https://storage.cloud.google.com/${data}`}
										></ContentImg>
									</LazyLoad>
								))}
								<Content>{data?.fetchBoard.contents}</Content>
								<ReactPlayer url={data?.fetchBoard.youtubeUrl}></ReactPlayer>
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
				<UpdateBtn onClick={handleDeleteBoard}>삭제하기</UpdateBtn>
			</BottomBtnWrapper>
		</Wrapper>
	);
}
