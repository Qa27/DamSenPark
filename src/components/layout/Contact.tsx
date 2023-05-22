import React from "react";
import "./Contact.css";
import { Header } from "../header/Header";
import boxdetail from "../assets/boxdetail.png";
import boxdetail2 from "../assets/boxdetail2.png";
import betrai from "../assets/betrai.png";
import address from "../assets/address.png";
import mail from "../assets/mail.png";
import telephone from "../assets/telephone.png";
import { Button, Col, Form, Input, Row } from "antd";

const { TextArea } = Input;

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
        <div className="C_form">
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
              <TextArea placeholder="Lời nhắn" rows={4} />
            </Form.Item>
            <Form.Item>
              <Button
                // onClick={onSubmitBtn}
                className="C_submit"
                type="primary"
                htmlType="submit"
              >
                Gửi liên hệ
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <img className="C_betrai" src={betrai} alt="" />
      <div className="C_box">
        <div>
          <img className="C_box_child" src={boxdetail2} alt="" />
          <img className="C_address" src={address} alt="" />
          <span className="C_add_text">Địa chỉ:</span>
          <span className="C_add_text2">
            86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
          </span>
        </div>
        <div>
          <img className="C_box_child" src={boxdetail2} alt="" />
          <img className="C_address C_mail" src={mail} alt="" />
          <span className="C_add_text C_mail_text">Email:</span>
          <span className="C_add_text2 C_mail_text2">
            investigate@your-site.com
          </span>
        </div>
        <div>
          <img className="C_box_child" src={boxdetail2} alt="" />
          <img className="C_address C_telephone" src={telephone} alt="" />
          <span className="C_add_text C_telephone_text">Điện thoại:</span>
          <span className="C_add_text2 C_telephone_text2">+84 145 689 798</span>
        </div>
      </div>
    </div>
  );
};
