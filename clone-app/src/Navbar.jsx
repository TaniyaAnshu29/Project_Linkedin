import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/"); 
  };
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="nav-left">
          <div className="logo">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for jobs, skills & companies..." />
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-item" onClick={() => navigate("/home")}>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </div>
          <div className="nav-item" onClick={() => navigate("/my-network")}>
            <i className="fa-solid fa-user-group"></i>
            <span>My Network</span>
          </div>
          <div className="nav-item" onClick={() => navigate("/jobs")}>
            <i className="fa-solid fa-suitcase"></i>
            <span>Jobs</span>
          </div>
          <div className="nav-item">
            <i className="fa-solid fa-message"></i>
            <span>Messaging</span>
          </div>
          <div className="nav-item">
            <i className="fa-solid fa-bell"></i>
            <span>Notifications</span>
          </div>
          <div className="nav-item" onClick={() => navigate("/profile")}>
            <i className="fa-solid fa-user"></i>
            <span>Me</span>
          </div>
          <div className="nav-item">
            <i className="fa-solid fa-braille"></i>
            <span>Work</span>
          </div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;