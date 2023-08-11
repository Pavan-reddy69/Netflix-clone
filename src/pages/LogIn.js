import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    
    if (userName && password) {
      localStorage.setItem('userName', userName);
      localStorage.setItem('password', password);

      // For now, let's navigate to the home page on successful login
      navigate('/home');
    } else {
      // Alert the user if details are not filled
      alert('Please enter both User Name and password.');
    }
  };

  const handleuserNameChange = (event) => {
    setUserName(event.target.value);
   
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
   
  };

  return (
    <div className="login-container">
      <img className="logo" src="https://bit.ly/2VdIFUK" alt="Netflix Logo" />

      <div className="login">
        <h1 className="login__title">Sign In</h1>
        <div className="login__group">
          <input
            className="login__group__input"
            type="text"
            required={true}
            value={userName}
            onChange={handleuserNameChange}
          />
          <label className="login__group__label">User Name</label>
        </div>
        <div className="login__group">
          <input
            className="login__group__input"
            type="password"
            required={true}
            value={password}
            onChange={handlePasswordChange}
          />
          <label className="login__group__label">Password</label>
        </div>
        <button className="login__sign-in" type="button" onClick={handleLogin} >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
