import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthServices from "../../../Services/AuthServices";
import { getErrorMessage } from "../../../Utils/ErrorMessage";
import "../AuthStyles.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthServices.registerUser({ username, email, password });
      toast.success(res.data.message);
      navigate("/login");
    } catch (err) {
      toast.error(getErrorMessage(err));
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={registerHandler}>
        <i className="fa-solid fa-circle-user"></i>
        <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="login-btn">Register</button>
        <p className="text-center mt-3">Already a user? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;