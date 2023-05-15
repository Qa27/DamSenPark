import React from "react";
import "./Contact.css";
import { Header } from "../header/Header";
import boxdetail from "../assets/boxdetail.png";
import boxdetail2 from "../assets/boxdetail2.png";
import betrai from "../assets/betrai.png";
import { Col, Form, Input, Row } from "antd";

export const Contact = () => {
  return (
    <div>
      <Header />
      <span className="C_title">Liên hệ</span>
      <div>
        <img className="C_boxdetail" src={boxdetail} alt="" />
        <span className="C_box_title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere
          ex facilisis.
        </span>
        <div className="form">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row>
              <Col span={12} className="C_col1">
                <Form.Item name="username">
                  <Input placeholder="Tên" />
                </Form.Item>
                <Form.Item name="phone">
                  <Input placeholder="Số điện thoại" />
                </Form.Item>
              </Col>
              <Col span={12} className="C_col2">
                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="address">
                  <Input placeholder="Địa chỉ" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="description" className="C_col_center">
              <Input placeholder="Lời nhắn" />
            </Form.Item>
          </Form>
        </div>
      </div>
      <img className="C_betrai" src={betrai} alt="" />
      <div className="C_box">
        <div>
          <img className="C_box2" src={boxdetail2} alt="" />
        </div>
        <div>
          <img className="C_box2" src={boxdetail2} alt="" />
        </div>
        <div>
          <img className="C_box2" src={boxdetail2} alt="" />
        </div>
      </div>
    </div>
  );
};
