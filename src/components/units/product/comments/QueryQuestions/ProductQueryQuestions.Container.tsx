import { useMutation, useQuery } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import {
	Mutation,
	MutationDeleteUseditemQuestionArgs,
	MutationUpdateUseditemQuestionArgs,
	Query,
	QueryFetchUseditemQuestionAnswersArgs,
} from '../../../../../commons/types/generated/types';
import {
	UPDATE_USED_ITEM_QUESTION,
	FETCH_USED_ITEM_QUESTIONS,
	DELETE_USED_ITEM_QUESTION,
	FETCH_USED_ITEM_QUESTIONS_ANSWERS,
} from './ProductQueryQuestions.queries';
import { useRouter } from 'next/router';
import { GlobalContext } from '../../../../../../pages/_app';
import ProdectQueryQuestionUI from './ProductQueryQuestions.presenter';

export default function ProductQueryQuestion({ data, refetch }) {
	const router = useRouter();

	//* 본인 이메일 확인
	const { userData } = useContext(GlobalContext);
	const [questionId, setQuestionId] = useState('');

	//* 대댓글 상태 관리
	const [isWrite, setIsWrite] = useState(false);
	//* 대댓글 작성 인풋 컨테이너 오픈 함수
	const handleIsWrite = () => {
		setIsWrite((prev) => !prev);
	};

	//* 대댓글 쿼리
	const { data: Answer } = useQuery<
		Query,
		QueryFetchUseditemQuestionAnswersArgs
	>(FETCH_USED_ITEM_QUESTIONS_ANSWERS, {
		variables: { useditemQuestionId: data._id },
	});

	//* 댓글 수정 상태 관리
	const [Update, setUpdate] = useState(false);
	const [contents, setContents] = useState('');
	const [updateProductUsedItemQuestion] = useMutation<
		Mutation,
		MutationUpdateUseditemQuestionArgs
	>(UPDATE_USED_ITEM_QUESTION);

	//* 댓글 삭제 상태 관리
	const [deleteProductUsedItemQuestion] = useMutation<
		Mutation,
		MutationDeleteUseditemQuestionArgs
	>(DELETE_USED_ITEM_QUESTION);
	const [name, setName] = useState(true);

	//* 댓글 삭제 Mutation
	const handleClickDeleteComment = async (
		e: React.MouseEvent<HTMLImageElement, MouseEvent>,
	) => {
		const target = e.target as HTMLTextAreaElement;
		setName(false);
		setTimeout(async () => {
			try {
				const result = await deleteProductUsedItemQuestion({
					variables: {
						useditemQuestionId: target.id,
					},
					refetchQueries: [
						{
							query: FETCH_USED_ITEM_QUESTIONS,
							variables: { useditemId: String(router.query.id) },
						},
					],
				});
				refetch();
			} catch (error) {
				setName(true);
				alert(error);
			}
		}, 1000);
	};

	//* 댓글 수정시 수정창 Open
	const commentUpdate = () => {
		setUpdate((prev) => !prev);
	};

	//* 댓글 수정시 기존 값 삭제
	useEffect(() => {
		setContents('');
		setQuestionId(data._id);
	}, [Update, data]);
	//! 댓글 onChange 함수
	const handleUpdateInputChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const target = e.target as HTMLTextAreaElement;
		const newInput = target.value;
		setContents(newInput);
	};

	//* 댓글 수정 Mutation
	const handleClickUpdateComment = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		const target = e.target as HTMLTextAreaElement;
		try {
			const result = await updateProductUsedItemQuestion({
				variables: {
					updateUseditemQuestionInput: {
						contents,
					},
					useditemQuestionId: target.id,
				},
				refetchQueries: [
					{
						query: FETCH_USED_ITEM_QUESTIONS,
						variables: { useditemId: String(router.query.id) },
					},
				],
			});
			setContents('');
			setUpdate((prev) => !prev);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ProdectQueryQuestionUI
			data={data}
			Update={Update}
			handleUpdateInputChange={handleUpdateInputChange}
			handleClickUpdateComment={handleClickUpdateComment}
			userData={userData}
			name={name}
			commentUpdate={commentUpdate}
			handleClickDeleteComment={handleClickDeleteComment}
			handleIsWrite={handleIsWrite}
			isWrite={isWrite}
			setIsWrite={setIsWrite}
			Answer={Answer}
			questionId={questionId}
		></ProdectQueryQuestionUI>
	);
}
