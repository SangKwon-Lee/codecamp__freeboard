import styled from "@emotion/styled"
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`


const Title = styled.div`
  color: white;
  font-size: 50px;
  border:1px solid white;
  padding:20px;
  margin: 30px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover{
    color: black;
    background: white;
  }
`

export default function CSSUI() {


  const router = useRouter();

  const onClickRout = (e) => {
    router.push(`/css/${e.target.id}`)
  }

  return <Wrapper>

    <TitleWrapper>
      <Title id="hover" onClick={onClickRout}>Hover-Page</Title>
      <Title id="hoverBtn" onClick={onClickRout}>Hover-Button</Title>
      <Title id="intersection" onClick={onClickRout}>Intersection</Title>
      <Title id="Loading" onClick={onClickRout}>Loading</Title>
      <Title id="progress" onClick={onClickRout}>progress</Title>
      <Title id="snake" onClick={onClickRout}>Snake</Title>
      <Title id="sun" onClick={onClickRout}>Sun</Title>
      <Title id="wave" onClick={onClickRout}>Wave</Title>
      <Title id="split" onClick={onClickRout}>Scroll-Split-Video</Title>
      <Title id="searchBar" onClick={onClickRout}>SearchBar</Title>
    </TitleWrapper>
  </Wrapper>
}