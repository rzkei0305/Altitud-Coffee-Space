import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo with name.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBasket = () => {
    setMenuOpen(false);
    navigate("/basket");
  };

  const handleLogin = () => {
    setMenuOpen(false);
    navigate("/login");
  };

  const handleScrollToFeatured = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById("featured-section");
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById("featured-section");
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      {/* Center: Navigation Links (Desktop) */}
      <nav className="navbar-center">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          HOME
        </NavLink>
        <a href="#featured-section" onClick={handleScrollToFeatured}>
          FEATURED
        </a>
        <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>
          MENU
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          ABOUT US
        </NavLink>
      </nav>

      {/* Right: Icons */}
      <div className="navbar-right">
        <FiUser className="nav-icon" onClick={handleLogin} />
        <FiShoppingBag className="nav-icon" onClick={handleBasket} />

        {/* Burger menu icon (mobile) */}
        <div className="burger-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </NavLink>
          <a href="#featured-section" onClick={handleScrollToFeatured}>
            FEATURED
          </a>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)}>
            MENU
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;
