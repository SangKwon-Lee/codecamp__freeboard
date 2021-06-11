import { AddToHomeScreenSharp } from '@material-ui/icons';
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
	ResgisterBtn,
	RegisterImg,
	RegisterBtnWrapper,
	SearchBarBackGround,
	SaleWrapper,
	Sale,
	ListWrapper,
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
} from './Products.style';
import { IProductsProps } from './Products.tpes';
import InfiniteScroll from 'react-infinite-scroller';

export default function ProductsUI({
	data,
	handleMoveList,
	handleMoveRegister,
	hadleSearchInput,
	handleSearchBtn,
	LoadMore,
}: IProductsProps) {
	return (
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
							<DateImg src="/dateImg.png" />
							2020.02.12
							<DateImg src="/dateImg.png" />
							2020.02.12
						</SearchDateWrapper>
						<SearchBtn onClick={handleSearchBtn}>검색하기</SearchBtn>
					</SearchBarWrapper>
				</SearchWrapper>
				<InfiniteScroll loadMore={LoadMore} hasMore={true}>
					<ListWrapper>
						{data?.fetchUseditems.map((data, index) => (
							<ListItemWrapper
								key={index}
								id={data._id}
								onClick={handleMoveList}
							>
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
											<ListUser>판매자</ListUser>
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
					</ListWrapper>
				</InfiniteScroll>
				<RegisterBtnWrapper>
					<ResgisterBtn onClick={handleMoveRegister}>
						<RegisterImg src="/register.png"></RegisterImg>게시물 등록하기
					</ResgisterBtn>
				</RegisterBtnWrapper>
			</Contents>
		</Wrapper>
	);
}
