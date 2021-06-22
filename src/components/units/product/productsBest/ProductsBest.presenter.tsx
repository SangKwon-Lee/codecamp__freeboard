import {
	BestCardImg,
	BestCardWrapper,
	BestName,
	BestTitle,
	BestWrapper,
	Contents,
	Wrapper,
	BestCard,
	BestBottomWrapper,
	BestRemarksAndPrice,
	BestRemarks,
	BestPrice,
	BestPickAndCount,
	BestPickImg,
	BestPickCount,
} from './ProductsBest.style';

import { memo } from 'react';
import { IProductsBestProps } from './ProductsBest.tpes';

const ProductsBestBestUI = ({ data, handleMoveList }: IProductsBestProps) => {
	return (
		<Wrapper>
			<Contents>
				<BestWrapper>
					<BestTitle>베스트 게시글</BestTitle>
					<BestCardWrapper>
						{data?.fetchUseditemsOfTheBest.map((data, index) => (
							<BestCard key={index}>
								<BestCardImg
									id={data._id}
									onClick={handleMoveList}
									src="/bestItemImg.png"
								></BestCardImg>
								<BestName id={data._id} onClick={handleMoveList}>
									{data.name}
								</BestName>
								<BestBottomWrapper>
									<BestRemarksAndPrice>
										<BestRemarks>{data.remarks}</BestRemarks>
										<BestPrice>{data.price.toLocaleString()}원</BestPrice>
									</BestRemarksAndPrice>
									<BestPickAndCount>
										<BestPickImg src="/smheart.png"></BestPickImg>
										<BestPickCount>20</BestPickCount>
									</BestPickAndCount>
								</BestBottomWrapper>
							</BestCard>
						))}
					</BestCardWrapper>
				</BestWrapper>
			</Contents>
		</Wrapper>
	);
};
export default memo(ProductsBestBestUI);
