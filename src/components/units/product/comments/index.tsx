import { createContext, useState } from 'react';
import WriteQuestion from './WriteQuestions/ProductComments.container';
import QueryQuestion from './QueryAnswerQuestions/QueryAnswerQuestions.container';
import AnswerQuestionsWrite from './AnswerQuestionsWrite/AnswerQuestionsWrite.container'
export const QuestionsContext = createContext({
	answerQuestionsId: '',
	setAnswerQuestionsId: (__: string) => {},
});

export default function Question() {
	const [answerQuestionsId, setAnswerQuestionsId] = useState('');
	const value = {
		answerQuestionsId,
		setAnswerQuestionsId,
	};
	return (
		<>
			<QuestionsContext.Provider value={value}>
				<WriteQuestion></WriteQuestion>
				<AnswerQuestionsWrite></AnswerQuestionsWrite>
				<QueryQuestion></QueryQuestion>
			</QuestionsContext.Provider>

	);
}
