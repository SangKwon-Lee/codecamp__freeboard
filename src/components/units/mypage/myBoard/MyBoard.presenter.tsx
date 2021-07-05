import {
	MyBoardMenu,
	MyBoardMenuLine,
	MyBoardMenuRight,
	MyBoardMenuWrapper,
	MyBoardTableWrapper,
	MyBoardWrapper,
	MyBoardNumberWrapper,
	MyBoardTableTitle,
	MyBoardTitleWrapper,
	MyBoardPriceWrapper,
	MyBoardWriterWraper,
	MyBoardDateWrapper,
	MyBoardTableTitleWrapper,
	MyBoardContentsWrapper,
	MyBoardContentsNumber,
	MyBoardContents,
	MyBoardContentsTitle,
	MyBoardContentsPrice,
	MyBoardContentsWriter,
	MyBoardContentsDate,
	MyBoardContentsSale,
	MyBoardContentsSaleText,
	PageWrapper,
	PageLeft,
	Page,
	PageRight,
	PageContainer,
} from './MyBoard.styles';

export default function MyBoardUI({
	changeMyBoardMenu,
	handleChangeMyBoardMenu,
	pageArr,
	currentPage,
	data,
	handleMovePage,
}) {
	return (
		<MyBoardWrapper>
			<MyBoardMenuWrapper>
				<MyBoardMenuRight>
					<MyBoardMenu
						id="product"
						onClick={handleChangeMyBoardMenu}
						isActive={changeMyBoardMenu === 'product'}
					>
						나의상품
					</MyBoardMenu>
					<MyBoardMenuLine></MyBoardMenuLine>
					<MyBoardMenu
						id="pick"
						onClick={handleChangeMyBoardMenu}
						isActive={changeMyBoardMenu === 'pick'}
					>
						마이찜
					</MyBoardMenu>
				</MyBoardMenuRight>
			</MyBoardMenuWrapper>
			<MyBoardTableWrapper>
				<MyBoardTableWrapper>
					<MyBoardTableTitleWrapper>
						<MyBoardNumberWrapper>
							<MyBoardTableTitle>번호</MyBoardTableTitle>
						</MyBoardNumberWrapper>
						<MyBoardTitleWrapper>
							<MyBoardTableTitle>제목</MyBoardTableTitle>
						</MyBoardTitleWrapper>
						<MyBoardContentsSale></MyBoardContentsSale>
						<MyBoardPriceWrapper>
							<MyBoardTableTitle>판매가격</MyBoardTableTitle>
						</MyBoardPriceWrapper>
						<MyBoardDateWrapper>
							<MyBoardTableTitle>날짜</MyBoardTableTitle>
						</MyBoardDateWrapper>
					</MyBoardTableTitleWrapper>
					{data?.fetchUseditemsISold.map((data, index) => (
						<MyBoardContentsWrapper key={index}>
							<MyBoardContentsNumber>
								<MyBoardContents>1</MyBoardContents>
							</MyBoardContentsNumber>
							<MyBoardContentsTitle id={data._id}>
								<MyBoardContents onClick={handleMovePage} id={data._id}>
									{data.name}
								</MyBoardContents>
							</MyBoardContentsTitle>
							<MyBoardContentsSale>
								{data.soldAt !== null && (
									<MyBoardContentsSaleText>판매완료</MyBoardContentsSaleText>
								)}
							</MyBoardContentsSale>
							<MyBoardContentsPrice>
								<MyBoardContents>
									{data.price.toLocaleString()}원
								</MyBoardContents>
							</MyBoardContentsPrice>
							<MyBoardContentsDate>
								<MyBoardContents>{data.createdAt.slice(0, 10)}</MyBoardContents>
							</MyBoardContentsDate>
						</MyBoardContentsWrapper>
					))}
				</MyBoardTableWrapper>
			</MyBoardTableWrapper>
			<PageContainer>
				<PageWrapper>
					<PageLeft
						src="/leftArrow.png"
						// onClick={LeftArrowPage}
					></PageLeft>
					{pageArr.map((data: any) => (
						<Page
							key={data}
							id={String(data)}
							// onClick={onClickPage}
							isActive={currentPage === data}
						>
							{data}
						</Page>
					))}
					<PageRight
						src="/rightArrow.png"
						// onClick={RightArrowPage}
					></PageRight>
				</PageWrapper>
			</PageContainer>
		</MyBoardWrapper>
	);
}
