import { IBoardWriterProps } from './ProductWrite.types';
import LazyLoad from 'react-lazy-load';
import {
	Wrapper,
	Title,
	Label,
	InputWrapper,
	Subject,
	Contents,
	ZipcodeWrapper,
	Zipcode,
	SearchButton,
	Address,
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
	MapImg,
	GPSAndMapWrapper,
	MapWrapper,
	GPSWrapper,
	LATLNGWrapper,
	LAT,
	GPSImg,
	AddressWrapper,
} from './ProductWrite.style';
export default function ProductWritePageUI({
	handleChangeInput,
	handleClickCreateBoard,
	isTrue,
	data,
	handleClickUpdateBoard,
	fileRef,
	onChangeFile,
	UploadPhotoCancle,
	imgArr,
	postOpen,
	ZipCode,
	handleZipCodeInput,
}: IBoardWriterProps) {
	return (
		<Wrapper>
			<Shadow>
				<Body>
					<Title>상품 등록</Title>
					<InputWrapper>
						<Label>상품명</Label>
						<Subject
							type="text"
							placeholder="상품명을 작성해주세요."
							name="name"
							defaultValue={data?.fetchUseditem.name}
							onChange={handleChangeInput}
						/>
					</InputWrapper>
					<InputWrapper>
						<Label>한줄요약</Label>
						<Subject
							type="text"
							placeholder="한 줄 요약을 작성해주세요."
							name="remarks"
							defaultValue={data?.fetchUseditem.remarks}
							onChange={handleChangeInput}
						/>
					</InputWrapper>
					<InputWrapper>
						<Label>내용</Label>
						<Contents
							placeholder="내용을 작성해주세요."
							name="contents"
							defaultValue={data?.fetchUseditem.contents}
							onChange={handleChangeInput}
						/>
					</InputWrapper>
					<InputWrapper>
						<Label>판매 가격</Label>
						<Subject
							type="text"
							placeholder="판매 가격을 입력해주세요."
							name="price"
							defaultValue={data?.fetchUseditem.price}
							onChange={handleChangeInput}
						/>
					</InputWrapper>
					<InputWrapper>
						<Label>태그입력</Label>
						<Subject
							type="text"
							placeholder="#태그 #태그 #태그"
							name="tags"
							defaultValue={data?.fetchUseditem.tags
								.join()
								.replaceAll(',', ' ')}
							onChange={handleChangeInput}
						/>
					</InputWrapper>
					<GPSAndMapWrapper>
						<MapWrapper>
							<Label>거래 위치</Label>
							<MapImg src="/map.png"></MapImg>
						</MapWrapper>
						<GPSWrapper>
							<Label>GPS</Label>
							<LATLNGWrapper>
								<LAT placeholder="위도(LAT)"></LAT>
								<GPSImg src="/smnav.png"></GPSImg>
								<LAT placeholder="경도(LNG)"></LAT>
							</LATLNGWrapper>
							<AddressWrapper>
								<Label>주소</Label>
								<Address></Address>
								<Address></Address>
							</AddressWrapper>
						</GPSWrapper>
					</GPSAndMapWrapper>
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
						<Label>메인 사진 설정</Label>
						<RadioButton type="radio" id="image1" name="radio-button" />
						<RadioLabel htmlFor="image1">사진 1</RadioLabel>
						<RadioButton type="radio" id="image2" name="radio-button" />
						<RadioLabel htmlFor="image2">사진 2</RadioLabel>
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
