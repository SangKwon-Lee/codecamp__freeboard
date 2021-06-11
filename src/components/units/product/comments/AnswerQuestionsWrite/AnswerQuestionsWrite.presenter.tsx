import {
	AnswerImg,
	AnswerImgAndArea,
	AnswerTextCount,
	AnswerWrapper,
	AsnwerTextArea,
	AsnwerBottomWrapper,
	AsnwerBtn,
} from './AnswerQuestionsWrite.styles';
import { AnswerQuestionsWriteProps } from './AnswerQuestionsWrite.types';
export default function AnswerQuestionsUI({
	handleContents,
	handleCreateAnswer,
}: AnswerQuestionsWriteProps) {
	return (
		<AnswerWrapper>
			<AnswerImg src="/answerArrow.png"></AnswerImg>
			<AnswerImgAndArea>
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
