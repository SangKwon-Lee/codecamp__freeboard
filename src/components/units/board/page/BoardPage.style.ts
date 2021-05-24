import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	height: 1200px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Shadow = styled.div`
	width: 1200px;
	height: 1000px;
	display: flex;
	box-shadow: 0px 0px 13px 0.1px rgba(0, 0, 0, 0.3);
	justify-content: center;
`;

export const Body = styled.div`
	width: 996px;
	display: flex;
	flex-direction: column;
	padding-top: 80px;
	align-items: center;
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const HeaderLeftWrapper = styled.div`
	width: 194px;
	display: flex;
	height: 56px;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderProfileImg = styled.img``;

export const HeaderWriterWrapper = styled.div`
	width: 130px;
	display: flex;
	height: 60px;
	justify-content: space-between;
	flex-direction: column;
`;
export const HeaderWriter = styled.div`
	font-size: 24px;
	font-weight: 500;
`;
export const HeaderDate = styled.div`
	font-size: 16px;
	color: #828282;
`;

export const HeaderRightWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 10px;
	align-content: center;
	width: 100px;
`;
export const HeaderLinkImg = styled.img`
	width: 40px;
	height: 40px;
`;

export const HeaderNavImg = styled.img`
	width: 40px;
	height: 40px;
`;

export const DivideLine = styled.hr`
	width: 100%;
	margin-top: 20px;
	margin-bottom: 80px;
	border-bottom: 1px solid rgba(0, 0, 0, 0);
`;

export const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-bottom: 80px;
	height: 100%;
`;

export const TitleWrapper = styled.div`
	width: 100%;
	display: flex;

`;
export const Title = styled.div`
	font-weight: 700;
	font-size: 36px;
`;

export const ContentWrapper = styled.div`

display: flex;
justify-content: center;
	width: 100%;
`
export const Content = styled.div`
	padding-top: 40px;
	padding-bottom: 160px;
`;

export const LikeBtnWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 120px;
	height: 51px;
`;

export const LikeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 70px;
	align-items: center;
	justify-content: space-between;
`;
export const LikeImg = styled.img`
	cursor: pointer;
	`;
export const LikeCount = styled.div`
	font-size: 18px;
	font-weight: 400;
`;

export const DisLikeWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 70px;
	justify-content: space-between;
`;
export const DisLikeImg = styled.img`
	margin-top: 3px;
	cursor: pointer;
`;
export const DisLikeCount = styled.div`
	font-size: 18px;
	font-weight: 400;
`;

export const BottomBtnWrapper = styled.div`
width: 382px;
	display: flex;
	justify-content: space-between;
`

export const ListBtn = styled.button`
	margin-top: 80px;
	width: 179px;
	height: 52px;
	font-weight: 500;
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	outline: none;
	background-color: transparent;
	cursor: pointer;
		:hover{
		background-color: #FFD600;
	}
`;

export const UpdateBtn = styled.button`
	margin-top: 80px;
	width: 179px;
	height: 52px;
	font-weight: 500;
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	outline: none;
	background-color: transparent;
	cursor: pointer;
	:hover{
		background-color: #FFD600;
	}
`;

export const ContentTop = styled.div`
width:100%;

`

export const ContentBottom = styled.div`

`