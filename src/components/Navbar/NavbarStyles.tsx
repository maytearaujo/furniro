import styled from "styled-components";


export const Navbar = styled.div`
    display: flex;
   
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    h1 {
        margin: .5rem;
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 2.125rem;
        color: #000000;
    }
    
    a {
        text-decoration: none;
    }
`

export const Nav = styled.nav`
    width: 35%;
    height: 8%;

    ul {
        
        display: flex;
        justify-content: space-around;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
    }
`

export const Login = styled.div`
    width: 5%;
    display: flex;
    justify-content: space-between;
    margin-right: 3.13rem;

    img {

        border: 50%;
    }
`