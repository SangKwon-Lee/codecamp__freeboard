import {
	AnswerWrapper,
	AnswerImg,
	AnswerContentsWrapper,
	AnswerName,
	AnswerContetns,
	AnswerNameAndContents,
	AsnwerRightImg,
	AnswerProfile,
	AnswerCenterWrapper,
	UpdateImg,
	RightImgWrapper,
	CommentsProfileImg,
	CommentsUpdateWriterWrapper,
	CommentsWriter,
	CommmentsBoxWrapper,
	CommentsInput,
	CommentsBoxBottom,
	CommentsCount,
	CommentsBtn,
} from './QueryAnswerQuestions.styles';
import { QueryAnswerQuestionsProps } from './QueryAnswerQuestions.types';
export default function QueryAnswerQuestionsUI({
	data,
	isUpdate,
	handleIsUpdate,
	isUser,
	deleteAnswer,
	handleContents,
	updateAnswer,
	handleWrite,
	write,
	handleCreateAnswer,
	userData,
}: QueryAnswerQuestionsProps) {
	return (
		<>
			{isUpdate ? (
				<AnswerWrapper>
					<AnswerImg src="/answerArrow.png"></AnswerImg>
					<CommentsProfileImg src="/profileImg.png"></CommentsProfileImg>
					<CommentsUpdateWriterWrapper>
						<CommentsWriter>{data.user.name}</CommentsWriter>
						<CommmentsBoxWrapper>
							<CommentsInput
								name="contents"
								onChange={handleContents}
							></CommentsInput>
							<CommentsBoxBottom>
								<CommentsCount></CommentsCount>
								<CommentsBtn onClick={updateAnswer}>수정하기</CommentsBtn>
							</CommentsBoxBottom>
						</CommmentsBoxWrapper>
					</CommentsUpdateWriterWrapper>
				</AnswerWrapper>
			) : (
				<AnswerWrapper>
					<AnswerImg src="/answerArrow.png"></AnswerImg>
					<AnswerContentsWrapper>
						<AnswerProfile src="/profileImg.png"></AnswerProfile>
						<AnswerCenterWrapper>
							<AnswerNameAndContents>
								<AnswerName>{data.user.name}</AnswerName>
								<AnswerContetns>{data.contents}</AnswerContetns>
							</AnswerNameAndContents>
							{isUser ? (
								<>
									<RightImgWrapper>
										<UpdateImg
											onClick={handleIsUpdate}
											src="/pencil.png"
										></UpdateImg>
										<UpdateImg onClick={deleteAnswer} src="/X.png"></UpdateImg>
									</RightImgWrapper>
								</>
							) : (
								<AsnwerRightImg
									onClick={handleWrite}
									src="/answer.png"
								></AsnwerRightImg>
							)}
						</AnswerCenterWrapper>
					</AnswerContentsWrapper>
				</AnswerWrapper>
			)}
			{write ? (
				<AnswerWrapper>
					<AnswerImg src="/answerArrow.png"></AnswerImg>
					<CommentsProfileImg src="/profileImg.png"></CommentsProfileImg>
					<CommentsUpdateWriterWrapper>
						<CommentsWriter>{userData.name}</CommentsWriter>
						<CommmentsBoxWrapper>
							<CommentsInput
								name="contents"
								onChange={handleContents}
							></CommentsInput>
							<CommentsBoxBottom>
								<CommentsCount></CommentsCount>
								<CommentsBtn id={data._id} onClick={handleCreateAnswer}>
									답글등록
								</CommentsBtn>
							</CommentsBoxBottom>
						</CommmentsBoxWrapper>
					</CommentsUpdateWriterWrapper>
				</AnswerWrapper>
			) : (
				<></>
			)}
		</>
	);
}
