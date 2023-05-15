import React from "react";
import { Header } from "../header/Header";
import "./Home.css";
import logoDS from "../assets/logoDS.png";
import i021 from "../assets/021.png";
import be4 from "../assets/4be.png";
import i031 from "../assets/031.png";
import be2 from "../assets/be2.png";
import bg2 from "../assets/bg2.png";
import boxve from "../assets/boxve.png";
import star from "../assets/star.png";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="H_DS">
        <img className="logoDS" src={logoDS} alt="" />
        <span>
          Đầm sen <span>Park</span>
        </span>
      </div>
      <img className="i021" src={i021} alt="" />
      <img className="be4" src={be4} alt="" />
      <img className="i031" src={i031} alt="" />
      <img className="be2" src={be2} alt="" />
      <img className="bg2" src={bg2} alt="" />
      <div>
        <img className="boxve" src={boxve} alt="" />
        <div className="box_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere
          ex facilisis. Suspendisse iaculis libero lobortis condimentum gravida.
          Aenean auctor iaculis risus, lobortis molestie lectus consequat a.
        </div>
        <div className="all_star">
          <ul>
            <li>
              <img className="star" src={star} alt="" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
            <li>
              <img className="star" src={star} alt="" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
            <li>
              <img className="star" src={star} alt="" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
            <li>
              <img className="star" src={star} alt="" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
