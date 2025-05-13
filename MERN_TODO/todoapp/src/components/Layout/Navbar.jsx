import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Navbar.css";

const Navbar = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("todoapp");
    toast.success("Logout successful");
    navigate("/login");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("todoapp"));
    if (userData?.user?.username) {
      setUsername(userData.user.username);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <i className="fa-solid fa-user-tie" /> &nbsp;
        <span>Welcome {username}!</span>
        </div>
      <ul className="navbar-links">
        <li>
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/todoList">
            My Todo List
          </Link>
        </li>
        <li>
          <button className="logout-btn" onClick={logoutHandler}>
            <i className="fa-solid fa-power-off" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;