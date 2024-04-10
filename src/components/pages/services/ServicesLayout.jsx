import React from "react";
import "../../../assets/MiniNavbar.css";
import { Outlet, NavLink } from "react-router-dom";
import "../../../assets/HeaderAndFooter.css";
export default function servicesLayout() {
  //https://www.codingnepalweb.com/Hover-Animation-in-HTML-CSS/
  return (
    <div>
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
                Web-Developing
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : null
                }
                to={"math"}
              >
                Math
              </NavLink>
            </li>
            <li className="center">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : null
                }
                to={"design"}
              >
                Design
              </NavLink>
            </li>
            <li className="upward">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : null
                }
                to={"more"}
              >
                More services
              </NavLink>
            </li>
          </ul>
        </nav></header>
      </div>


      <Outlet />
    </div>
  );
}
