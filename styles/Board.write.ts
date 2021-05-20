import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 2000px;
	justify-content: center;
	align-items: center;
`;
export const ShadowBox = styled.div`
	display: flex;
	justify-content: center;
	max-width: 1200px;
	width: 100%;
	height: 1847px;
	box-shadow: 0px 0px 13px 0.1px rgba(0, 0, 0, 0.3);
`;
export const BoardWrapper = styled.div`
	max-width: 996px;
	width: 100%;
	height: 1687px;
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 40px;
	padding-top: 80px;
`;
export const Title = styled.div`
	font-weight: 700;
	font-size: 36px;
`;

export const NameAndPassword = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const NameWrapper = styled.div`
	display: flex;
	width: 486px;
	flex-direction: column;
	justify-content: space-between;
`;

export const SubTitle = styled.div`
	font-weight: 500;
	font-size: 16px;
	padding-top: 40px;
	padding-bottom: 16px;
`;

export const Password = styled.div`
	font-weight: 500;
	font-size: 16px;
`;

export const PasswordWrapper = styled.div`
	display: flex;
	width: 486px;
	flex-direction: column;
	justify-content: space-between;
`;

export const NameInput = styled.input`
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.3);
	height: 52px;
	padding-left: 16px;
	outline: none;
	border-radius: 8px;
`;

export const PasswordInput = styled.input`
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.3);
	height: 52px;
	padding-left: 16px;
	outline: none;
	border-radius: 8px;
`;

export const ContentTitle = styled.div`
	font-weight: 500;
	font-size: 16px;
	padding-top: 40px;
	padding-bottom: 16px;
`;

export const ContentTitleInput = styled.input`
	width: 100%;
	height: 52px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	padding-left: 16px;
	outline: none;
	border-radius: 8px;
`;

export const Content = styled.div`
	font-weight: 500;
	font-size: 16px;
	padding-top: 40px;
	padding-bottom: 16px;
`;

export const ContentTextBot = styled.textarea`
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.3);
	height: 480px;
	padding-top: 16px;
	padding-left: 16px;
	outline: none;
	border-radius: 8px;
`;

export const Address = styled.div`
	font-weight: 500;
	font-size: 16px;
	padding-top: 40px;
	padding-bottom: 16px;
`;

export const AddressWrapper = styled.div`
	display: flex;
	width: 217px;
	justify-content: space-between;
	padding-bottom: 16px;
`;
export const AddressNumber = styled.input`
	width: 77px;
	height: 52px;
	padding: 16px 14px;
	color: grey;
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 8px;
`;

export const AddressBtn = styled.button`
	background-color: black;
	width: 124px;
	font-size: 16px;
	outline: none;
	cursor: pointer;
	color: white;
	border: none;
	border-radius: 8px;
`;

export const AddressInput = styled.input`
	width: 100%;
	height: 52px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	margin-bottom: 30px;
	padding-left: 16px;
	border-radius: 8px;
	outline: none;
`;

export const Youtube = styled.div`
	font-weight: 500;
	font-size: 16px;
	padding-top: 40px;
	padding-bottom: 16px;
`;

export const YoutubeLink = styled.input`
	width: 100%;
	height: 52px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	padding-left: 16px;
	outline: none;
	border-radius: 8px;
`;

export const Photo = styled.div`
	font-weight: 500;
	font-size: 16px;
	padding-top: 40px;
	padding-bottom: 16px;
`;

export const PhotoBtn = styled.button`
	width: 78px;
	height: 78px;
	background-color: #bdbdbd;
	font-weight: 500;
	font-size: 12px;
	outline: none;
	border: none;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const PhotoPlus = styled.img`
	padding-bottom: 8px;
`;

export const PhotoBtnWrapper = styled.div`
	width: 282px;
	display: flex;
	justify-content: space-between;
`;

export const Main = styled.div`
	font-weight: 500;
	font-size: 16px;
	padding-top: 40px;
	padding-bottom: 16px;
`;

export const MainLabel = styled.label`
	font-weight: 500;
	font-size: 16px;
`;
export const MainBtn = styled.input`
	&:checked {
		background-color: red;
		&::after {
			background-color: red;
		}
	}
`;

export const MainWrapper = styled.div`
	width: 159px;
	display: flex;
	justify-content: space-between;
`;

export const RegisterBtn = styled.button`
	font-weight: 500;
	font-size: 16px;
	height: 52px;
	width: 179px;
	background-color: #ffd600;
	outline: none;
	border: none;
	border-radius: 8px;
	cursor: pointer;
`;

export const RegisterWrapper = styled.div`
	width: 100%;
	padding-top: 80px;
	display: flex;
	justify-content: center;
`;
