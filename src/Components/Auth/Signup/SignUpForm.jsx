import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter All Data!",
      });
    } else {
      navigate("/");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form>
      <h3 className="mb-3">Registration</h3>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Name"
          onChange={({ target }) => setName(target.value)}
          value={name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)}
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
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
      </div>

      <div className="col-auto">
        <button
          onClick={submitForm}
          type="submit"
          className="loginBtn btn btn-primary mb-3"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
