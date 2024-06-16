

import * as S from "./NavbarStyles"

const Navbar = () => {
    return (
        <S.Navbar>
            <S.Logo>
                <img src="https://myfurniros.s3.us-west-1.amazonaws.com/img/logo.png" alt="logo Furniro" />
                <h1>Furniro</h1>
            </S.Logo>

            <S.Nav>
                <ul>
                    <li>
                        <a href={`/`}>Home</a>
                    </li>
                    <li>
                        <a href={`/shop`}>Shop</a>
                    </li>
                    <li>
                        <a href={`/about`}>About</a>
                    </li>
                    <li>
                        <a href={`/contact`}>Contact</a>
                    </li>
                </ul>
            </S.Nav>

            <S.Login>
                <img src="" alt="" />
                <img src="" alt="" />
            </S.Login>
        </S.Navbar>
    )
}

export default Navbar
