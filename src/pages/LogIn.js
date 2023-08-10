import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()

    const handleLogin=()=>{
        navigate('/home');
    }
  return (
    <div className="login-container">
     
  <img class="logo" src="https://bit.ly/2VdIFUK" alt="Netflix Logo" />

      <div class="login">
        <h1 class="login__title">Sign In</h1>
        <div class="login__group">
          <input class="login__group__input" type="text" required="true" />
          <label class="login__group__label">Email or phone number</label>
        </div>
        <div class="login__group">
          <input class="login__group__input" type="password" required="true" />
          <label class="login__group__label">Password</label>
        </div>
        <button class="login__sign-in" type="button" onClick={handleLogin}>Sign In</button>
        <div class="login__secondary-cta">
          <a class="login__secondary-cta__text" >Remember me</a>
          <a class="login__secondary-cta__text login__secondary-cta__text--need-help" >Need help?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
