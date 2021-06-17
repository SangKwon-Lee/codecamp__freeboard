import styled from '@emotion/styled'

interface PaymentProps {
  isActive: boolean;
}

export const PaymentBG = styled.div`
  position: absolute;
  width: 100%;
  height: 200%;
  background-color: black;
  opacity: 0.2;
  z-index: 1;
  top:0;
  left: 0;
`

export const PaymentWrapperBG = styled.div`
  position: absolute;
  top:0;
  display: flex;
  justify-content: center;
  margin-top:300px;
  width: 100%;
  z-index:5;
`

export const PaymentWrapper = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
  padding:20px 40px 40px 40px;
  align-items: center;
  box-shadow: 1px 5px 10px 4px rgba(0, 0, 0, 0.1);
  z-index:10;
`



export const PaymentX = styled.img`
  cursor: pointer;
`

export const PaymentXWrapper = styled.div`
  width:100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom:16px;
  `

export const PaymentPig = styled.img`
width:80px;
margin-bottom: 40px;

`

export const PaymentTitle = styled.div`
font-size: 20px;
font-weight: 700;
margin-bottom:42px;
`

export const PaymentChoiceWrapper = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid;
  padding-bottom:14px ;
    cursor: pointer;
`

export const PaymentChoice = styled.div`
  font-size: 16px;
  font-weight: 700;
color:${(props : PaymentProps) => props.isActive ? "#E0E0E0": "black"};
  cursor: pointer;
`

export const PaymentChoiceImg = styled.img`
  cursor: pointer;
`

export const PaymentBtn = styled.button`
margin-top:40px;
  width:100%;
  height: 52px;
  background-color: black;
  outline: none;
  border:none;
  cursor: pointer;
  border-radius: 10px;
  color:white;
  font-size: 16px;
  :disabled{
    background-color: #BDBDBD;
    cursor: default;
  }
`

export const PaymentPointWrapper = styled.div`
  width:100%;
  margin-top:30px;
  height: 225px;
  border-radius: 10px;
  box-shadow: 1px 5px 10px 4px rgba(0, 0, 0, 0.1);
`



export const PaymentPoint = styled.div`
  width:100%;
  padding:16px;
  font-size:16px;
  color:${(props : PaymentProps) => props.isActive ? "black": "#E0E0E0"};
  font-weight: 700;
  cursor: pointer;
  transition: all 350ms;
`

export const PaymentLine = styled.div`
  width:100%;
  border-top:1px solid #E0E0E0;
  transition: all 350ms;
`
