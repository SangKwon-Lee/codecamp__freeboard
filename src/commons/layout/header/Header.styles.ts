import styled from "@emotion/styled"

export const HeaderWrapper = styled.div`
  position: sticky;
  background-color:white;
  width: 100%;
  height:6.25rem;
  justify-content: center;
  align-items:center;
  top: 0;
  z-index: 2;
  display:flex;
  padding-left:3.75rem;
  padding-right:3.75rem;
  box-shadow: 1px 5px 10px 4px rgba(0, 0, 0, 0.1);
`
export const HeaderBody = styled.div`
    max-width: 1200px;
    width: 100%;
    display:flex;
    justify-content: space-between;
`

export const LogoWrapper = styled.div`

display: flex;
justify-content: center;
align-items: center;
`
export const Logo = styled.img``

export const HeaderRightLogoutWrapper = styled.div`
  display: flex;
  /* width: 11.125rem; */
  align-items:center;
  justify-content: space-between;
`
export const Login = styled.button`
  background-color:transparent;
  cursor: pointer;
  border:none;
  outline:none;
  font-weight:500;
  margin-right:20px;
  font-size: 1rem;
  :hover{
  font-weight:700;
  }
`

export const SignUp = styled.button`
  background-color: #FFD600;
  font-size: 1rem;
  color: black;
  padding: 0.875rem 1.5rem;
  border-radius: 16px;
  border: none;
  outline:none;
  cursor: pointer;
  :hover{
  font-weight:700;
  }
`

export const HeaderRightLoginWrapper = styled.button`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:5.75rem;
  border:none;
  background-color:transparent;
  cursor: pointer;
  outline:none;
`

export const LoginOKWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`



export const LoginBottomWrapper = styled.div`
  display: flex;

`

export const LoginImg = styled.img`
width:40px;
  margin-right:15px;
`


export const LogoutBtn = styled.button`
  width:77px;
  height: 34px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border:1px solid rgba(0,0,0,0.3);
`


//! 본인 정보 확인 모달

export const LoginAb = styled.div`
position: absolute;
`

export const LoginModalWrapper = styled.div`
  position: absolute;
  top:30px;
  background-color: white;
  right:-70px;
  width:258px;
  height: 231px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0,0.3);
  border-radius: 16px;
  animation-name: move;
  animation-duration: 1s;
  @keyframes move {
    from {
      opacity: 0;
    } to{
      opacity: 1;
    }
  }
`

export const LoginModalTop = styled.div`
  display: flex;
  padding:30px 0px 26px 24px;
  border-bottom:1px solid;
  height: 100px;
  width: 100%;
`
export const LoginDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 48px;
  justify-content: space-between;
`
export const LoginName = styled.div`
  font-size:16px;
  font-weight: 700;

`

export const LoginPoint = styled.div`

  font-size:12px;
  font-weight: 700;`


export const LoginModalBottom = styled.div`
  width: 100%;
  `

export const LoginModalBottomTextWrapper = styled.div`
  width:100%;
  display: flex;
  height: 64px;
  align-items: center;
  padding-left: 36px;
  padding-bottom:21px;
  padding-top:20px;
`

export const LogoutImg = styled.img`
  margin-right:12px;
`

export const LogoutBottomHr = styled.div`
  width: 100%;
    border-top:1px solid #BDBDBD;
  `

export const LoginBottomText = styled.div`
  cursor: pointer;
`