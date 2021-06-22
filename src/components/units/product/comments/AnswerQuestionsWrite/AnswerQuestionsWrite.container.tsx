import { useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
import {
	Mutation,
	MutationCreateUseditemQuestionAnswerArgs,
} from '../../../../../commons/types/generated/types';
import AnswerQuestionsUI from './AnswerQuestionsWrite.presenter';
import { GlobalContext } from '../../../../../../pages/_app';
import {
	CREATE_USER_ITEM_QUESTIONS_ANSWERS,
	FETCH_USED_ITEM_QUESTIONS_ANSWERS,
} from './AnswerQuestionsWrite.queries';

export default function AnswerQuestions({ dataId, setIsWrite }) {
	//* 본인 확인 이메일
	const { userData } = useContext(GlobalContext);

	//* 대댓글 인풋
	const [contents, setContents] = useState('');
	const [resultId, setResultId] = useState('');

	//* 대댓글 인풋 체인지 함수
	const handleContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContents(e.target.value);
	};

	//* 대댓글 작성 뮤테이션
	const [createUserItemQuestionsAnswer] = useMutation<
		Mutation,
		MutationCreateUseditemQuestionAnswerArgs
	>(CREATE_USER_ITEM_QUESTIONS_ANSWERS);

	//* 대댓글 작성 함수
	const handleCreateAnswer = async () => {
		try {
			const result = await createUserItemQuestionsAnswer({
				variables: {
					createUseditemQuestionAnswerInput: {
						contents,
					},
					useditemQuestionId: dataId,
				},
				refetchQueries: [
					{
						query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
						variables: { useditemQuestionId: dataId },
					},
				],
			});
			setResultId(result.data.createUseditemQuestionAnswer._id);
			setIsWrite(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<AnswerQuestionsUI
				handleContents={handleContents}
				handleCreateAnswer={handleCreateAnswer}
				userData={userData}
			></AnswerQuestionsUI>
		</>
	);
}
