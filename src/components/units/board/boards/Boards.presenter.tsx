import {
	Contents,
	Wrapper,
	SearchDateWrapper,
	SearchBar,
	SearchWrapper,
	SearchBarWrapper,
	SearchBtn,
	SearchImg,
	DateImg,
	RowWrapper,
	NumberWrapper,
	TitleWrapper,
	RowTitle,
	WriterWrapper,
	DateWrapper,
	Title,
	TableWrapper,
	Table,
	ResgisterBtn,
	RegisterImg,
	RegisterBtnWrapper,
	Page,
	PageWrapper,
	PageLeft,
	PageRight,
	SearchBarBackGround,
} from './Boards.style';
import { IBoardsProps } from './Boards.tpes';
export default function BoardsUI({
	data,
	handleMoveList,
	handleMoveRegister,
	onClickPage,
	currentPage,
	RightArrowPage,
	LeftArrowPage,
	pageArr,
	hadleSearchInput,
	handleSearchBtn,
}: IBoardsProps) {
	return (
		<Wrapper>
			<Contents>
				<SearchWrapper>
					<SearchBarWrapper>
						<SearchBarBackGround>
							<SearchImg src="/search.png"></SearchImg>
							<SearchBar
								onChange={hadleSearchInput}
								placeholder="제목을 검색해주세요."
							></SearchBar>
						</SearchBarBackGround>
						<SearchDateWrapper>
							<DateImg src="/dateImg.png" />
							2020.02.12
							<DateImg src="/dateImg.png" />
							2020.02.12
						</SearchDateWrapper>
					</SearchBarWrapper>
					<SearchBtn onClick={handleSearchBtn}>검색하기</SearchBtn>
				</SearchWrapper>
				<Table>
					<TableWrapper>
						<NumberWrapper>
							<RowTitle>번호</RowTitle>
						</NumberWrapper>
						<TitleWrapper>
							<RowTitle>제목</RowTitle>
						</TitleWrapper>
						<WriterWrapper>
							<RowTitle>작성자</RowTitle>
						</WriterWrapper>
						<DateWrapper>
							<RowTitle>날짜</RowTitle>
						</DateWrapper>
					</TableWrapper>
					{!data
						? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
								<RowWrapper key={data}>
									<NumberWrapper>
										<Title>{index + 1}</Title>
									</NumberWrapper>
									<TitleWrapper>
										<Title></Title>
									</TitleWrapper>
									<WriterWrapper>
										<Title></Title>
									</WriterWrapper>
									<DateWrapper>
										<Title></Title>
									</DateWrapper>
								</RowWrapper>
						  ))
						: data?.fetchBoards.map((data, index) => (
								<RowWrapper key={data._id}>
									<NumberWrapper>
										<Title>
											{currentPage === 1
												? index + 1
												: index + 1 + (currentPage - 1) * 10}
										</Title>
									</NumberWrapper>
									<TitleWrapper>
										<Title id={data._id} onClick={handleMoveList}>
											{data.title}
										</Title>
									</TitleWrapper>
									<WriterWrapper>
										<Title>{data.writer}</Title>
									</WriterWrapper>
									<DateWrapper>
										<Title>{data.createdAt.slice(0, 10)}</Title>
									</DateWrapper>
								</RowWrapper>
						  ))}
				</Table>
				<PageWrapper>
					<PageLeft src="/leftArrow.png" onClick={LeftArrowPage}></PageLeft>
					{pageArr.map((data: any) => (
						<Page
							key={data}
							id={String(data)}
							onClick={onClickPage}
							isActive={currentPage === data}
						>
							{data}
						</Page>
					))}
					<PageRight src="/rightArrow.png" onClick={RightArrowPage}></PageRight>
				</PageWrapper>
				<RegisterBtnWrapper>
					<ResgisterBtn onClick={handleMoveRegister}>
						<RegisterImg src="/register.png"></RegisterImg>게시물 등록하기
					</ResgisterBtn>
				</RegisterBtnWrapper>
			</Contents>
		</Wrapper>
	);
}
