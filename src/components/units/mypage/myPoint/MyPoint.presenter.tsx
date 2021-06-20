import {
	MyPointWrapper,
	MyPointMenuWrapper,
	MyPointLeftWrapper,
	MyPointLeftText,
	MyPointLeftLine,
	MyPointRightWrapper,
	MyPointSearchBG,
	MyPageSearchImg,
	MyPageSearchInput,
	MyPageSearchBtn,
	MyPointTable,
	MyPointNumberWrapper,
	MyPointTitle,
	MyPointTopWrapper,
	MyPointTitleWrapper,
	MyPointBreakDownWrapper,
	MyPointSellerWrapper,
	MyPointContentsWrapper,
	MyPointContents,
} from './MyPoint.styles';

import { MyPointProps } from './MyPoint.types';

export default function MyPointUI({
	handleMyPointChoice,
	myPointChoice,
}: MyPointProps) {
	return (
		<MyPointWrapper>
			<MyPointMenuWrapper>
				<MyPointLeftWrapper>
					<MyPointLeftText
						id="all"
						onClick={handleMyPointChoice}
						isActive={myPointChoice === 'all'}
					>
						전체내역
					</MyPointLeftText>
					<MyPointLeftLine></MyPointLeftLine>
					<MyPointLeftText
						id="charge"
						onClick={handleMyPointChoice}
						isActive={myPointChoice === 'charge'}
					>
						충전내역
					</MyPointLeftText>
					<MyPointLeftLine></MyPointLeftLine>
					<MyPointLeftText
						id="buy"
						onClick={handleMyPointChoice}
						isActive={myPointChoice === 'buy'}
					>
						구매내역
					</MyPointLeftText>
					<MyPointLeftLine></MyPointLeftLine>
					<MyPointLeftText
						id="sell"
						onClick={handleMyPointChoice}
						isActive={myPointChoice === 'sell'}
					>
						판매내역
					</MyPointLeftText>
				</MyPointLeftWrapper>
				<MyPointRightWrapper>
					<MyPointSearchBG>
						<MyPageSearchImg src="/mypageSearch.png"></MyPageSearchImg>
						<MyPageSearchInput placeholder="필요한 내용을 검색해주세요."></MyPageSearchInput>
					</MyPointSearchBG>
					<MyPageSearchBtn>검색</MyPageSearchBtn>
				</MyPointRightWrapper>
			</MyPointMenuWrapper>
			<MyPointTable>
				<MyPointTopWrapper>
					<MyPointNumberWrapper>
						<MyPointTitle>날짜</MyPointTitle>
					</MyPointNumberWrapper>
					<MyPointTitleWrapper>
						<MyPointTitle>제목</MyPointTitle>
					</MyPointTitleWrapper>
					<MyPointBreakDownWrapper>
						<MyPointTitle>포인트내역</MyPointTitle>
					</MyPointBreakDownWrapper>
					<MyPointSellerWrapper>
						<MyPointTitle>판매자</MyPointTitle>
					</MyPointSellerWrapper>
				</MyPointTopWrapper>
				{new Array(10).fill(1).map(() => (
					<MyPointContentsWrapper>
						<MyPointNumberWrapper>
							<MyPointContents>날짜</MyPointContents>
						</MyPointNumberWrapper>
						<MyPointTitleWrapper>
							<MyPointContents>제목</MyPointContents>
						</MyPointTitleWrapper>
						<MyPointBreakDownWrapper>
							<MyPointContents>포인트내역</MyPointContents>
						</MyPointBreakDownWrapper>
						<MyPointSellerWrapper>
							<MyPointContents>판매자</MyPointContents>
						</MyPointSellerWrapper>
					</MyPointContentsWrapper>
				))}
			</MyPointTable>
		</MyPointWrapper>
	);
}
