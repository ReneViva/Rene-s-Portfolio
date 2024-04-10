import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../../assets/MiniNavbar.css";
export default function aboutMeLayout() {
  return (
    <div>
      <header>
      <nav className="mini-navbar-container">
        <ul className="mini-nav-links">
          <li>
            <NavLink
            end
              className={({ isActive }) =>
                isActive ? "active-nav-link" : null
              }
              to={""}
            >
              Overview
            </NavLink>
          </li>
          <li className="center">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav-link" : null
              }
              to={"education"}
            >
              Education
            </NavLink>
          </li>
          <li className="upward">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav-link" : null
              }
              to={"programming"}
            >
              Programming
            </NavLink>
          </li>
        </ul>
      </nav>
      </header>

      <Outlet />
    </div>
  );
}
