import styled from '@emotion/styled'

export const WhiteBG = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  background-color: white;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  z-index: -1;
  
  `
export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const ModalWrapper = styled.div`
  width: 464px;
  height: 306px;
  background-color: white;
  border-radius: 16px;
  margin-bottom: 200px;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
`

export const ModalLogo = styled.img`
  width:236px;
  height: 36px;
  margin-bottom: 40px;
`

export const ModalText = styled.div`
  font-size: 22px;
  margin-bottom: 40px;
`

export const ModalOKBtn = styled.button`
  width: 384px;
  height: 64px;
  background-color: #FFD600;
  font-size: 16px;
  font-weight: 700;
  outline: none;
  border:none;
  border-radius: 16px;
  cursor: pointer;
`



