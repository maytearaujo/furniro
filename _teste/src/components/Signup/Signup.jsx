import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

import * as S from './SignupStyles'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <S.DivLogin>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase/ React Auth Signup</h2>

        {error && { error }}

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
              {/* Log In <img src={arrowImg} alt="->" /> */}
              Sign up
            </S.Button>
          </S.DivBotoes>
        </form>
      </div>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </S.DivLogin>
  );
};

export default Signup;
