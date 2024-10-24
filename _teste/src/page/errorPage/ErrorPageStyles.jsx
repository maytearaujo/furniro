import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    height: 55vh;

    img {
        width: 20%;
    }
`

export const LinkBackHome = styled.button`
  background-color: #159eec;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: none;

  a {
    text-decoration: none;
    color: #fcfefe;

    font-size: 1rem;
  }
`;