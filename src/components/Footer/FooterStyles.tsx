import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;

    div{
        padding-left: 3rem;
    }

    h3, p {
        color: #9F9F9F;
    }
`

export const MainFooter = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const RedesSociais = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 50%;
`

export const NavFooter = styled.nav`
    width: 20%;
    display: flex;
    justify-content: space-around;

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`