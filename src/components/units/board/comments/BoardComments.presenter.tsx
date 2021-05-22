// import { IBoardWriterProps } from "./BoardComments.types";

import {
	Wrapper,
	DivideLine,
	Body,
	CommentsInputWrapper,
	CommentsImgAndTitle,
	CommentsImg,
	CommetnsTitle,
	StarWrapper,
	StarImg,
	CommmentsBoxWrapper,
	CommentsInput,
	CommentsBoxBottom,
	CommentsCount,
	CommentsBtn,
	CommentsWrapper,
	CommentsProfileImg,
	CommentsCenterWrapper,
	CommentsTopWrapper,
	CommentsWriterAndStar,
	CommentsWriter,
	CommentsStar,
	CommentsTopRightWrapper,
	CommentsUpdateImg,
	CommentsDeleteImg,
	CommentsText,
	CommentsDate,
	WriterWrapper,
	WriterStarWrapper,
	WriterInput,
	PasswordInput,
} from './BoardComments.style';

export default function BoardCommentsUI({
	handleInputChange,
	data,
	rating,
	onSaveRating,
	handleClickCreateComment,
}: any) {
	return (
		<Wrapper>
			{/* <DivideLine></DivideLine> */}
			<Body>
				<CommentsInputWrapper>
					<CommentsImgAndTitle>
						<CommentsImg src="/commentsImg.png"></CommentsImg>
						<CommetnsTitle>댓글</CommetnsTitle>
					</CommentsImgAndTitle>
					<WriterStarWrapper>
						<WriterWrapper>
							<WriterInput
								placeholder="작성자"
								name="writer"
								onChange={handleInputChange}
							></WriterInput>
							<PasswordInput
								onChange={handleInputChange}
								placeholder="비밀번호"
								type="password"
								name="password"
							></PasswordInput>
						</WriterWrapper>
						<StarWrapper>
							{['1', '2', '3', '4', '5'].map((idx) => (
								<StarImg
									onClick={onSaveRating}
									id={idx}
									src={rating >= idx ? '/StarColor.png' : '/star.png'}
								></StarImg>
							))}
						</StarWrapper>
					</WriterStarWrapper>
					<CommmentsBoxWrapper>
						<CommentsInput
							name="contents"
							onChange={handleInputChange}
							placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
						></CommentsInput>
						<CommentsBoxBottom>
							<CommentsCount>0/100</CommentsCount>
							<CommentsBtn onClick={handleClickCreateComment}>
								등록하기
							</CommentsBtn>
						</CommentsBoxBottom>
					</CommmentsBoxWrapper>
				</CommentsInputWrapper>
				{data?.fetchBoardComments
					.map((data) => (
						<CommentsWrapper>
							<CommentsProfileImg src="/profileImg.png"></CommentsProfileImg>
							<CommentsCenterWrapper>
								<CommentsTopWrapper>
									<CommentsWriterAndStar>
										<CommentsWriter>{data.writer}</CommentsWriter>
										<StarWrapper>
											{['1', '2', '3', '4', '5'].map((idx) => (
												<StarImg
													onClick={onSaveRating}
													id={idx}
													src={
														data.rating >= idx ? '/StarColor.png' : '/star.png'
													}
												></StarImg>
											))}
										</StarWrapper>
									</CommentsWriterAndStar>
									<CommentsTopRightWrapper>
										<CommentsUpdateImg src="/pencil.png"></CommentsUpdateImg>
										<CommentsDeleteImg src="/X.png"></CommentsDeleteImg>
									</CommentsTopRightWrapper>
								</CommentsTopWrapper>
								<CommentsText>{data.contents}</CommentsText>
								<CommentsDate>{data.createdAt.slice(0, 10)}</CommentsDate>
							</CommentsCenterWrapper>
						</CommentsWrapper>
					))
					.reverse()}
			</Body>
		</Wrapper>
	);
}
