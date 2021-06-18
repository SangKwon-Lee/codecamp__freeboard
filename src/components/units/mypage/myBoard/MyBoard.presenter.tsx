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
} from './MyBoard.styles';

export default function MyBoardUI() {
	return (
		<MyBoardWrapper>
			<MyBoardMenuWrapper>
				<MyBoardMenuRight>
					<MyBoardMenu>나의상품</MyBoardMenu>
					<MyBoardMenuLine></MyBoardMenuLine>
					<MyBoardMenu>마이찜</MyBoardMenu>
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
				</MyBoardTableWrapper>
			</MyBoardTableWrapper>
		</MyBoardWrapper>
	);
}
