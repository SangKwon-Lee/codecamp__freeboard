import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
	Mutation,
	MutationUpdateBoardCommentArgs,
} from '../../../../commons/types/generated/types';
import { UPDATE_BOARD_COMMENT } from './BoardComments.queries';
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
import { Modal, Button } from 'antd';
import { IBoadrdCommentsItemsProps } from './BoardComments.types';
export default function BoardCommentItemUI({
	data,
	onSaveRating,
	handleDeleteComment,
}: IBoadrdCommentsItemsProps) {
	const [Update, setUpdate] = useState(false);
	const [UpdateRating, setUpdateRating] = useState(0);
	const [updataInput, setUpdateInput] = useState({
		writer: '',
		password: '',
		contents: '',
		rating: '',
	});
	const [updateBoardComment] = useMutation<
		Mutation,
		MutationUpdateBoardCommentArgs
	>(UPDATE_BOARD_COMMENT);

	const commentUpdate = () => {
		setUpdate((prev) => !prev);
	};

	useEffect(() => {
		setUpdateInput({
			writer: data.writer,
			password: '',
			contents: data.contents,
			rating: data.rating,
		});
	}, [Update]);

	const handleUpdateInputChange = (e: any) => {
		const newInput = {
			...updataInput,
			[e.target.name]: e.target.value,
		};
		setUpdateInput(newInput);
	};

	const onSaveUpdateRating = (e: any) => {
		const newInput = {
			...updataInput,
			rating: e.target.id,
		};
		setUpdateInput(newInput);
		setUpdateRating(e.target.id);
	};

	const handleClickUpdateComment = async (e: any) => {
		try {
			const result = await updateBoardComment({
				variables: {
					updateBoardCommentInput: {
						// writer: updataInput.writer,
						rating: Number(updataInput.rating),
						contents: updataInput.contents,
					},
					password: updataInput.password,
					boardCommentId: String(e.target.id),
				},
			});
			setUpdateInput({
				writer: '',
				password: '',
				contents: '',
				rating: '',
			});
			setUpdateRating(0);
			setUpdate((prev) => !prev);
		} catch (error) {
			alert(error);
		}
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
								disabled={true}
							></WriterInput>
							<PasswordInput
								name="password"
								placeholder="비밀번호"
								onChange={handleUpdateInputChange}
							></PasswordInput>
						</WriterWrapper>
						<StarWrapper>
							{['1', '2', '3', '4', '5'].map((idx: any) => (
								<StarImg
									key={idx}
									onClick={onSaveUpdateRating}
									id={idx}
									src={
										updataInput.rating >= idx ? '/StarColor.png' : '/star.png'
									}
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
							<CommentsBtn id={data._id} onClick={handleClickUpdateComment}>
								수정하기
							</CommentsBtn>
						</CommentsBoxBottom>
					</CommmentsBoxWrapper>
				</CommentsUpdatenputWrapper>
			) : (
				<>
					<Modal />
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
												src={
													data.rating >= idx ? '/StarColor.png' : '/star.png'
												}
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
				</>
			)}
		</>
	);
}
