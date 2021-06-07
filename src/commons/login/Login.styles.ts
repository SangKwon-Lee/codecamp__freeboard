import styled from '@emotion/styled'

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginBG = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
`

export const LoginShadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background-color: rgba(0,0,0,0.7);
`


export const LoginInputWrapper = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
`


export const LoginLogo = styled.img`
  padding-bottom: 80px;
`

export const LoginInputAndEroor = styled.div`
  width:100%;
  margin-bottom:20px;
`

export const LoginInput = styled.input`
  width:100%;
  background-color: transparent;
  outline: none;
  border: 1px solid white;
  border-radius: 16px;
  height: 64px;
  color:white;
  padding: 20px 16px;
`

export const LoginErrorMessage = styled.div`
  font-size: 14px;
  padding-left:16px;
  padding-top:4px;
  color:#FF0000;
  
`

export const LoginMainTainWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
`

export const LoginMainTain = styled.div`
  color: white;
  font-weight: 300;
  margin-left: 12px;
`




export const LoginBtn = styled.button`
  width:100%;
  color: black;
  font-weight: 700;
  height: 64px;
  font-size:16px;
  outline: none;
  cursor: pointer;
  border-radius: 16px;
  background-color: #FFD600;
  :disabled{
    background-color: #4F4F4F;
  }
`

export const LoginDivideLine = styled.div`
  width:100%;
  margin-top:40px;
  margin-bottom:30px;
  border-top: 1px solid #FFFFFF;
`

export const LoginOptionWrapper = styled.div`
  display: flex;
  width:100%;
  align-items: center;
  padding:0px 50px;
  justify-content: space-between;
`
export const LoginOption = styled.div`
  color: #FFFFFF;
  font-size:14px;
  cursor: pointer;
`

export const LoginVrLine = styled.div`
  height:12px;
  border-left: 1px solid #FFFFFF;
`