import styled from "styled-components";

export const FuniroFurniture = styled.main`
  /* border: solid green; */
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  h2{
    font-weight: 700;
    font-size: 2.5rem;
    color: #333333;
  }
`

export const Mosaic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: .5rem;
/* display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;
width: 70%; */


`

export const Group1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: .1rem;
  `
export const Group2 = styled.div`
/* height: 80%; */
    /* img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  } */
  `
export const Group3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: .1rem;
`