import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";

import * as S from './LoginStyles'

import arrowImg from "../../assets/arrow.svg";


const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext)

  async function loginGoogle() {
    await signInGoogle()
  }


  return (
    <S.DivLogin>
      <h1>Login</h1>

      <S.HeaderLogin>
        <span>Por favor digite suas informações de login</span>
      </S.HeaderLogin>

      <form>
        <S.InputContainer>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="usuario@site.com"
          />
        </S.InputContainer>

        <S.InputContainer className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
          />
        </S.InputContainer>

        <S.DivBotoes>
          <S.Button>
            Entrar <img src={arrowImg} alt="->" />
          </S.Button>
          <S.Button onClick={signInGoogle} >Sign In with Google</S.Button>
        </S.DivBotoes>

        {/* <button onClick={() => signInGoogle()} >Sign In with Google</button> */}

        <a href="#">Esqueceu sua senha ?</a>

        <S.Footer>
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </S.Footer>

      </form>


    </S.DivLogin>
  )

}

export default Login
