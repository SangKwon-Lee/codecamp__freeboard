import styled from '@emotion/styled'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EuroIcon from '@material-ui/icons/Euro';

interface MyPageStyleProps {
  isActive: boolean
}
export const MyPageContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  height: 960px;
`


export const MyPageWrapper = styled.div`
  max-width: 1200px;
  width:100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
`

export const MyPageLeftLayout = styled.div`
 border-right:1px solid #BDBDBD;
 width:180px;
`

export const MyPageLeftWrapper = styled.div`
  width:100%;
  margin-top:80px;
  padding-right:75px;
  height: 473px;
  display: flex;
  flex-direction: column;
`

export const MyPageTitle = styled.div`
  font-size:24px;
  font-weight: 700;
  margin-bottom: 40px;
`

export const MyPageImg = styled.img`
  margin-bottom: 20px;
`

export const MyPageName = styled.div`
  font-size:24px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-left:20px;
`

export const MyPagePointAndPig = styled.div`
  display: flex;
  margin-bottom:70px;
`
export const MyPagePoint = styled.div`
  margin-left:8px;
  font-size:16px;
    font-weight: 700;
`
export const MyPagePig = styled.img``

export const MyPageMenuWrapper = styled.div`
  height:100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const MyPageIconAndMenu = styled.div`
  display: flex;
  cursor: pointer;

`
export const MyPageIconMoney = styled(EuroIcon)`
  color:#FFD600;
`
export const MyPageIconCart = styled(ShoppingCartIcon)`
`
export const MyPageIconPoint = styled(EuroIcon)`
`

export const MyPageIconProfle = styled(AccountCircleIcon)`
`

export const MyPageMenu = styled.div`
  margin-left:8px;
  font-weight:${(props: MyPageStyleProps) => props.isActive ? 700 : 500};
  color: ${(props: MyPageStyleProps) => props.isActive ? 'black' : '#BDBDBD'};
`

export const MyPageRightLayout = styled.div`
width:100%;
padding:80px 0px 0px 40px ; 
`


