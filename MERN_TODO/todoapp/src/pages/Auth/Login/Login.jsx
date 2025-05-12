import React, { useState } from "react";
import "../AuthStyles.css";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../../Services/AuthServices";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../../Utils/ErrorMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const res = await AuthServices.loginUser(data);
      toast.success(res.data.message);
      localStorage.setItem("todoapp", JSON.stringify(res.data));
      navigate("/home");
    } catch (err) {
      toast.error(getErrorMessage(err));
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={loginHandler}>
        <i className="fa-solid fa-circle-user"></i>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Login</button>
        <p className="text-center">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
