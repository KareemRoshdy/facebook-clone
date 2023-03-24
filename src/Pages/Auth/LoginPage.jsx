import React from "react";

import welcome from "./welcome.svg";
import "./LoginPage.css";
import LoginHeader from "../../Components/Auth/Login/LoginHeader";
import LoginForm from "../../Components/Auth/Login/LoginForm";
const LoginPage = () => {
  return (
    <div className="loginPage">
      <LoginHeader log="login" />
      <div className="content">
        <div className="img">
          <img src={welcome} alt="" />
        </div>
        <div className="form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
