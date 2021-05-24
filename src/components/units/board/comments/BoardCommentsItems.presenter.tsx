import { useState } from 'react';
import {
	CommentsCenterWrapper,
	CommentsDate,
	CommentsDeleteImg,
	CommentsProfileImg,
	CommentsText,
	CommentsTopRightWrapper,
	CommentsTopWrapper,
	CommentsUpdateImg,
	CommentsWrapper,
	CommentsWriter,
	CommentsWriterAndStar,
	StarImg,
	StarWrapper,
} from './BoardComments.style';
import {
	CommentsUpdatenputWrapper,
	WriterStarWrapper,
	WriterWrapper,
	WriterInput,
	PasswordInput,
	CommmentsBoxWrapper,
	CommentsInput,
	CommentsBoxBottom,
	CommentsCount,
	CommentsBtn,
} from './BoardCommentsItems.style';

export default function BoardCommentItemUI({
	data,
	onSaveRating,
	handleDeleteComment,
	handleUpdateInputChange,
	updataInput,
}) {
	const [Update, setUpdate] = useState(false);

	const commentUpdate = () => {
		setUpdate((prev) => !prev);
	};

	return (
		<>
			{Update ? (
				<CommentsUpdatenputWrapper key={data._id}>
					<WriterStarWrapper>
						<WriterWrapper>
							<WriterInput
								name="writer"
								defaultValue={data.writer}
								onChange={handleUpdateInputChange}
							></WriterInput>
							<PasswordInput
								name="password"
								placeholder="비밀번호"
								onChange={handleUpdateInputChange}
							></PasswordInput>
						</WriterWrapper>
						<StarWrapper>
							{['1', '2', '3', '4', '5'].map((idx) => (
								<StarImg
									key={idx}
									onClick={onSaveRating}
									id={idx}
									src={data.rating >= idx ? '/StarColor.png' : '/star.png'}
								></StarImg>
							))}
						</StarWrapper>
					</WriterStarWrapper>
					<CommmentsBoxWrapper>
						<CommentsInput
							name="contents"
							defaultValue={data.contents}
							onChange={handleUpdateInputChange}
						></CommentsInput>
						<CommentsBoxBottom>
							<CommentsCount></CommentsCount>
							<CommentsBtn>수정하기</CommentsBtn>
						</CommentsBoxBottom>
					</CommmentsBoxWrapper>
				</CommentsUpdatenputWrapper>
			) : (
				<CommentsWrapper key={data._id}>
					<CommentsProfileImg src="/profileImg.png"></CommentsProfileImg>
					<CommentsCenterWrapper>
						<CommentsTopWrapper>
							<CommentsWriterAndStar>
								<CommentsWriter>{data.writer}</CommentsWriter>
								<StarWrapper>
									{['1', '2', '3', '4', '5'].map((idx) => (
										<StarImg
											key={idx}
											onClick={onSaveRating}
											id={idx}
											src={data.rating >= idx ? '/StarColor.png' : '/star.png'}
										></StarImg>
									))}
								</StarWrapper>
							</CommentsWriterAndStar>
							<CommentsTopRightWrapper>
								<CommentsUpdateImg
									id={data._id}
									onClick={commentUpdate}
									src="/pencil.png"
								></CommentsUpdateImg>
								<CommentsDeleteImg
									onClick={handleDeleteComment}
									id={data._id}
									src="/X.png"
								></CommentsDeleteImg>
							</CommentsTopRightWrapper>
						</CommentsTopWrapper>
						<CommentsText>{data.contents}</CommentsText>
						<CommentsDate>{data.createdAt.slice(0, 10)}</CommentsDate>
					</CommentsCenterWrapper>
				</CommentsWrapper>
			)}
		</>
	);
}
