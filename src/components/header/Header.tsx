import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Dt from "../assets/Dt.svg";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="h_box">
      <img src={logo} className="logo" alt=""></img>
      <div className="h_btn">
        <ul>
          <li>
            <NavLink to="/" className="nav_link">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/event" className="nav_link">
              Sự kiện
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav_link">
              Liên hệ
            </NavLink>
          </li>
          <li>
            <span className="sdt">
              <img src={Dt} alt="" />
              <span>0123456789</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
