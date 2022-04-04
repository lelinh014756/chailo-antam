import React from "react";
import { useState } from "react";
import { phoneNumber } from "../../page/contact";
import { icons } from "../../../assets/icons/icons-svg";
import imgLogo from "../../../assets/images/logo-chailo.png";
import "./Header.scss";

export const Header = () => {
  /* Logic scroll show background header */
  const [sticky, setSticky] = useState("");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 0) {
      setSticky(" sticky");
    } else {
      setSticky("");
    }
  });

  /* Logic toggle SearchBar */
  const [open, setOpen] = useState("");

  const HandleSearchBar = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 740) {
      if (open === "") {
        setOpen(" open");
      } else {
        setOpen("");
      }
    }
  };

  return (
    <header className={"header" + sticky}>
      <div className="header__logo">
        <img src={imgLogo} />
      </div>

      <div className="header-wrapper">
        {/* <div className={"header__search" + open}>
          <input
            type="text"
            className="header__search-control"
            placeholder="Search..."
          />
          <i className="header__search-icon" onClick={HandleSearchBar}>
            {icons.iconSearch}
          </i>
        </div> */}
        <a href={"tel:" + phoneNumber} className="header__contact">
          <i className="header__contact-icon">{icons.iconPhone}</i>
          <p className="header__contact-number">{phoneNumber}</p>
        </a>
      </div>
    </header>
  );
};
