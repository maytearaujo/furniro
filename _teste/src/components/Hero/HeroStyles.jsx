import styled from "styled-components";

export const DivHero = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 2rem;

    background-image: url('/src/assets/img/home/Hero.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const DivNewArrival = styled.div`
    background-color: #FFF3E3;
    width: 40%;
    height: 70%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 10px;
    padding: 2rem;

    button {
        background-color: #B88E2F;
        width: 13.875rem;
        height: 4.375rem;
        color: #FFFFFF;
        font-weight: 700;
        border: none;
        cursor: pointer;
    }

`

export const FirstParagrafo = styled.p`
    color: #333333;
    font-weight: 600;
    font-size: 1rem;
    `


export const TituloHero = styled.h2`
    color: #B88E2F;
    font-weight: 700;
    font-size: 3.25rem;
`
