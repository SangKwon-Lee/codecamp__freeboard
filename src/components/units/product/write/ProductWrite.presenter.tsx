import { IBoardWriterProps } from './ProductWrite.types';
import LazyLoad from 'react-lazy-load';
import Head from 'next/head';
import {
	Wrapper,
	Title,
	Label,
	InputWrapper,
	Subject,
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
	GPSAndMapWrapper,
	MapWrapper,
	GPSWrapper,
	LATLNGWrapper,
	LAT,
	AddressBtn,
	GPSImg,
	AddressWrapper,
	AddressBtnWrapper,
} from './ProductWrite.style';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import DaumPostcode from 'react-daum-postcode';
import KaKaoMap from '../../../../commons/kakaoMap/KakaoMap.container';

const ReactQuill = dynamic(() => import('react-quill'), {
	ssr: false,
});

function ProductWritePageUI({
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
	handleZipCodeInput,
	handleChangeEditor,
	pa,
	handlePostOpen,
	handleComplete,
	input,
	ZipCode,
	setPa,
}: IBoardWriterProps) {
	return (
		<>
			<Wrapper>
				<Shadow>
					<Body>
						{data ? <Title>상품 수정</Title> : <Title>상품 등록</Title>}
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
							<ReactQuill
								onChange={handleChangeEditor}
								style={{ height: '320px', marginBottom: '40px' }}
							></ReactQuill>
						</InputWrapper>
						<InputWrapper>
							<Label>판매 가격</Label>
							<Subject
								type="number"
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
								<KaKaoMap ZipCode={ZipCode} setPa={setPa}></KaKaoMap>
							</MapWrapper>
							<GPSWrapper>
								<Label>GPS</Label>
								<LATLNGWrapper>
									<LAT
										placeholder="위도(LAT)"
										value={String(pa.La).slice(0, 10)}
										onChange={() => {}}
									></LAT>
									<GPSImg src="/smnav.png"></GPSImg>
									<LAT
										placeholder="경도(LNG)"
										value={String(pa.Ma).slice(0, 10)}
										onChange={() => {}}
									></LAT>
								</LATLNGWrapper>
								<AddressWrapper>
									<AddressBtnWrapper>
										<Label>주소</Label>
										<AddressBtn onClick={handlePostOpen}>검색</AddressBtn>
										{postOpen && (
											<DaumPostcode
												onComplete={handleComplete}
												autoClose={true}
												animation={true}
												style={{
													position: 'absolute',
													zIndex: 3,
													width: '40%',
												}}
											/>
										)}
									</AddressBtnWrapper>
									<Address
										onChange={handleZipCodeInput}
										value={ZipCode}
									></Address>
									<Address placeholder="상세주소"></Address>
								</AddressWrapper>
							</GPSWrapper>
						</GPSAndMapWrapper>
						<ImageWrapper>
							<Label>사진첨부</Label>
							<UploadBtnWrapper>
								{imgArr.map((data, index) => (
									<div key={index}>
										<UploadCancle
											id={String(index)}
											onClick={UploadPhotoCancle}
										>
											X
										</UploadCancle>
										<LazyLoad>
											<UploadImg src={String(data)}></UploadImg>
										</LazyLoad>
									</div>
								))}
								{new Array(3 - imgArr.length).fill(1).map((__, index) => (
									<div key={index}>
										<UploadLabel htmlFor="asd">
											<div>+</div>Upload
										</UploadLabel>
										<UploadButton
											ref={fileRef}
											multiple
											type="file"
											id="asd"
											onChange={onChangeFile}
										></UploadButton>
									</div>
								))}
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
								<SubmitButton
									onClick={handleClickUpdateBoard}
									disabled={isTrue}
								>
									수정하기
								</SubmitButton>
							) : (
								<SubmitButton
									onClick={handleClickCreateBoard}
									disabled={isTrue}
								>
									등록하기
								</SubmitButton>
							)}
						</ButtonWrapper>
					</Body>
				</Shadow>
			</Wrapper>
		</>
	);
}

export default ProductWritePageUI;
