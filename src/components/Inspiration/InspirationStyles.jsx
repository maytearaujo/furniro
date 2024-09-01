import styled from "styled-components";

export const MainInspiration = styled.main`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`

export const TitleInspiration = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30%;
height: 80%;
flex-direction: column;
background-color: #FCF8F3;
  h2{
    font-weight: 700;
    font-size: 2.5rem;
    color: #333333;
  }

`

export const SlideItem = styled.div`
  width: 30%;
  height: 80%;

  img {
    width: 100%;
    height: 486px;
  }
`