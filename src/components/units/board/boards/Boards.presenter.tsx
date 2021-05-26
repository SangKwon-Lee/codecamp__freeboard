import { Query } from '../../../../commons/types/generated/types';
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
} from './Boards.style';

import { IBoardsProps } from './Boards.tpes';
export default function BoardsUI({
	data,
	BestDatas,
	handleMoveList,
	handleMoveRegister,
}: IBoardsProps) {
	return (
		<Wrapper>
			<Contents>
				<SearchWrapper>
					<SearchBarWrapper>
						<SearchBar placeholder="제목을 검색해주세요."></SearchBar>
						<SearchDateWrapper>
							<DateImg src="/dateImg.png" />
							2020.02.12
							<DateImg src="/dateImg.png" />
							2020.02.12
						</SearchDateWrapper>
					</SearchBarWrapper>
					<SearchBtn>검색하기</SearchBtn>
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
					{data?.fetchBoards.slice(0, 10).map((data) => (
						<RowWrapper key={data._id}>
							<NumberWrapper>
								<Title>10</Title>
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
				<RegisterBtnWrapper>
					<ResgisterBtn onClick={handleMoveRegister}>
						<RegisterImg src="/register.png"></RegisterImg>게시물 등록하기
					</ResgisterBtn>
				</RegisterBtnWrapper>
			</Contents>
		</Wrapper>
	);
}
