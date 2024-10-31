import styled from 'styled-components';

export const FurniroFurniture = styled.main`
  /* border: solid violet; */
  height: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #333333;
    text-align: center;
  }
`;

export const Mosaic = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const MosaicColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  align-items: baseline;

  img {
    width: 100%;
    height: auto;
    border: 2px solid #ddd;
    border-radius: 8px;
  }
`;

export const MosaicColumnCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */

  img {
    width: auto;  
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border: 2px solid #ddd;
    border-radius: 8px;
  }
`;