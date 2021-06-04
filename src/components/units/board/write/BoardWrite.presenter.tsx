import { IBoardWriterProps } from './BoardWrite.types';
import LazyLoad from 'react-lazy-load';
import {
	Wrapper,
	Title,
	WriterWrapper,
	Label,
	Writer,
	Password,
	InputWrapper,
	Subject,
	Contents,
	ZipcodeWrapper,
	Zipcode,
	SearchButton,
	Address,
	Youtube,
	ImageWrapper,
	UploadButton,
	OptionWrapper,
	RadioButton,
	RadioLabel,
	CancelButton,
	SubmitButton,
	ButtonWrapper,
	Shadow,
	Body,
	UploadLabel,
	UploadBtnWrapper,
	UploadImg,
	UploadCancle,
} from './BoardWrite.style';
import DaumPostcode from 'react-daum-postcode';
export default function BoardWritePage({
	handleChangeInput,
	handleClickCreateBoard,
	isTrue,
	data,
	handleClickUpdateBoard,
	fileRef,
	onChangeFile,
	UploadPhotoCancle,
	imgArr,
	handleComplete,
	handlePostOpen,
	postOpen,
	ZipCode,
}: IBoardWriterProps) {
	return (
		<Wrapper>
			<Shadow>
				<Body>
					<Title>게시판 등록</Title>
					<WriterWrapper>
						<InputWrapper>
							<Label>작성자</Label>
							<Writer
								type="text"
								placeholder="이름을 적어주세요."
								name="writer"
								defaultValue={data?.fetchBoard.writer || ''}
								onChange={handleChangeInput}
							/>
						</InputWrapper>
						<InputWrapper>
							<Label>비밀번호</Label>
							<Password
								type="password"
								placeholder="비밀번호를 입력해주세요."
								name="password"
								onChange={handleChangeInput}
							/>
						</InputWrapper>
					</WriterWrapper>
					<InputWrapper>
						<Label>제목</Label>
						<Subject
							type="text"
							placeholder="제목을 작성해주세요."
							name="title"
							defaultValue={data?.fetchBoard.title}
							onChange={handleChangeInput}
						/>
					</InputWrapper>
					<InputWrapper>
						<Label>내용</Label>
						<Contents
							placeholder="내용을 작성해주세요."
							name="contents"
							defaultValue={data?.fetchBoard.contents}
							onChange={handleChangeInput}
						/>
					</InputWrapper>
					<InputWrapper>
						<Label>주소</Label>
						<ZipcodeWrapper>
							<Zipcode
								placeholder="07250"
								name="boardAddress"
								onChange={handleChangeInput}
							/>
							<SearchButton onClick={handlePostOpen}>
								우편번호 검색
							</SearchButton>
							{postOpen && (
								<DaumPostcode
									onComplete={handleComplete}
									autoClose={true}
									animation={true}
									style={{ position: 'absolute', zIndex: 3, width: '40%' }}
								/>
							)}
						</ZipcodeWrapper>
						<Address value={ZipCode} />
						<Address placeholder="상세주소" />
					</InputWrapper>
					<InputWrapper>
						<Label>유튜브</Label>
						<Youtube
							placeholder="링크를 복사해주세요."
							name="youtubeUrl"
							defaultValue={data?.fetchBoard.youtubeUrl}
							onChange={handleChangeInput}
						/>
					</InputWrapper>
					<ImageWrapper>
						<Label>사진첨부</Label>
						<UploadBtnWrapper>
							{imgArr.map((data, index) =>
								imgArr[index] === '0' ? (
									<div key={index}>
										<UploadLabel htmlFor={String(index)}>
											<div>+</div>Upload
										</UploadLabel>
										<UploadButton
											ref={fileRef}
											type="file"
											id={String(index)}
											onChange={onChangeFile}
										></UploadButton>
									</div>
								) : (
									<div key={index}>
										<UploadCancle
											id={String(index)}
											onClick={UploadPhotoCancle}
										>
											X
										</UploadCancle>
										<LazyLoad>
											<UploadImg
												src={`https://storage.cloud.google.com/${data}`}
											></UploadImg>
										</LazyLoad>
									</div>
								),
							)}
						</UploadBtnWrapper>
					</ImageWrapper>
					<OptionWrapper>
						<Label>메인설정</Label>
						<RadioButton type="radio" id="youtube" name="radio-button" />
						<RadioLabel htmlFor="youtube">유튜브</RadioLabel>
						<RadioButton type="radio" id="image" name="radio-button" />
						<RadioLabel htmlFor="image">사진</RadioLabel>
					</OptionWrapper>
					<ButtonWrapper>
						<CancelButton>취소하기</CancelButton>
						{data ? (
							<SubmitButton onClick={handleClickUpdateBoard} disabled={isTrue}>
								수정하기
							</SubmitButton>
						) : (
							<SubmitButton onClick={handleClickCreateBoard} disabled={isTrue}>
								등록하기
							</SubmitButton>
						)}
					</ButtonWrapper>
				</Body>
			</Shadow>
		</Wrapper>
	);
}
