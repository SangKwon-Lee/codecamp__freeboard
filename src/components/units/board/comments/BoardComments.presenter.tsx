// import { IBoardWriterProps } from "./BoardComments.types";

import { Query } from '../../../../commons/types/generated/types';
import BoardCommentItem from './BoardCommentsItems.presenter';
import {
	Wrapper,
	DivideLine,
	Body,
	CommentsInputWrapper,
	CommentsImgAndTitle,
	CommentsImg,
	CommetnsTitle,
	StarWrapper,
	StarImg,
	CommmentsBoxWrapper,
	CommentsInput,
	CommentsBoxBottom,
	CommentsCount,
	CommentsBtn,
	WriterWrapper,
	WriterStarWrapper,
	WriterInput,
	PasswordInput,
} from './BoardComments.style';

interface IBoardCommentsProps {
	input: {
		writer: string;
		password: string;
		contents: string;
		rating: string;
	};
	handleInputChange: (e: any) => void;
	data?: any;
	rating: any;
	onSaveRating: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleClickCreateComment: (e: any) => void;
	handleDeleteComment: (e: any) => void;
	handleUpdateInputChange: (e: any) => void;
	updataInput: {
		writer: string;
		password: string;
		contents: string;
		rating: string;
	};
}

export default function BoardCommentsUI({
	input,
	handleInputChange,
	data,
	rating,
	onSaveRating,
	handleClickCreateComment,
	handleDeleteComment,
	handleUpdateInputChange,
	updataInput,
}: IBoardCommentsProps) {
	return (
		<Wrapper>
			<DivideLine></DivideLine>
			<Body>
				<CommentsInputWrapper>
					<CommentsImgAndTitle>
						<CommentsImg src="/commentsImg.png"></CommentsImg>
						<CommetnsTitle>댓글</CommetnsTitle>
					</CommentsImgAndTitle>
					<WriterStarWrapper>
						<WriterWrapper>
							<WriterInput
								value={input.writer}
								placeholder="작성자"
								name="writer"
								onChange={handleInputChange}
							></WriterInput>
							<PasswordInput
								value={input.password}
								onChange={handleInputChange}
								placeholder="비밀번호"
								type="password"
								name="password"
							></PasswordInput>
						</WriterWrapper>
						<StarWrapper>
							{['1', '2', '3', '4', '5'].map((idx) => (
								<StarImg
									key={idx}
									onClick={onSaveRating}
									id={idx}
									src={rating >= idx ? '/StarColor.png' : '/star.png'}
								></StarImg>
							))}
						</StarWrapper>
					</WriterStarWrapper>
					<CommmentsBoxWrapper>
						<CommentsInput
							value={input.contents}
							name="contents"
							onChange={handleInputChange}
							placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
						></CommentsInput>
						<CommentsBoxBottom>
							<CommentsCount>0/100</CommentsCount>
							<CommentsBtn onClick={handleClickCreateComment}>
								등록하기
							</CommentsBtn>
						</CommentsBoxBottom>
					</CommmentsBoxWrapper>
				</CommentsInputWrapper>
				{data?.fetchBoardComments.map((data) => (
					<BoardCommentItem
						key={data._id}
						handleUpdateInputChange={handleUpdateInputChange}
						updataInput={updataInput}
						data={data}
						onSaveRating={onSaveRating}
						handleDeleteComment={handleDeleteComment}
					></BoardCommentItem>
				))}
			</Body>
		</Wrapper>
	);
}