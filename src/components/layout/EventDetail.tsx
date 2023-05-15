import React from "react";
import { Header } from "../header/Header";
import "./EventDetail.css";
import daytrai from "../assets/daytrai.png";
import dayphai from "../assets/dayphai.png";
import bg4 from "../assets/bg4.png";
import boxdetail from "../assets/boxdetail.png";
import duquay from "../assets/duquay.png";
import detail from "../assets/detail.png";
import lich from "../assets/lich.svg";
import { Col, Row } from "antd";

export const EventDetail = () => {
  return (
    <div>
      <Header />
      <img className="daytrai" src={daytrai} alt="" />
      <img className="dayphai" src={dayphai} alt="" />
      <img className="bg4" src={bg4} alt="" />
      <span className="ED_title">Sự kiện 1</span>
      <div>
        <img className="boxdetail" src={boxdetail} alt="" />
        <img className="duquay" src={duquay} alt="" />
        <Row>
          <Col span={6}>
            <div className="ED_box">
              <span className="ED_box_time">
                <img src={lich} alt="" />
                <span> 30/05/2021 - 01/06/2021</span>
              </span>
              <span className="ED_box_ds"> Đầm sen Park</span>
              <span className="ED_box_m"> 25.000 VNĐ</span>
            </div>
          </Col>
          <Col span={6}>
            <span className="ED_box_text">
              <span>Lorem Ipsum</span> is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic sdsd typesetting, remaining cssa essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, of Lorem Ipsum.
            </span>
          </Col>
          <Col span={6}>
            <div className="ED_box_col2">
              <img src={detail} alt="" />
              <span>
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old. words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature,{" "}
              </span>
            </div>
          </Col>
          <Col span={6}>
            <div className="ED_box_col3">
              <span>
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old. words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature,{" "}
              </span>
              <img src={detail} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
