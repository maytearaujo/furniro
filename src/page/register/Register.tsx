import { Link } from "react-router-dom";


import arrowImg from "../../assets/arrow.svg";

import * as S from './RegisterStyles'


const Register = () => {


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
          />
        </S.InputContainer>

        <S.InputContainer>
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
            Cadastrar <img src={arrowImg} alt="->" />
          </S.Button>
          <S.Button>
            Register In with Google <img src={arrowImg} alt="->" />
          </S.Button>
        </S.DivBotoes>
        <S.Footer>
          <p>Você já tem uma conta?</p>
          <Link to="/Shop">Acesse sua conta aqui</Link>
        </S.Footer>
      </form>
    </S.DivRegister>
  )
}

export default Register
