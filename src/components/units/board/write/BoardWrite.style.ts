import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Shadow = styled.div`
	max-width: 1200px;
	margin-top:100px;
	width: 100%;
		padding-bottom: 50px;
	display: flex;
	box-shadow: 0px 0px 13px 0.1px rgba(0, 0, 0, 0.3);
	justify-content: center;
`;

export const Body = styled.div`
	max-width: 996px;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 80px;
	align-items: center;
`;

export const Title = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 36px;
	font-weight: bold;
`;

export const WriterWrapper = styled.div`
	max-width:996px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 40px;
`;

export const Writer = styled.input`
		max-width:486px;
	width: 100%;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
	max-width:486px;
	width: 100%;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
	padding-bottom: 16px;
	font-size: 16px;
	font-weight: 500;
`;

export const InputWrapper = styled.div`
	width:100%;
	padding-top: 40px;
`;

export const Subject = styled.input`
max-width:996px;
	width: 100%;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
	max-width:996px;
	width: 100%;
	height: 480px;
	padding-left: 16px;
	padding: 14px;
	border: 1px solid #bdbdbd;
`;

export const ZipcodeWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Zipcode = styled.input`
	width: 77px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
	width: 124px;
	height: 52px;
	margin-left: 16px;
	background-color: black;
	cursor: pointer;
	color: white;
`;

export const Address = styled.input`
		max-width:996px;
	width: 100%;
	height: 52px;
	margin-top: 16px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
		max-width:996px;
	width: 100%;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
		max-width:996px;
	width: 100%;
	padding-top: 40px;
`;

export const UploadButton = styled.input`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip:rect(0,0,0,0);
border: 0;

`;
export const UploadLabel = styled.label`
display: inline-block;
width:78px;
height: 78px;
background-color: #999999;
text-align: center;
font-size: 14px;
color:#4F4F4F;
padding-top: 16px;
margin-right:20px;
cursor: pointer;
`
export const UploadBtnWrapper = styled.div`
width: 282px;
display: flex;

`
export const OptionWrapper = styled.div`
		max-width:996px;
	width: 100%;
	padding-top: 40px;
`;

export const RadioButton = styled.input`
	cursor: pointer;
`;

export const RadioLabel = styled.label`
	margin-left: 8px;
	margin-right: 20px;
	font-weight: 500;
	cursor: pointer;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 80px;
`;

export const CancelButton = styled.button`
	width: 179px;
	height: 52px;
	background-color: #bdbdbd;
	border: none;
	font-size: 16px;
	font-weight: 500;
	margin-left: 12px;
	margin-right: 12px;
	cursor: pointer;
`;

export const SubmitButton = styled.button`
	width: 179px;
	height: 52px;
	background-color: #ffd600;
	border: none;
	font-size: 16px;
	font-weight: 500;
	margin-left: 12px;
	margin-right: 12px;
	cursor: pointer;
`;

export const UploadImg = styled.img`
object-fit: cover;
width: 78px;
height: 78px;
margin-right: 20px;
`


export const UploadCancle = styled.button`
	position: absolute;
	width:30px;
	height:30px;
	background-color: transparent;
	text-align: center;
	border:1px solid rgba(0,0,0,0.5);
	border-radius: 30px;
	cursor: pointer;
	outline: none;
	margin-left: 50px;
	margin-top:-10px;
`



