import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
	Mutation,
	MutationDeleteBoardCommentArgs,
	MutationUpdateBoardCommentArgs,
} from '../../../../commons/types/generated/types';
import {
	UPDATE_BOARD_COMMENT,
	FETCH_BOARD_COMMENTS,
	DELETE_BOARD_COMMENT,
} from './BoardComments.queries';
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
	DeletePassword,
} from './BoardCommentsItems.style';
import { IBoadrdCommentsItemsProps } from './BoardComments.types';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
export default function BoardCommentItemUI({
	data,
	onSaveRating,
	refetch,
}: IBoadrdCommentsItemsProps) {
	const router = useRouter();
	//! 모달 관리
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => {
		setIsModalVisible(true);
	};
	const handleOk = () => {
		setIsModalVisible(false);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
	};

	//! 댓글 수정 상태 관리
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

	//! 댓글 삭제 상태 관리
	const [deleteBoardComment] = useMutation<
		Mutation,
		MutationDeleteBoardCommentArgs
	>(DELETE_BOARD_COMMENT);
	const [deletepassword, setDeletePassword] = useState('');
	const [deleteId, setDeleteId] = useState('');
	const [name, setName] = useState(true);

	//! 댓글 삭제 함수
	const handleDelteId = (e: any) => {
		setDeleteId(e.target.id);
	};

	const handleDeletePassword = (e: any) => {
		setDeletePassword(e.target.value);
	};
	const handleClickDeleteComment = async () => {
		setName(false);
		setTimeout(async () => {
			try {
				const result = await deleteBoardComment({
					variables: {
						password: deletepassword,
						boardCommentId: deleteId,
					},
					refetchQueries: [
						{
							query: FETCH_BOARD_COMMENTS,
							variables: { boardId: router.query.id },
						},
					],
				});
				refetch();
				setDeletePassword('');
			} catch (error) {
				setName(true);
				alert(error);
				setDeletePassword('');
			}
		}, 1000);
	};

	//! 댓글 수정 함수
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
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.id },
					},
				],
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
					<Modal
						title="비밀번호를 입력하세요."
						visible={isModalVisible}
						onOk={() => {
							handleClickDeleteComment();
							handleOk();
						}}
						onCancel={handleCancel}
						style={{
							position: 'absolute',
							top: '25rem',
							left: '40%',
						}}
					>
						<DeletePassword
							value={deletepassword}
							onChange={handleDeletePassword}
						></DeletePassword>
					</Modal>
					<CommentsWrapper isActive={name} key={data._id}>
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
										onClick={(e) => {
											handleDelteId(e);
											showModal();
										}}
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
