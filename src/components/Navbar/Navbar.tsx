import { Link } from "react-router-dom"

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
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/shop`}>Shop</Link>
                    </li>
                    <li>
                        <Link to={`#`}>About</Link>
                    </li>
                    <li>
                        <Link to={`/contact`}>Contact</Link>
                    </li>
                    <li>
                        <Link to={`/login`}>Login</Link>
                    </li>
                    <li>
                        <Link to={`/dashboard`}>Dashboard</Link>
                    </li>
                    {/* <li>
                        <Link to={`/teste`}>Teste</Link>
                    </li> */}
                    <li>
                        <Link to={`/cart`}>Cart</Link>
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
