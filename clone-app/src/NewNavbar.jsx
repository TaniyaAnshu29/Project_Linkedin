import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewNavbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/"); 
  };
  return (
    <nav className="navbar-fixed"> 
      <div className="nav-wrapper-fixed">
        <div className="nav-left-fixed">
          <div className="logo-fixed">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="search-container">
            <div className="search-bar-1">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Title, skills & company" />
            </div>
            <div className="search-bar-2">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="City, state or zip code" />
            </div>
          </div>
        </div>
        <div className="nav-right-fixed">
          <div className="nav-item-fixed" onClick={() => navigate("/home")}>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </div>
          <div className="nav-item-fixed" onClick={() => navigate("/my-network")}>
            <i className="fa-solid fa-user-group"></i>
            <span>My Network</span>
          </div>
          <div className="nav-item-fixed" onClick={() => navigate("/jobs")}>
            <i className="fa-solid fa-suitcase"></i>
            <span>Jobs</span>
          </div>
          <div className="nav-item-fixed">
            <i className="fa-solid fa-message"></i>
            <span>Messaging</span>
          </div>
          <div className="nav-item-fixed">
            <i className="fa-solid fa-bell"></i>
            <span>Notifications</span>
          </div>
          <div className="nav-item-fixed" onClick={() => navigate("/profile")}>
            <i className="fa-solid fa-user"></i>
            <span>Me</span>
          </div>
          <div className="nav-item-fixed">
            <i className="fa-solid fa-braille"></i>
            <span>Work</span>
          </div>
          <button className="logout-btn-fixed" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;