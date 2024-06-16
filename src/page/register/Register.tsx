import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import { auth } from "../../services/firebaseConfig";

import * as S from './RegisterStyles'


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  return (
    <S.DivRegister>
      <h1>Register</h1>

      <S.HeaderRegister>
        <span>Por favor digite suas informações de Cadastro</span>
      </S.HeaderRegister>

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

        <S.InputContainer>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputContainer>

        <S.Button onClick={handleSignOut}>
          Cadastrar <img src={arrowImg} alt="->" />
        </S.Button>
        <S.Footer>
          <p>Você já tem uma conta?</p>
          <Link to="/Shop">Acesse sua conta aqui</Link>
        </S.Footer>
      </form>
    </S.DivRegister>
  )
}

export default Register
