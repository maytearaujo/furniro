import styled from "styled-components";

export const MainBrowseTheRange = styled.main`
border: solid green;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    font-weight: 700;
    font-size: 2rem;
    color: #333333;
  }

  p {
    color: #666666;
    font-size: 1.25rem;
  }

  `

export const SlideItem = styled.div`
border: solid red;
width: 70%;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`