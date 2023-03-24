import React, { useState } from "react";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter All Data!",
      });
    } else {
      window.location += "home";
    }
  };
  return (
    <form onSubmit={submitForm}>
      <h3 className="mb-3">Login</h3>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="Email"
          onChange={(target) => setEmail(target.value)}
          value={email}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          onChange={(target) => setPassword(target.value)}
          value={password}
        />
      </div>

      <div className="col-auto">
        <button type="submit" className="loginBtn btn btn-primary mb-3">
          LOGIN
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
