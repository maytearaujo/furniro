import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {app} from "../../services/firebaseConfig"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



import arrowImg from "../../assets/arrow.svg";

import * as S from './LoginStyles'


const provider = new GoogleAuthProvider();


const Login = () => {
    const auth = getAuth(app);

  // LOGIN COM GOOGLE
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

  // LOGIN COM EMAIL E SENHA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return console.log(user);
  }



  return (
    <S.DivLogin>
      <h1>Login</h1>

      <button onClick={signInGoogle}>Logar com o Google</button>

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
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputContainer>

        <S.InputContainer className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputContainer>

        <a href="#">Esqueceu sua senha ?</a>

        <S.Button onClick={handleSignIn}>
          Entrar <img src={arrowImg} alt="->" />
        </S.Button>
        <S.Footer>
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </S.Footer>
      </form>


    </S.DivLogin>
  )
}

export default Login
