import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../assets/images/todoimage.png";
import "./Landing.css";

const Landing = () => (
  <div className="hero">
    <div className="intro-text">
      <h1>Organize work and life<br/><span className="tagline2">finally.</span></h1>
      <p>Start managing your tasks effectively today!</p>
      <div>
        <Link className="btn red" to="/register">Register Now!</Link>
        <Link className="btn blue" to="/login">Login</Link>
      </div>
    </div>
    <img src={Hero} alt="Todo Illustration" />
  </div>
);

export default Landing;