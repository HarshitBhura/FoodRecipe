import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (userName === "harshit.jain@npci.org.in" && password === "Mobility@12345") {
      nav("/recipe");
    } else {
      alert("E-mail Or Password Does not Match");
    }
  };

  return (
    <div className="login">
      <h1>Welcome to Food Insider</h1>
      <form>
        <input type="email" placeholder="email" onChange={userNameHandler} />
        <input
          type="password"
          placeholder="password"
          onChange={passwordHandler}
        />
        <button type="button" onClick={onsubmitHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
