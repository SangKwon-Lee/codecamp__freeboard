import ProductCommentItem from './ProductCommentsItems.presenter';

import {
	Wrapper,
	DivideLine,
	Body,
	CommentsInputWrapper,
	CommentsImgAndTitle,
	CommentsImg,
	CommetnsTitle,
	CommmentsBoxWrapper,
	CommentsInput,
	CommentsBoxBottom,
	CommentsCount,
	CommentsBtn,
} from './ProductComments.style';
import { IProductQuestionsProps } from './ProductComments.types';
import InfiniteScroll from 'react-infinite-scroller';

export default function ProductCommentsUI({
	contents,
	handleInputChange,
	data,
	handleClickCreateComment,
	LoadMore,
	refetch,
}: IProductQuestionsProps) {
	return (
		<Wrapper>
			<DivideLine></DivideLine>
			<Body>
				<CommentsInputWrapper>
					<CommentsImgAndTitle>
						<CommentsImg src="/commentsImg.png"></CommentsImg>
						<CommetnsTitle>문의하기</CommetnsTitle>
					</CommentsImgAndTitle>
					<CommmentsBoxWrapper>
						<CommentsInput
							value={contents}
							name="contents"
							onChange={handleInputChange}
							placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
						></CommentsInput>
						<CommentsBoxBottom>
							<CommentsCount>0/100</CommentsCount>
							<CommentsBtn onClick={handleClickCreateComment}>
								문의하기
							</CommentsBtn>
						</CommentsBoxBottom>
					</CommmentsBoxWrapper>
				</CommentsInputWrapper>
				<InfiniteScroll loadMore={LoadMore} hasMore={true}>
					{data?.fetchUseditemQuestions.map((data: any) => (
						<ProductCommentItem
							key={data._id}
							data={data}
							refetch={refetch}
						></ProductCommentItem>
					))}
				</InfiniteScroll>
			</Body>
		</Wrapper>
	);
}
