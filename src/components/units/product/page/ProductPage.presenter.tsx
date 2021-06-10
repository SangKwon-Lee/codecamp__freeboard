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
	TitleWrapper,
	UpdateBtn,
	ListBtn,
	BottomBtnWrapper,
	ContentTop,
	ContentBottom,
	ContentWrapper,
	ContentImg,
	Remarks,
	Price,
	Tags,
	TagsWrapper,
	MapImg,
	HeartWrapper,
	Heart,
	HeartCount,
	HeartAndTitle,
	ImgSlideWrapper,
	ImgTopWrapper,
	ImgLeftArrow,
	ImgRightArrow,
	ImgWrapper,
	SlideImg,
	ImgDotsWrapper,
	ImgDots,
	ImgBottom,
	ImgBottomWrapper,
	ImgSlideBody,
} from './ProductPage.style';

import { IBoardPagePros } from './ProductPage.types';

export default function ProductDetailPageUI({
	data,
	handleUpdate,
	handleMoveBoards,
	isUser,
	imgArr,
}: IBoardPagePros) {
	return (
		<Wrapper>
			<Shadow>
				<Body>
					<HeaderWrapper>
						<HeaderLeftWrapper>
							<HeaderProfileImg src="/profileImg.png"></HeaderProfileImg>
							<HeaderWriterWrapper>
								<HeaderWriter>노원두</HeaderWriter>
								<HeaderDate>
									{data?.fetchUseditem.updatedAt
										? data?.fetchUseditem.updatedAt.slice(0, 10)
										: data?.fetchUseditem.createdAt.slice(0, 10)}
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
							<HeartAndTitle>
								<TitleWrapper>
									<Title>{data?.fetchUseditem.name}</Title>
									<Remarks>{data?.fetchUseditem.remarks}</Remarks>
								</TitleWrapper>
								<HeartWrapper>
									<Heart src="/heart.png"></Heart>
									<HeartCount>20</HeartCount>
								</HeartWrapper>
							</HeartAndTitle>
							<Price>{data?.fetchUseditem.price} 원</Price>

							<ImgSlideWrapper>
								<ImgSlideBody>
									<ImgTopWrapper>
										<ImgLeftArrow style={{ fontSize: '30px' }}></ImgLeftArrow>
										<ImgWrapper>
											{imgArr.map((data, index) => (
												<SlideImg src={`/slick${index + 1}.png`}></SlideImg>
											))}
										</ImgWrapper>
										<ImgRightArrow style={{ fontSize: '30px' }}></ImgRightArrow>
									</ImgTopWrapper>
									<ImgDotsWrapper>
										{imgArr.map((data, index) => (
											<ImgDots></ImgDots>
										))}
									</ImgDotsWrapper>
									<ImgBottomWrapper>
										{imgArr.map((data, index) => (
											<ImgBottom src={`/slick${index + 1}.png`}></ImgBottom>
										))}
									</ImgBottomWrapper>
								</ImgSlideBody>
							</ImgSlideWrapper>

							<ContentWrapper>
								<Content>{data?.fetchUseditem.contents}</Content>
								<TagsWrapper>
									<Tags>{data?.fetchUseditem.tags}</Tags>
								</TagsWrapper>
								<DivideLine></DivideLine>
								<MapImg src="/map.png"></MapImg>
								<DivideLine></DivideLine>
								<BottomBtnWrapper>
									<ListBtn onClick={handleMoveBoards}>목록으로</ListBtn>
									{isUser ? (
										<UpdateBtn onClick={handleUpdate}>수정하기</UpdateBtn>
									) : (
										<UpdateBtn onClick={handleUpdate}>구매하기</UpdateBtn>
									)}
								</BottomBtnWrapper>
							</ContentWrapper>
						</ContentTop>
						<ContentBottom></ContentBottom>
					</ContentsWrapper>
				</Body>
			</Shadow>
		</Wrapper>
	);
}
