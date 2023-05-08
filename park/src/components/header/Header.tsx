import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";



export const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveLink(e.currentTarget.id);
  };

  return (
    <div className="h_box">
      <img src="img/logo.png" className="logo" alt=""></img>
      <div className="h_btn">
        <ul>
          <li>
            <NavLink to="/">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/event">
              Sự kiện
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Liên hệ
            </NavLink>
          </li>
          {/* <li>
            <span>sđt</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
