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
	margin-left: 170px;
`;

//! 써치바 구역

export const InfiniteWrapper = styled.div`
	max-width: 1200px;
	width:100%;
`


export const SaleWrapper = styled.div`

	width: 186px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Sale = styled.div`
	font-size: 18px;
	font-weight: 500;
	border-bottom: 3px solid #FFD600;
`


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
align-items: center;;
`

export const SearchBarWrapper = styled.div`
  max-width: 690px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const SearchBar = styled.input`
max-width: 282px;
width: 100%;
border:none;
outline:none;
background-color: #F2F2F2;
border-radius: 8px;
margin-left:10px;
font-size:16px;
`


export const SearchBarBackGround = styled.div`
max-width: 282px;
height: 52px;
width: 100%;
border:none;
outline:none;
background-color: #F2F2F2;
padding:14px 16px;
border-radius: 8px;
display: flex;
align-items: center;
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
export const SearchImg = styled.img`
	width:15px;
	height: 15px;

`

export const DateImg = styled.img``


//! 테이블 구역 

export const ListWrapper = styled.div`
	margin-top:40px;
	max-width: 1200px;
	padding: 0px 20px;
	height: 1006px;
	width: 100%;
	display: flex;
	flex-direction: column;
	border-top:1px solid #BDBDBD;
	overflow-y: scroll;
	::-webkit-scrollbar {
    width: 10px;
    background-color: white;
  }
	::-webkit-scrollbar-thumb {
    background-color: #FFD600;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #F2F2F2;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`

export const ListItemWrapper = styled.div`
	width:100%;
	padding:20px;
	display: flex;
	align-items: center;
	height: 201px;
	border-bottom:1px solid #BDBDBD;
`

export const ListSaleImg = styled.img``

export const ListBodyWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const ListLeftWrapper = styled.div`
	display: flex;
	height: 144px;
	padding-left: 40px;
	flex-direction: column;
`

export const ListName = styled.div`
	font-size:24px;
	margin-top: 4px;
	font-weight: 500;
	cursor: pointer;

`

export const ListRemarks = styled.div`
font-size:16px;
font-weight: 500;

`

export const ListPriceWrapper = styled.div`
	display: flex;
	align-items: center;

`
export const ListPriceImg = styled.img`
	width: 24px;
	height: 24px;
	margin-right: 8px;
	cursor: pointer;
`



export const ListPrice = styled.div`
font-size:24px;
font-weight: 700;

`

export const ListTags = styled.div`
	height: 24px;
	font-size:16px;
	color:#BDBDBD;
		font-weight: 500;
		margin-top:8px;
`

export const ListUserWrapper = styled.div`
	display: flex;
	margin-top:24px;
	align-items: center;
`

export const ListUserImg = styled.img``

export const ListUser = styled.div`
	margin-left:4px;
`

export const ListHeart = styled.img`
	margin-left:20px;
`

export const ListHeartCount = styled.div`
	margin-left:4px;
`

//! Fix 구역

export const FixWrapper = styled.div`
	position: relative;
	width: 196px;
	padding: 20px 20px 0px 20px;
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	margin-top:180px;
	margin-left: 20px;
	border:1px solid #BDBDBD;
	align-items: center;
`

export const FixTitle = styled.div`
	font-weight: 700;
	font-size: 18px;
	padding-bottom: 20px;
`

export const FixCardWrapper = styled.div`
	width: 156px;
	display: flex;
	border:1px solid #BDBDBD;
	flex-direction: column;
	padding:10px;
	margin-bottom: 20px;
	
`
export const FixHeartAndCount = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
`

export const FixImgWrapper = styled.div`
	width:100%;
	display: flex;
	justify-content: center;
`
export const FixHeartImg = styled.img`
	width:25px;
	height: 25px;
	margin-right:4px;


`
export const FixHeartCount = styled.div`
font-size:12px;
font-weight: 500;
`


export const FixImg = styled.img`
	width:80px;
	margin-left:10px;
	margin-bottom: 16px;

`

export const FixName = styled.div`
	font-size:12px;
	font-weight: 500;
		margin-bottom: 4px;
`

export const FixRemarks = styled.div`

	font-size:12px;
	font-weight:400;
	margin-bottom: 4px;
`

export const FixTags = styled.div`
	font-size:10px;
	font-weight:500;
	color:#BDBDBD;

`

export const FixPrice = styled.div`
	font-size:16px;
	font-weight:700;
	margin-bottom: 8px;
	height:16px;
`



