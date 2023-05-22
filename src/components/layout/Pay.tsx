import React from "react";
import { Header } from "../header/Header";
import "./Pay.css";
import boxpay from "../assets/boxpay.png";
import bepay from "../assets/bepay.png";
import { Button, Col, DatePicker, Form, Input, Row } from "antd";

export const Pay = () => {
  return (
    <div>
      <Header />
      <span className="P_title">Thanh toán</span>
      <img className="bepay" src={bepay} alt="" />

      <img className="boxpay" src={boxpay} alt="" />
      <div>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="P_form1">
            <Row className="P_col">
              <Col span={8}>
                <Form.Item
                  className="P_form_col1"
                  label="Số tiền thanh toán"
                  name="amount"
                >
                  <Input placeholder="Tổng tiền" disabled />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  className="P_form_col2"
                  label="Số lượng vé"
                  name="number"
                >
                  <Input placeholder="Số lượng vé" disabled />
                  <span className="P_col2_span">vé</span>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  className="P_form_col3"
                  label="Ngày sử dụng"
                  name="number"
                >
                  <Input placeholder="Ngày sử dụng" disabled />
                </Form.Item>
              </Col>
            </Row>
            <div className="P_form_input">
              <Form.Item
                className="P_form_text1"
                label="Thông tin liên hệ"
                name="fullname"
              >
                <Input placeholder="Họ tên" />
              </Form.Item>
              <Form.Item
                className="P_form_text2"
                label="Điện thoại"
                name="number"
              >
                <Input placeholder="0123456789" />
              </Form.Item>
              <Form.Item className="P_form_text1" label="Email" name="email">
                <Input type="email" placeholder="Email" />
              </Form.Item>
            </div>
          </div>
          <div className="P_form2">
            <Form.Item
              className="P_form_text1"
              label="Số thẻ"
              name="cardnumber"
            >
              <Input placeholder="1111 1111 1111 1111" />
            </Form.Item>
            <Form.Item className="P_form_text1" label="Họ tên" name="fullname">
              <Input placeholder="Họ tên chủ thẻ" />
            </Form.Item>
            <Form.Item
              className="P_form_text3"
              label="Ngày hết hạn"
              name="date"
            >
              <DatePicker
                // open={openSche}
                // onChange={handleSche}
                suffixIcon={<></>}
                placeholder="Ngày hết hạn"
                format="DD/MM/YYYY"
              />
              <Button type="link">
                {/* <img className="H_schedule" src={schedule} alt="" /> */}
              </Button>
            </Form.Item>
            <Form.Item className="P_form_text4" label="CVV/CVC" name="email">
              <Input placeholder="000" />
            </Form.Item>
          </div>
          <Form.Item>
            <Button
            //   onClick={onSubmitBtn}
              className="P_submit"
              type="primary"
              htmlType="submit"
            >
              Thanh toán
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
