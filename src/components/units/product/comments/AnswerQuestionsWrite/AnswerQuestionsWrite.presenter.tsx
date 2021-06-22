import {
	AnswerImg,
	AnswerImgAndArea,
	AnswerTextCount,
	AnswerWrapper,
	AsnwerTextArea,
	AsnwerBottomWrapper,
	AsnwerBtn,
	AnswerName,
} from './AnswerQuestionsWrite.styles';
import { AnswerQuestionsWriteProps } from './AnswerQuestionsWrite.types';
export default function AnswerQuestionsUI({
	handleContents,
	handleCreateAnswer,
	userData,
}: AnswerQuestionsWriteProps) {
	return (
		<AnswerWrapper>
			<AnswerImg src="/answerArrow.png"></AnswerImg>
			<AnswerImgAndArea>
				<AnswerName>{userData.name}</AnswerName>
				<AsnwerTextArea
					onChange={handleContents}
					placeholder="답글을 등록하세요."
				></AsnwerTextArea>
				<AsnwerBottomWrapper>
					<AnswerTextCount></AnswerTextCount>
					<AsnwerBtn onClick={handleCreateAnswer}>답글등록</AsnwerBtn>
				</AsnwerBottomWrapper>
			</AnswerImgAndArea>
		</AnswerWrapper>
	);
}
