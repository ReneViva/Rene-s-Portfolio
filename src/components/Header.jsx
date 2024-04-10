import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/HeaderAndFooter.css";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

export default function Header() {
  const [isNavChecked, setIsNavChecked] = useState(false);

  const toggleNavLinks = () => {
    setIsNavChecked((prevState) => !prevState);

  };

  // Define the dynamic styles for .nav-links
  const navLinksStyle = {
    height: isNavChecked ? "calc(40vh - 50px)" : "0px",
    borderRadius: isNavChecked ? "0 0 0 50px" : "0",
    overflowY: isNavChecked ? "auto" : "hidden"
  };

  return (
    <div className="nav">
            
      <input
        type="checkbox"
        id="nav-check"
        checked={isNavChecked}
        onChange={toggleNavLinks}
      />
      <div className="nav-header">
        <Link to={"/"} className="nav-title">
          Rene V.
        </Link>
      </div>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>


      <div className="nav-links" >
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav-link" : null)}
          to={""}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav-link" : null)}
          to={"about"}
        >
          About me{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav-link" : null)}
          to={"services"}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav-link" : null)}
          to={"experience"}
        >
          Experiences{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav-link" : null)}
          to={"contact"}
        >
          Contact
        </NavLink>
      </div>
     
    </div>
  );
}
