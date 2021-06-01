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
export default function BoardsBestUI({ data, handleMoveList }: IBoardsProps) {
	return (
		<Wrapper>
			<Contents>
				<BestWrapper>
					<BestTitle>베스트 게시글</BestTitle>
					<BestCardWrapper>
						{data?.fetchBoardsOfTheBest.map((data: any) => (
							<BestCard key={data._id}>
								<BestImg
									src="/bestImage.png"
									id={data._id}
									onClick={handleMoveList}
								></BestImg>
								<BestContentsWrapper>
									<BestCardTitle id={data._id} onClick={handleMoveList}>
										{data.title}
									</BestCardTitle>
									<BestBottomWrapper>
										<BestLeftWrapper>
											<BestProfileAndWriter>
												<BestCardProfileImg src="/Smprofile.png"></BestCardProfileImg>
												<BestCardWriter id={data._id} onClick={handleMoveList}>
													{data.writer}
												</BestCardWriter>
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
