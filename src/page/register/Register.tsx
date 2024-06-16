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
        <S.HeaderRegister>
          <span>Por favor digite suas informações de cadastro</span>
        </S.HeaderRegister>

        <form>
          <S.InputContainer>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
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

          <button onClick={handleSignOut} className="button">
            Cadastrar <img src={arrowImg} alt="->" />
          </button>
          <div className="footer">
            <p>Você já tem uma conta?</p>
            <Link to="/">Acesse sua conta aqui</Link>
          </div>
        </form>
    </S.DivRegister>
  )
}

export default Register
