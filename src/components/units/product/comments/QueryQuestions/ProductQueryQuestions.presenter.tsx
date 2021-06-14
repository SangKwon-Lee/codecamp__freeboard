import {
	CommentsCenterWrapper,
	CommentsDate,
	CommentsDeleteImg,
	CommentsProfileImg,
	CommentsText,
	CommentsTopRightWrapper,
	CommentsTopWrapper,
	CommentsUpdateImg,
	CommentsUpdateWriterWrapper,
	CommentsWrapper,
	CommentsWriter,
	CommentsWriterAndStar,
	CommentsUpdatenputWrapper,
	CommmentsBoxWrapper,
	CommentsInput,
	CommentsBoxBottom,
	CommentsCount,
	CommentsBtn,
	QuestionImg,
	CommentsDivideLine,
} from './ProductQueryQuestions.style';
import AnswerQuestionsWrite from '../AnswerQuestionsWrite/AnswerQuestionsWrite.container';
import QueryAnswerQuestions from '../QueryAnswerQuestions/QueryAnswerQuestions.container';
import { IProductQuestionsItemsProps } from './ProductQueryQuestions.types';
export default function BoardCommentItemUI({
	data,
	Update,
	handleUpdateInputChange,
	handleClickUpdateComment,
	userEmail,
	name,
	commentUpdate,
	handleClickDeleteComment,
	handleIsWrite,
	isWrite,
	setIsWrite,
	Answer,
	questionId,
}: IProductQuestionsItemsProps) {
	return (
		<>
			{Update ? (
				<CommentsUpdatenputWrapper key={data._id}>
					<CommentsProfileImg src="/profileImg.png"></CommentsProfileImg>
					<CommentsUpdateWriterWrapper>
						<CommentsWriter>노원두</CommentsWriter>
						<CommmentsBoxWrapper>
							<CommentsInput
								name="contents"
								defaultValue={data.contents}
								onChange={handleUpdateInputChange}
							></CommentsInput>
							<CommentsBoxBottom>
								<CommentsCount></CommentsCount>
								<CommentsBtn id={data._id} onClick={handleClickUpdateComment}>
									수정하기
								</CommentsBtn>
							</CommentsBoxBottom>
						</CommmentsBoxWrapper>
					</CommentsUpdateWriterWrapper>
				</CommentsUpdatenputWrapper>
			) : (
				<>
					<CommentsWrapper isActive={name} key={data._id}>
						<CommentsProfileImg src="/profileImg.png"></CommentsProfileImg>
						<CommentsCenterWrapper>
							<CommentsTopWrapper>
								<CommentsWriterAndStar>
									<CommentsWriter>노원두</CommentsWriter>
								</CommentsWriterAndStar>
								<CommentsTopRightWrapper>
									{data.user.email === userEmail ? (
										<>
											<CommentsUpdateImg
												id={data._id}
												onClick={commentUpdate}
												src="/pencil.png"
											></CommentsUpdateImg>
											<CommentsDeleteImg
												onClick={handleClickDeleteComment}
												id={data._id}
												src="/X.png"
											></CommentsDeleteImg>
										</>
									) : (
										<QuestionImg
											onClick={handleIsWrite}
											src="/answer.png"
										></QuestionImg>
									)}
								</CommentsTopRightWrapper>
							</CommentsTopWrapper>
							<CommentsText>{data.contents}</CommentsText>
							<CommentsDate>{data.createdAt.slice(0, 10)}</CommentsDate>
						</CommentsCenterWrapper>
					</CommentsWrapper>
					{isWrite ? (
						<AnswerQuestionsWrite
							setIsWrite={setIsWrite}
							dataId={data._id}
						></AnswerQuestionsWrite>
					) : (
						<CommentsDivideLine></CommentsDivideLine>
					)}
				</>
			)}
			{Answer?.fetchUseditemQuestionAnswers.map((data) => (
				<>
					<QueryAnswerQuestions
						key={data._id}
						questionId={questionId}
						data={data}
					></QueryAnswerQuestions>
				</>
			))}
		</>
	);
}
