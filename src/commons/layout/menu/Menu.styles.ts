import styled from "@emotion/styled"

interface MenuProps{
  isActive: boolean;
}
export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 64px;
  width: 100%;
  margin-top:-5px;
  align-items: center;
  background-color: #FFD600;
   box-shadow: 1px 5px 10px 4px rgba(0, 0, 0, 0.1);
`

export const TitleWrapper = styled.div`
  width: 395px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const MenuTitle = styled.div`
font-size:18px;
font-weight: 700;
color: ${(props:MenuProps) => props.isActive ? "black " : '#AB9000'};
cursor: pointer;
:hover{
  color:black
}:focus{
  color:black
}


`

export const DivdieLine = styled.div`
  border-left: 1px solid white;
  height: 28px;
`