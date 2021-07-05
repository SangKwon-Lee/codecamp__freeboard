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
	MyPointCharge,
	MyPointBalance,
	MyPointBuying,
} from './MyPoint.styles';

import { MyPointProps } from './MyPoint.types';

export default function MyPointUI({
	allData,
	handleMyPointChoice,
	myPointChoice,
	sellData,
	pointData,
	buyingData,
	handleMovePage,
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
				{myPointChoice === 'all' && (
					<>
						<MyPointTopWrapper>
							<MyPointNumberWrapper>
								<MyPointTitle>날짜</MyPointTitle>
							</MyPointNumberWrapper>
							<MyPointTitleWrapper>
								<MyPointTitle>내용</MyPointTitle>
							</MyPointTitleWrapper>
							<MyPointBreakDownWrapper>
								<MyPointTitle>거래 및 충전 내역</MyPointTitle>
							</MyPointBreakDownWrapper>
							<MyPointSellerWrapper>
								<MyPointTitle>잔액</MyPointTitle>
							</MyPointSellerWrapper>
						</MyPointTopWrapper>
						{allData?.fetchPointTransactions.map((data, index) => (
							<MyPointContentsWrapper key={index}>
								<MyPointNumberWrapper>
									<MyPointContents>
										{data.createdAt.slice(0, 10)}
									</MyPointContents>
								</MyPointNumberWrapper>
								<MyPointTitleWrapper>
									{data.status === '충전' || data.status === '판매' ? (
										<MyPointCharge>{data.status}</MyPointCharge>
									) : (
										<MyPointBuying>{data.status}</MyPointBuying>
									)}
								</MyPointTitleWrapper>
								<MyPointBreakDownWrapper>
									{data.status === '충전' || data.status === '판매' ? (
										<MyPointCharge>
											+ {data.amount.toLocaleString()}
										</MyPointCharge>
									) : (
										<MyPointBuying>
											{data.amount.toLocaleString()}
										</MyPointBuying>
									)}
								</MyPointBreakDownWrapper>
								<MyPointSellerWrapper>
									<MyPointBalance>
										₩ {data.balance.toLocaleString()}
									</MyPointBalance>
								</MyPointSellerWrapper>
							</MyPointContentsWrapper>
						))}
					</>
				)}
				{myPointChoice === 'charge' && (
					<>
						<MyPointTopWrapper>
							<MyPointNumberWrapper>
								<MyPointTitle>날짜</MyPointTitle>
							</MyPointNumberWrapper>
							<MyPointTitleWrapper>
								<MyPointTitle>결제 ID</MyPointTitle>
							</MyPointTitleWrapper>
							<MyPointBreakDownWrapper>
								<MyPointTitle>충전내역</MyPointTitle>
							</MyPointBreakDownWrapper>
							<MyPointSellerWrapper>
								<MyPointTitle>충전 후 잔액</MyPointTitle>
							</MyPointSellerWrapper>
						</MyPointTopWrapper>
						{pointData?.fetchPointTransactionsOfLoading.map((data, index) => (
							<MyPointContentsWrapper key={index}>
								<MyPointNumberWrapper>
									<MyPointContents>
										{data.createdAt.slice(0, 10)}
									</MyPointContents>
								</MyPointNumberWrapper>
								<MyPointTitleWrapper>
									<MyPointContents>{data.impUid}</MyPointContents>
								</MyPointTitleWrapper>
								<MyPointBreakDownWrapper>
									<MyPointCharge>+{data.amount.toLocaleString()}</MyPointCharge>
								</MyPointBreakDownWrapper>
								<MyPointSellerWrapper>
									<MyPointBalance>
										₩ {data.balance.toLocaleString()}
									</MyPointBalance>
								</MyPointSellerWrapper>
							</MyPointContentsWrapper>
						))}
					</>
				)}
				{myPointChoice === 'buy' && (
					<>
						<MyPointTopWrapper>
							<MyPointNumberWrapper>
								<MyPointTitle>날짜</MyPointTitle>
							</MyPointNumberWrapper>
							<MyPointTitleWrapper>
								<MyPointTitle>제목</MyPointTitle>
							</MyPointTitleWrapper>
							<MyPointBreakDownWrapper>
								<MyPointTitle>거래내역</MyPointTitle>
							</MyPointBreakDownWrapper>
							<MyPointSellerWrapper>
								<MyPointTitle>거래 후 잔액</MyPointTitle>
							</MyPointSellerWrapper>
						</MyPointTopWrapper>
						{buyingData?.fetchPointTransactionsOfBuying.map((data, index) => (
							<MyPointContentsWrapper key={index}>
								<MyPointNumberWrapper>
									<MyPointContents>
										{data.createdAt.slice(0, 10)}
									</MyPointContents>
								</MyPointNumberWrapper>
								<MyPointTitleWrapper>
									<MyPointContents onClick={handleMovePage} id={data._id}>
										{data.useditem.name}
									</MyPointContents>
								</MyPointTitleWrapper>
								<MyPointBreakDownWrapper>
									<MyPointBuying>{data.amount.toLocaleString()}</MyPointBuying>
								</MyPointBreakDownWrapper>
								<MyPointSellerWrapper>
									<MyPointBalance>
										₩ {data.balance.toLocaleString()}
									</MyPointBalance>
								</MyPointSellerWrapper>
							</MyPointContentsWrapper>
						))}
					</>
				)}
				{myPointChoice === 'sell' && (
					<>
						<MyPointTopWrapper>
							<MyPointNumberWrapper>
								<MyPointTitle>날짜</MyPointTitle>
							</MyPointNumberWrapper>
							<MyPointTitleWrapper>
								<MyPointTitle>제목</MyPointTitle>
							</MyPointTitleWrapper>
							<MyPointBreakDownWrapper>
								<MyPointTitle>거래내역</MyPointTitle>
							</MyPointBreakDownWrapper>
							<MyPointSellerWrapper>
								<MyPointTitle>거래 후 잔액</MyPointTitle>
							</MyPointSellerWrapper>
						</MyPointTopWrapper>
						{sellData?.fetchPointTransactionsOfSelling.map((data, index) => (
							<MyPointContentsWrapper key={index}>
								<MyPointNumberWrapper>
									<MyPointContents>
										{data.createdAt.slice(0, 10)}
									</MyPointContents>
								</MyPointNumberWrapper>
								<MyPointTitleWrapper>
									<MyPointContents onClick={handleMovePage} id={data._id}>
										{data.useditem.name}
									</MyPointContents>
								</MyPointTitleWrapper>
								<MyPointBreakDownWrapper>
									<MyPointCharge>
										+ {data.amount.toLocaleString()}
									</MyPointCharge>
								</MyPointBreakDownWrapper>
								<MyPointSellerWrapper>
									<MyPointBalance>
										₩ {data.balance.toLocaleString()}
									</MyPointBalance>
								</MyPointSellerWrapper>
							</MyPointContentsWrapper>
						))}
					</>
				)}
			</MyPointTable>
		</MyPointWrapper>
	);
}
