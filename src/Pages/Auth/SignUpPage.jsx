import React from "react";
import LoginHeader from "../../Components/Auth/Login/LoginHeader";
import SignUpForm from "../../Components/Auth/Signup/SignUpForm";
import signUp from "./signup.svg";

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <LoginHeader log="signup" />
      <div className="content">
        <div className="img">
          <img src={signUp} alt="" />
        </div>
        <div className="form">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
