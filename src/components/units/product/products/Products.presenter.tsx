import {
	Contents,
	Wrapper,
	SearchDateWrapper,
	SearchBar,
	SearchWrapper,
	SearchBarWrapper,
	SearchBtn,
	SearchImg,
	ResgisterBtn,
	RegisterImg,
	RegisterBtnWrapper,
	SearchBarBackGround,
	SaleWrapper,
	Sale,
	ListItemWrapper,
	ListSaleImg,
	ListLeftWrapper,
	ListName,
	ListRemarks,
	ListTags,
	ListUserWrapper,
	ListUser,
	ListUserImg,
	ListHeart,
	ListHeartCount,
	ListBodyWrapper,
	ListPrice,
	ListPriceWrapper,
	ListPriceImg,
	FixWrapper,
	InfiniteWrapper,
	FixTitle,
	FixCardWrapper,
	FixHeartAndCount,
	FixHeartImg,
	FixHeartCount,
	FixImg,
	FixName,
	FixRemarks,
	FixPrice,
	FixTags,
	FixImgWrapper,
	DateInput,
} from './Products.style';
import { IProductsProps } from './Products.tpes';
import InfiniteScroll from 'react-infinite-scroller';
import { useRef } from 'react';

export default function ProductsUI({
	data,
	handleMoveList,
	handleMoveRegister,
	hadleSearchInput,
	handleSearchBtn,
	LoadMore,
	todayList,
}: IProductsProps) {
	return (
		<>
			<Wrapper>
				<Contents>
					<SearchWrapper>
						<SaleWrapper>
							<Sale>판매중상품</Sale>
							<Sale>판매된상품</Sale>
						</SaleWrapper>
						<SearchBarWrapper>
							<SearchBarBackGround>
								<SearchImg src="/search.png"></SearchImg>
								<SearchBar
									onChange={hadleSearchInput}
									placeholder="제목을 검색해주세요."
								></SearchBar>
							</SearchBarBackGround>
							<SearchDateWrapper>
								<DateInput placeholder="YYYY.MM.DD"></DateInput>~
								<DateInput placeholder="YYYY.MM.DD"></DateInput>
							</SearchDateWrapper>
							<SearchBtn onClick={handleSearchBtn}>검색하기</SearchBtn>
						</SearchBarWrapper>
					</SearchWrapper>
					<InfiniteWrapper id="scrollableDiv">
						{data && (
							<InfiniteScroll loadMore={LoadMore} hasMore={true}>
								{/* <ListWrapper> */}
								{data?.fetchUseditems.map((data, index) => (
									<ListItemWrapper key={index}>
										<ListSaleImg
											id={data._id}
											onClick={handleMoveList}
											src="/listitem.png"
										></ListSaleImg>
										<ListBodyWrapper>
											<ListLeftWrapper>
												<ListName id={data._id} onClick={handleMoveList}>
													{data.name}
												</ListName>
												<ListRemarks>{data.remarks}</ListRemarks>
												<ListTags>{data.tags}</ListTags>
												<ListUserWrapper>
													<ListUserImg src="/smsmprofile.png"></ListUserImg>
													<ListUser>{data.seller.name}</ListUser>
													<ListHeart src="/smheart.png"></ListHeart>
													<ListHeartCount>20</ListHeartCount>
												</ListUserWrapper>
											</ListLeftWrapper>
											<ListPriceWrapper>
												<ListPriceImg src="/priceImg.png"></ListPriceImg>
												<ListPrice>{data.price.toLocaleString()}원</ListPrice>
											</ListPriceWrapper>
										</ListBodyWrapper>
									</ListItemWrapper>
								))}
								{/* </ListWrapper> */}
							</InfiniteScroll>
						)}
					</InfiniteWrapper>
					<RegisterBtnWrapper>
						<ResgisterBtn onClick={handleMoveRegister}>
							<RegisterImg src="/register.png"></RegisterImg>게시물 등록하기
						</ResgisterBtn>
					</RegisterBtnWrapper>
				</Contents>
				<FixWrapper>
					<FixTitle>오늘 본 상품</FixTitle>
					{todayList &&
						todayList.map((data, index) => (
							<FixCardWrapper key={index}>
								<FixHeartAndCount>
									<FixHeartImg src="/heart.png"></FixHeartImg>
									<FixHeartCount>20</FixHeartCount>
								</FixHeartAndCount>
								<FixImgWrapper>
									<FixImg src="/slick0.png"></FixImg>
								</FixImgWrapper>
								<FixName>{data.fetchUseditem.name}</FixName>
								<FixRemarks>{data.fetchUseditem.remarks}</FixRemarks>
								<FixPrice>
									{data.fetchUseditem.price.toLocaleString()}원
								</FixPrice>
								<FixTags>{data.fetchUseditem.tags}</FixTags>
							</FixCardWrapper>
						))}
				</FixWrapper>
			</Wrapper>
		</>
	);
}
