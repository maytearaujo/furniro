import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext"

import * as S from './LoginStyles'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <S.DivLogin>

      <S.HeaderLogin>
        <h2>Welcome to Furniro</h2>
      </S.HeaderLogin>

      {error && {error}}

      <form>

        <S.InputContainer>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputContainer>

        <S.InputContainer>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputContainer>

        <S.DivBotoes>
          <S.Button onClick={handleSubmit}>
          
            Log In
          </S.Button>
  
          <S.Button onClick={handleGoogleSignIn} >Sign In with Google</S.Button>
        </S.DivBotoes>

      </form>


      <S.Footer>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </S.Footer>
    </S.DivLogin>
  );
};

export default Login;
