import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
	Mutation,
	MutationDeleteUseditemQuestionArgs,
	MutationUpdateUseditemQuestionArgs,
} from '../../../../commons/types/generated/types';
import {
	UPDATE_USED_ITEM_QUESTION,
	FETCH_USED_ITEM_QUESTIONS,
	FETCH_USED_ITEM_QUESTIONS_ANSWERS,
	DELETE_USED_ITEM_QUESTION,
} from './ProductComments.queries';
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
} from './ProductComments.style';
import {
	CommentsUpdatenputWrapper,
	CommmentsBoxWrapper,
	CommentsInput,
	CommentsBoxBottom,
	CommentsCount,
	CommentsBtn,
} from './ProductCommentsItems.style';
import { IProductQuestionsItemsProps } from './ProductComments.types';
import { useRouter } from 'next/router';
export default function BoardCommentItemUI({
	data,
	refetch,
}: IProductQuestionsItemsProps) {
	const router = useRouter();

	//! 댓글 수정 상태 관리
	const [Update, setUpdate] = useState(false);
	const [contents, setContents] = useState('');
	const [updateProductUsedItemQuestion] = useMutation<
		Mutation,
		MutationUpdateUseditemQuestionArgs
	>(UPDATE_USED_ITEM_QUESTION);

	//! 댓글 삭제 상태 관리
	const [deleteProductUsedItemQuestion] = useMutation<
		Mutation,
		MutationDeleteUseditemQuestionArgs
	>(DELETE_USED_ITEM_QUESTION);

	const [name, setName] = useState(true);

	//! 댓글 삭제 함수

	const handleClickDeleteComment = async (
		e: React.MouseEvent<HTMLImageElement, MouseEvent>,
	) => {
		setName(false);
		setTimeout(async () => {
			try {
				const result = await deleteProductUsedItemQuestion({
					variables: {
						useditemQuestionId: e.target.id,
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

	//! 댓글 수정 함수
	const commentUpdate = () => {
		setUpdate((prev) => !prev);
	};

	useEffect(() => {
		setContents('');
	}, [Update]);

	const handleUpdateInputChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const newInput = e.target.value;
		setContents(newInput);
	};

	const handleClickUpdateComment = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		try {
			const result = await updateProductUsedItemQuestion({
				variables: {
					updateUseditemQuestionInput: {
						contents,
					},
					useditemQuestionId: e.target.id,
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
								</CommentsTopRightWrapper>
							</CommentsTopWrapper>
							<CommentsText>{data.contents}</CommentsText>
							<CommentsDate>{data.createdAt.slice(0, 10)}</CommentsDate>
						</CommentsCenterWrapper>
					</CommentsWrapper>
				</>
			)}
		</>
	);
}
