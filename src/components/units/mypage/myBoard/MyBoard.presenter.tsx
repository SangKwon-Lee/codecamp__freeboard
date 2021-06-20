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
} from './MyBoard.styles';

import MyPoint from './MyBoard.container';

export default function MyBoardUI({
	changeMyBoardMenu,
	handleChangeMyBoardMenu,
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
						<MyBoardWriterWraper>
							<MyBoardTableTitle>작성자</MyBoardTableTitle>
						</MyBoardWriterWraper>
						<MyBoardDateWrapper>
							<MyBoardTableTitle>날짜</MyBoardTableTitle>
						</MyBoardDateWrapper>
					</MyBoardTableTitleWrapper>
					{new Array(10).fill(1).map(() => (
						<MyBoardContentsWrapper>
							<MyBoardContentsNumber>
								<MyBoardContents>1</MyBoardContents>
							</MyBoardContentsNumber>
							<MyBoardContentsTitle>
								<MyBoardContents>게시글 제목입니다.</MyBoardContents>
							</MyBoardContentsTitle>
							<MyBoardContentsSale>
								<MyBoardContentsSaleText>판매완료</MyBoardContentsSaleText>
							</MyBoardContentsSale>
							<MyBoardContentsPrice>
								<MyBoardContents>₩ 10000</MyBoardContents>
							</MyBoardContentsPrice>
							<MyBoardContentsWriter>
								<MyBoardContents>asd</MyBoardContents>
							</MyBoardContentsWriter>
							<MyBoardContentsDate>
								<MyBoardContents>2021.06.20</MyBoardContents>
							</MyBoardContentsDate>
						</MyBoardContentsWrapper>
					))}
				</MyBoardTableWrapper>
			</MyBoardTableWrapper>
		</MyBoardWrapper>
	);
}
