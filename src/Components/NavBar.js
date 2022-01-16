import React from "react";
import avatar from "../img/avatar.jpg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolios"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/blogs"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Experiences
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <footer className="footer">
          <p>Graduating @2023</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
