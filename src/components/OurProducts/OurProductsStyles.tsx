import styled from "styled-components";

export const OurProducts = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    font-weight: 700;
    font-size: 2.5rem;
    color: #333333;
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