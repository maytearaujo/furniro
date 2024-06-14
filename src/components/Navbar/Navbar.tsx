
import Root from "../../routes/root"

import * as S from "./NavbarStyles"

const Navbar = () => {
    return (
        <S.Navbar>
            <S.Logo>
                <img src="" alt="" />
                <h1>Furniro</h1>
            </S.Logo>

            <Root />

            <S.Login>
                <img src="" alt="" />
                <img src="" alt="" />
            </S.Login>
        </S.Navbar>
    )
}

export default Navbar
