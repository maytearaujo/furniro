import styled from "styled-components";

export const Footer = styled.footer`
    /* border: solid pink; */
    display: flex;
    flex-direction: column;

    div{
        /* border: solid purple; */
        padding-left: 3rem;
    }

    h3, p {
        color: #9F9F9F;
    }
`

export const MainFooter = styled.main`
    /* border: solid orange; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const RedesSociais = styled.section`
    /* border: solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 50%;
`

// export const SectionFuniro = styled.section`
//     border: solid green;
//     p{
//         color: #9F9F9F;
//     }
// `

export const NavFooter = styled.nav`
    /* border: solid yellow; */
    width: 20%;
    display: flex;
    justify-content: space-around;

    li {
        list-style-type: none;
    }
`
// export const SectionLinks = styled.section`
//     border: solid green;
// `
// export const SectionHelp = styled.section`
//     border: solid green;
// `

// export const SectionNewsletter = styled.section`
//     border: solid green;
// `