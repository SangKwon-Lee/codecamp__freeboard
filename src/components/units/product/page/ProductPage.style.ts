import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin-top:20px;
`;

export const Shadow = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Body = styled.div`
	max-width: 996px;
	width: 100%;
	display: flex;
	padding-left: 10px;
	padding-right:10px;
	flex-direction: column;
	padding-top: 80px;
	align-items: center;
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const HeaderLeftWrapper = styled.div`
	display: flex;
	height: 56px;
	justify-content: space-between;
	align-items: center;

`;

export const HeaderProfileImg = styled.img``;

export const HeaderWriterWrapper = styled.div`
	padding-left:10px;
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
	border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
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
	flex-direction: column;
	margin-top: 20px;

`;
export const Title = styled.div`
	font-weight: 700;
	font-size: 18px;
	color:#BDBDBD;
	margin-bottom: 4px;
`;

export const Remarks = styled.div`
	font-size:24px;
	font-weight: 700;
	margin-bottom: 8px;
`
export const Price = styled.div`
	font-size:36px;
	font-weight: 700;
`

export const TagsWrapper = styled.div`
display: flex;
width: 100%;
margin-bottom: 40px;
`
export const Tags = styled.div`
	font-size: 16px;
	font-weight: 500;
		color:#BDBDBD;
		padding-right: 10px;
`

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%;
padding-top: 40px;
`
export const Content = styled.div`
padding-bottom: 40px;
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


export const SoldBtn = styled.button`
	margin-top: 80px;
	width: 179px;
	height: 52px;
	font-weight: 500;
		background-color: #FFD600;
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	outline: none;
	cursor: pointer;

`;




export const ContentTop = styled.div`
width:100%;

`

export const ContentBottom = styled.div`
`

export const ContentImg = styled.img`
	max-width:900px;
	margin-bottom:20px;
`

export const MapImg = styled.img`
	margin: 80px 0px;
		max-width:792px;
	width:100%;
	height: 360px;

`

export const HeartWrapper = styled.div`
	display: flex;
	height: 63px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	
`

export const Heart = styled.img``

export const HeartCount = styled.div``

export const HeartAndTitle = styled.div`
	max-width: 996px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

//! 슬라이드
export const ImgSlideWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top:80px;
margin-bottom:80px;

`
export const ImgSlideBody = styled.div`
	width: 504px;
`


export const ImgTopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width:100%;
	height: 384px;
	margin-bottom:30px;
`

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
export const ImgLeftArrow = styled(NavigateBeforeIcon)`
	background-color: rgba(0,0,0,0.2);
	border-radius:50%;
	color:white;

	:hover{
		background-color: #FFD600;
				transition: all 300ms;
	}
	transition: all 300ms;
`

export const ImgRightArrow = styled(NavigateNextIcon)`
	background-color: rgba(0,0,0,0.2);
	border-radius:50%;
	color:white;
	:hover{
		background-color: #FFD600;
				transition: all 300ms;
	}
		transition: all 300ms;
	`

export const ImgWrapper = styled.div`
	display: flex;
	justify-content: start;
	width: 340px;
	height: 384px;
	padding:44px;
	overflow-x: hidden;

`

export const SlideImg = styled.img`

`
interface styleProps {
	isTrue: boolean;
}

export const ImgDotsWrapper = styled.div`
	display: flex;
	justify-content:center;
	margin-bottom:30px;
	margin-top:-40px;
`

export const ImgDots = styled.div`
	background-color:${(props: styleProps) => (props.isTrue ? '#FFD600' : 'black')};
	width:10px;
	height: 10px;
	margin-right:10px;
	border-radius: 50%;
	transition: all 350ms;
`

export const ImgBottomWrapper = styled.div`
display: flex;
justify-content: center;

`


export const ImgBottom = styled.img`
	width: 78px;
	margin-right:20px;
	border:${(props: styleProps) => (props.isTrue ? '2px solid #FFD600' : 'none')};
	transition: all 350ms
`
