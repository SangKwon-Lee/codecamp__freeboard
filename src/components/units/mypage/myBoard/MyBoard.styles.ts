import styled from "@emotion/styled"

interface MyBoardProps {
  isActive: boolean
}

export const MyBoardWrapper = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
`

export const MyBoardMenuWrapper = styled.div`
width:100%;
display: flex;
justify-content: flex-end;
margin-bottom :20px;
`

export const MyBoardMenuRight = styled.div`
width:129px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const MyBoardMenu = styled.div`
  font-size:16px;
  font-weight: ${(props: MyBoardProps) => props.isActive ? '700' : '400'};
  color:${(props: MyBoardProps) => props.isActive ? 'black' : '#BDBDBD'};
  border-bottom:${(props: MyBoardProps) => props.isActive ? '2.5px solid #FFD600' : 'none'};
  cursor: pointer;
  
`
export const MyBoardMenuLine = styled.div`
border-right: 1px solid #BDBDBD;
height: 70%;
`

export const MyBoardTableWrapper = styled.div`
  border-top:1px solid #BDBDBD;
  border-bottom:1px solid #BDBDBD;
  width:100%;
`

export const MyBoardTableTitleWrapper = styled.div`
 width:100%;
 display: flex;
 padding-left: 20px;
 justify-content: space-between;
 padding-right: 40px;
 padding-top:13px;
 padding-bottom: 10px;
`

export const MyBoardTableTitle = styled.div`
font-size:18px;
font-weight: 400;
`

export const MyBoardNumberWrapper = styled.div`
width:40px;
display: flex;
justify-content: center;
`

export const MyBoardTitleWrapper = styled.div`
width:250px;
display: flex;
justify-content: center;
`
export const MyBoardPriceWrapper = styled.div`
width:100px;
display: flex;
justify-content: center;
`
export const MyBoardWriterWraper = styled.div`
width:80px;
display: flex;
justify-content: center;
`

export const MyBoardDateWrapper = styled.div`
width:120px;
display: flex;
justify-content: center;
`

export const MyBoardContentsWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #BDBDBD;
  height: 54px;
  width:100%;
 display: flex;
 padding-left: 20px;
 justify-content: space-between;
 padding-right: 40px;
 align-items: center;
`

export const MyBoardContentsNumber = styled.div`
width:40px;
display: flex;
justify-content: center;
align-items: center;
`
export const MyBoardContentsTitle = styled.div`
width:250px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

export const MyBoardContentsPrice = styled.div`
width:100px;
display: flex;
justify-content: center;
align-items: center;
`

export const MyBoardContentsWriter = styled.div`
width:80px;
display: flex;
justify-content: center;
align-items: center;
`
export const MyBoardContentsDate = styled.div`
width:120px;
display: flex;
justify-content: center;
align-items: center;
`

export const MyBoardContents = styled.div`
  color:#4F4F4F;
  font-size:16px;
`

export const MyBoardContentsSale = styled.div`
width:70px;
display: flex;
justify-content: center;
align-items: center;
`

export const MyBoardContentsSaleText = styled.div`
  color:#FFD600;
  font-size: 16px;
  font-weight: 700;
`
interface IProps {
  isActive: boolean;
}

export const PageContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
`

export const Page = styled.span`
cursor: pointer;
color:${(props: IProps) => (props.isActive ? '#FFD600' : 'black')};
border-bottom: ${(props: IProps) => (props.isActive ? "1px solid #FFD600" : "none")};
margin:20px;

`

export const PageWrapper = styled.div`
padding-top: 60px;
display: flex;
justify-content: space-between;

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
