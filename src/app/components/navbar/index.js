import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { listItemNavbar } from "./data/list-item-navbar";

import "./Navbar.scss";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {listItemNavbar.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className="navbar__item"
            activeClassName={item.link === pathname ? "active" : ""}
          >
            <i className="navbar__item-icon">{item.icon}</i>
            <p className="navbar__item-name">{item.itemName}</p>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
