import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Contents = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

//! 테이블 구역

export const Table = styled.div`
	max-width: 1200px;
	width: 100%;
	margin-top: 40px;
	border-top: 1px solid rgba(0,0,0,0.5);
	border-bottom: 1px solid rgba(0,0,0,0.5);
`;
export const RowWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 0px 40px;
	align-items: center;
	justify-content: space-between;
	height: 52px;
	border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TableWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 0px 40px;
	align-items: center;
	justify-content: space-between;
	height: 52px;
`;
export const RowTitle = styled.div`
	font-size: 18px;
	font-weight: 500;

`;

export const NumberWrapper = styled.div`
	width: 34px;
	display: flex;
	justify-content: center;
`;

export const TitleWrapper = styled.div`
	width: 700px;
	display: flex;
	justify-content: center;
`;
export const Title = styled.div`
	font-size: 16px;
	color: #4f4f4f;
	cursor: pointer;
	:hover{
		font-weight: 700;
	}
`;

export const WriterWrapper = styled.div`
	width: 200px;
	display: flex;
	justify-content: center;
`;

export const DateWrapper = styled.div`
	width: 100px;
	display: flex;
	justify-content: center;
`;

//! 써치바 구역



export const RegisterBtnWrapper = styled.div`
	width:100%;
	display: flex;
	justify-content: flex-end;
	padding-top: 40px;
`
export const ResgisterBtn = styled.button`
	width:171px;
	height: 52px;
	border: 1px solid rgba(0,0,0,0.2);
	background-color: transparent;
	font-size: 16px;
	font-weight: 500;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: none;
	transition: 300ms all;
	:hover{
	background-color: #FFD600;

	}

`
export const RegisterImg = styled.img`
	margin-right:8px;
`


export const SearchWrapper = styled.div`
max-width: 1200px;
padding-top:80px;
width: 100%;
display: flex;
justify-content: space-between;
`

export const SearchBarWrapper = styled.div`
  max-width: 894px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const SearchBar = styled.input`
max-width: 588px;
height: 52px;
width: 100%;
border:none;
outline:none;
background-color: #F2F2F2;
padding:14px 16px;
border-radius: 8px;
`
export const SearchDateWrapper = styled.div`
  width: 282px;
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border :1px solid rgba(0,0,0,0.2);
  border-radius: 8px;
`

export const SearchBtn = styled.button`
width: 94px;
height: 52px;
background-color: black;
color: white;
outline: none;
  border-radius: 8px;
border: none;
cursor: pointer;
`
export const SearchImg = styled.img``



export const DateImg = styled.img``

interface IProps {
	isActive: boolean;
}

export const Page = styled.span`
cursor: pointer;
color:${(props: IProps) => (props.isActive ? '#FFD600' : 'black')};
border-bottom: ${(props: IProps) => (props.isActive ? "1px solid #FFD600" : "none") };
`

export const PageWrapper = styled.div`
padding-top: 60px;
display: flex;
justify-content: space-between;
width:400px;

align-items: center;
`

export const PageLeft = styled.img`
margin-top :2px ;
height: 10px;
cursor: pointer;
`

export const PageRight = styled.img`
margin-top :2px ;
height: 10px;
cursor: pointer;
`