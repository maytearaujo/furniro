import styled from "styled-components";

export const Nav = styled.nav`
    border: solid red;
    width: 60%;
    height: 8%;

    ul {
        border: solid green;
        /* width: 30%; */
        
        display: flex;
        justify-content: space-around;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`
