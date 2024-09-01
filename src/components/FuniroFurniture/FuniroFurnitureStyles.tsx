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
  gap: 1rem;
/* display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;
width: 70%; */


`

export const Group1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr ;
  /* grid-gap: 1rem; */

  /* border: solid green; */
  display: grid;
  justify-content: center;
  align-items: center;


  /* img{
  &.item-1 {
    border: solid red;
  }
  
  &.item-2 {
    border: solid red;
  }
  
  &.item-3 {
    border: solid red;
  }
  
  &.item-4 {
    border: solid red;
  } */
  


}
  /* gap: 1rem; */
  `
export const Group2 = styled.div`
/* height: 80%; */
    /* img {
    width: 100%;
    height: 300px;
    object-fit: cover;


      img{
    &.item-5 {
    border: solid red;
  }
  } */
  `
export const Group3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: .1rem;

  div{
    display: grid;
    align-items: end;
    justify-content: end;

  /* &.item-6 {
    border: solid green;

  }}

  img{
    &.item-5 {
    border: solid red;
  }
    

  
  &.item-7 {
    border: solid red;
  }

  &.item-8 {
    border: solid red;
  }
  
  &.item-9 {
    border: solid red;
  } */
  }
`