import React, { useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../assets/icons/icons-svg";
import "../common/styles/listGroup.scss";
import logo from '../../../assets/images/logo-chailo.png'
const menuList = [
  {
    name: "Sản phẩm",
    icon: icons.iconProduct,
    pathLink: "/admin/tat-ca-san-pham",
  },
  {
    name: "Đơn hàng",
    icon: icons.iconOder,
    pathLink: "/admin/don-hang",
  },
];

const ListGroup = () => {
  const linkBrowserName = window.location.pathname;


  return (
    <section className="menu">
      <a className="menu__logo d-flex justify-content-center">
        <img src={logo} alt="" />
      </a>
      {/* <div className="menu__avatar">
        <img src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" alt="" />
        <h2>Admin</h2>
      </div> */}
      <ul className="menu__list">
        {menuList.map((item, index) => (
          <li>
            <Link
              key={index}
              to={item.pathLink}
              className={"menu__item " + (linkBrowserName.includes(item.pathLink) ? "active" : "")}
            >
              <i className="menu__item-icon">{item.icon}</i>
              <p className="menu__item-name">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListGroup;
