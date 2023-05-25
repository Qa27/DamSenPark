import React, { useState } from "react";
import "./Contact.css";
import { Header } from "../header/Header";
import boxdetail from "../assets/boxdetail.png";
import boxdetail2 from "../assets/boxdetail2.png";
import betrai from "../assets/betrai.png";
import addr from "../assets/addr.png";
import mail from "../assets/mail.png";
import telephone from "../assets/telephone.png";
import { Button, Col, Form, Input, Row } from "antd";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, ref, push } from "firebase/database";

const { TextArea } = Input;

export const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const { name, email, phone, address, description } = contact;

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;
    console.log(name, value);
    setContact({ ...contact, [name]: value });
  };

  const onSubmitBtn = async (e: any) => {
    e.preventDefault();
    if (!name || !email || !phone || !address || !description) {
      toast.error("Hãy nhập đầy đủ các ô");
    } else {
      const db = getDatabase();
      const contactsRef = ref(db, "contacts");
      await push(contactsRef, contact);
      setContact({
        name: "",
        email: "",
        phone: "",
        address: "",
        description: "",
      });
      toast.success("Thư của bạn đã được gửi");
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" />
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
            autoComplete="off"
          >
            <Row>
              <Col span={12} className="C_col1">
                <Form.Item>
                  <Input
                    name="name"
                    placeholder="Tên"
                    value={name}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    name="phone"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </Col>
              <Col span={12} className="C_col2">
                <Form.Item>
                  <Input
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    name="address"
                    placeholder="Địa chỉ"
                    value={address}
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item className="C_col_center">
              <TextArea
                name="description"
                placeholder="Lời nhắn"
                rows={4}
                value={description}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={onSubmitBtn}
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
          <img className="C_address" src={addr} alt="" />
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
