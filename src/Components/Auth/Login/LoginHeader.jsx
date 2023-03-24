import React from "react";
import "./LoginHeader.css";
import { Link } from "react-router-dom";
import Logo from "../../Utility/Logo";
const LoginHeader = (props) => {
  return (
    <div className="loginHeader">
      <Logo />
      <div className="buttons">
        {props.log === "login" ? (
          <Link to="/register" className="btn bg-primary text-light">
            Sign Up
          </Link>
        ) : props.log === "signup" ? (
          <Link to="/" className="btn bg-primary text-light">
            Login
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LoginHeader;
