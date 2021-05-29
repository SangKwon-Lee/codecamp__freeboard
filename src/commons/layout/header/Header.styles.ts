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
  width: 11.125rem;
  align-items:center;
  justify-content: space-between;
`
export const Login = styled.button`
  background-color:transparent;
  cursor: pointer;
  border:none;
  outline:none;
  font-weight:500;
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
export const HeaderProfile = styled.img`

`
export const HeaderarrowDown = styled.img`

`