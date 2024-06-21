import styled from "styled-components";

export const MainBrowseTheRange = styled.main`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;


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
  width: 70%;
  margin-top: 2.5rem;


  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  p{
    color: #333333;
    text-align: center;
  }
`