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
} from './ProductPage.style';

import { IBoardPagePros } from './ProductPage.types';

export default function ProductDetailPageUI({
	data,
	handleUpdate,
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
							<TitleWrapper>
								<Title>{data?.fetchUseditem.name}</Title>
								<Remarks>{data?.fetchUseditem.remarks}</Remarks>
								<Price>{data?.fetchUseditem.price} 원</Price>
							</TitleWrapper>
							<ContentWrapper>
								<Content>{data?.fetchUseditem.contents}</Content>
								<TagsWrapper>
									{data?.fetchUseditem.tags.map((data, index) => (
										<Tags key={index}> {data}</Tags>
									))}
								</TagsWrapper>
								<DivideLine></DivideLine>
								<MapImg src="/map.png"></MapImg>
								<DivideLine></DivideLine>
								<BottomBtnWrapper>
									<ListBtn onClick={handleMoveBoards}>목록으로</ListBtn>
									<UpdateBtn onClick={handleUpdate}>수정하기</UpdateBtn>
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
