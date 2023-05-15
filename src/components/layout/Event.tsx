import React from "react";
import { Header } from "../header/Header";
import "./Event.css";
import daytrai from "../assets/daytrai.png";
import dayphai from "../assets/dayphai.png";
import bg3 from "../assets/bg3.png";
import detail from "../assets/detail.png";
import lich from "../assets/lich.svg";
import btntrai from "../assets/btntrai.svg";
import btnphai from "../assets/btnphai.svg";
import { Button } from "antd";

export const Event = () => {
  return (
    <div>
      <Header />
      <img className="daytrai" src={daytrai} alt="" />
      <img className="dayphai" src={dayphai} alt="" />
      <img className="bg3" src={bg3} alt="" />
      <span className="E_title">Sự kiện nổi bật</span>
      <div className="E_box_all">
        <div className="E_box">
          <img className="detail" src={detail} alt="" />
          <div className="E_box_text">
            <span className="E_box_sk"> Sự kiện 1</span>
            <span className="E_box_ds"> Đầm sen Park</span>
            <span className="E_box_time">
              <img src={lich} alt="" />
              <span> 30/05/2021 - 01/06/2021</span>
            </span>
            <span className="E_box_m"> 25.000 VNĐ</span>
            <a href="/event/detail">
              <Button>Xem chi tiết</Button>
            </a>
          </div>
        </div>
        <div className="E_box">
          <img className="detail" src={detail} alt="" />
          <div className="E_box_text">
            <span className="E_box_sk"> Sự kiện 1</span>
            <span className="E_box_ds"> Đầm sen Park</span>
            <span className="E_box_time">
              <img src={lich} alt="" />
              <span> 30/05/2021 - 01/06/2021</span>
            </span>
            <span className="E_box_m"> 25.000 VNĐ</span>
            <a href="/event/detail">
              <Button>Xem chi tiết</Button>
            </a>
          </div>
        </div>
        <div className="E_box">
          <img className="detail" src={detail} alt="" />
          <div className="E_box_text">
            <span className="E_box_sk"> Sự kiện 3</span>
            <span className="E_box_ds"> Đầm sen Park</span>
            <span className="E_box_time">
              <img src={lich} alt="" />
              <span> 30/05/2021 - 01/06/2021</span>
            </span>
            <span className="E_box_m"> 50.000 VNĐ</span>
            <a href="/event/detail">
              <Button>Xem chi tiết</Button>
            </a>
          </div>
        </div>
        <div className="E_box">
          <img className="detail" src={detail} alt="" />
          <div className="E_box_text">
            <span className="E_box_sk"> Sự kiện 4</span>
            <span className="E_box_ds"> Đầm sen Park</span>
            <span className="E_box_time">
              <img src={lich} alt="" />
              <span> 30/05/2021 - 01/06/2021</span>
            </span>
            <span className="E_box_m"> 55.000 VNĐ</span>
            <a href="/event/detail">
              <Button>Xem chi tiết</Button>
            </a>
          </div>
        </div>
      </div>
      <Button>
        <img className="btntrai" src={btntrai} alt="" />
      </Button>
      <Button>
        <img className="btnphai" src={btnphai} alt="" />
      </Button>
    </div>
  );
};
