import { useMutation } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../../../../pages/_app';
import {
	Mutation,
	MutationCreateUseditemQuestionAnswerArgs,
	MutationDeleteUseditemQuestionAnswerArgs,
	MutationUpdateUseditemQuestionAnswerArgs,
} from '../../../../../commons/types/generated/types';
import QueryAnswerQuestionsUI from './QueryAnswerQuestions.presenter';
import {
	DELETE_USED_ITEM_QUESTION_ANSWER,
	FETCH_USED_ITEM_QUESTIONS_ANSWERS,
	UPDATE_USED_ITEM_QUESTION_ANSWER,
	CREATE_USER_ITEM_QUESTIONS_ANSWERS,
} from './QueryAnswerQuestions.queries';
export default function QueryAnswerQuestions({ data, questionId }) {
	//* 본인 확인 이메일
	const { userEmail } = useContext(GlobalContext);

	//* 대댓글 작성 Open
	const [write, setWrite] = useState(false);

	//* 수정 Open
	const [isUpdate, setIsUpdate] = useState(false);

	//* 본인 확인 상태
	const [isUser, setIsUser] = useState(false);

	//* 댓글 인풋
	const [contents, setContents] = useState('');

	//* 댓글 인풋 체인지
	const handleContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContents(e.target.value);
	};

	//* 댓글 수정 오픈 함수
	const handleIsUpdate = () => {
		setIsUpdate((prev) => !prev);
	};

	//* 대댓글 작성 오픈 함수
	const handleWrite = () => {
		setWrite((prev) => !prev);
	};

	//* 작성 뮤테이션
	const [createUserItemQuestionsAnswer] = useMutation<
		Mutation,
		MutationCreateUseditemQuestionAnswerArgs
	>(CREATE_USER_ITEM_QUESTIONS_ANSWERS);

	//* 수정 뮤테이션
	const [updateAnswerQuestions] = useMutation<
		Mutation,
		MutationUpdateUseditemQuestionAnswerArgs
	>(UPDATE_USED_ITEM_QUESTION_ANSWER);

	//* 삭제 뮤테이션
	const [deleteAnswerQuestions] = useMutation<
		Mutation,
		MutationDeleteUseditemQuestionAnswerArgs
	>(DELETE_USED_ITEM_QUESTION_ANSWER);

	//* 본인 확인 UseEffect
	useEffect(() => {
		if (userEmail === data?.user.email) {
			setIsUser(true);
		}
	}, [data?.user.email, data]);

	//* 대댓글 삭제 함수
	const deleteAnswer = async () => {
		try {
			const result = await deleteAnswerQuestions({
				variables: {
					useditemQuestionAnswerId: data._id,
				},
				refetchQueries: [
					{
						query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
						variables: { useditemQuestionId: data._id },
					},
				],
			});
			setIsUpdate(false);
		} catch (error) {
			console.log(error);
		}
	};

	//* 대댓글 수정 함수
	const updateAnswer = async () => {
		try {
			const result = await updateAnswerQuestions({
				variables: {
					updateUseditemQuestionAnswerInput: {
						contents,
					},
					useditemQuestionAnswerId: data._id,
				},
				refetchQueries: [
					{
						query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
						variables: { useditemQuestionId: data._id },
					},
				],
			});
			setIsUpdate(false);
			setWrite(false);
		} catch (error) {
			console.log(error);
		}
	};

	//* 대댓글 작성 함수
	const handleCreateAnswer = async () => {
		try {
			const result = await createUserItemQuestionsAnswer({
				variables: {
					createUseditemQuestionAnswerInput: {
						contents,
					},
					useditemQuestionId: questionId,
				},
				refetchQueries: [
					{
						query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
						variables: { useditemQuestionId: questionId },
					},
				],
			});
			setWrite(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<QueryAnswerQuestionsUI
			data={data}
			isUpdate={isUpdate}
			handleIsUpdate={handleIsUpdate}
			isUser={isUser}
			handleContents={handleContents}
			handleWrite={handleWrite}
			write={write}
			deleteAnswer={deleteAnswer}
			updateAnswer={updateAnswer}
			handleCreateAnswer={handleCreateAnswer}
		></QueryAnswerQuestionsUI>
	);
}
