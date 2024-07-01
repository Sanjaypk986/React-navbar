import React, { useState } from "react";
import { MenuData } from "./menuData";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleIconClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header>
      <nav className="navbarItems">
        <span className="logo">
          React <i className="fab fa-react"></i>
        </span>
        <div className="nav-menubar">
          <i
            className={`fas ${toggleMenu ? "fa-times" : "fa-bars"}`}
            onClick={handleIconClick}
          ></i>
        </div>
        <ul className={
            toggleMenu ? 'nav-menu active': 'nav-menu'
        }>
          {MenuData.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={item.csName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
