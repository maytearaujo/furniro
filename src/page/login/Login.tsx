import { Link } from "react-router-dom";


import arrowImg from "../../assets/arrow.svg";

import * as S from './LoginStyles'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../services/firebaseConfig";

const provider = new GoogleAuthProvider();

const Login = () => {

  const auth = getAuth(app);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
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

        <button onClick={signInGoogle} >Sign In with Google</button>

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
