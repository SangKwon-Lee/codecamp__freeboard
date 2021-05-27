import { Query } from '../../../../commons/types/generated/types';
import {
	BestCardWrapper,
	BestTitle,
	BestWrapper,
	Contents,
	Wrapper,
	BestCard,
	BestImg,
	BestCardTitle,
	BestProfileAndWriter,
	BestCardProfileImg,
	BestCardWriter,
	BestDate,
	BestLeftWrapper,
	BestRightWrapper,
	BestLike,
	BestLikeCount,
	BestContentsWrapper,
	BestBottomWrapper,
} from './Boards.style';

import { IBoardsProps } from './Boards.tpes';
export default function BoardsBestUI({
	BestDatas,
	handleMoveList,
}: IBoardsProps) {
	return (
		<Wrapper>
			<Contents>
				<BestWrapper>
					<BestTitle>베스트 게시글</BestTitle>
					<BestCardWrapper>
						{BestDatas?.data?.fetchBoardsOfTheBest.map((data) => (
							<BestCard key={data._id}>
								<BestImg src="/bestImage.png"></BestImg>
								<BestContentsWrapper>
									<BestCardTitle>{data.title}</BestCardTitle>
									<BestBottomWrapper>
										<BestLeftWrapper>
											<BestProfileAndWriter>
												<BestCardProfileImg src="/Smprofile.png"></BestCardProfileImg>
												<BestCardWriter>{data.writer}</BestCardWriter>
											</BestProfileAndWriter>
											<BestDate>Date : {data.createdAt.slice(0, 10)}</BestDate>
										</BestLeftWrapper>
										<BestRightWrapper>
											<BestLike src="/SMlike.png"></BestLike>
											<BestLikeCount>{data.likeCount}</BestLikeCount>
										</BestRightWrapper>
									</BestBottomWrapper>
								</BestContentsWrapper>
							</BestCard>
						))}
					</BestCardWrapper>
				</BestWrapper>
			</Contents>
		</Wrapper>
	);
}
