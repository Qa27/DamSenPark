import React, { useState } from "react";
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
import dropdown from "../assets/dropdown.svg";
import schedule from "../assets/schedule.svg";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  RefSelectProps,
  Row,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

export const Home = () => {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState("");
  const [openDD, setOpenDD] = useState(false);
  const [openSche, setOpenSche] = useState(false);
  const selectRef = React.useRef<RefSelectProps>(null);

  const handleDD = (selectValue: any) => {
    setSelectValue(selectValue);
    setOpenDD(false);
  };

  const handleSche = (selectValue: any) => {
    setSelectValue(selectValue);
    setOpenSche(false);
  };

  const DropdownBtn = () => {
    setOpenDD((prevOpen) => !prevOpen);
  };

  const ScheduleBtn = () => {
    setOpenSche((prevOpen) => !prevOpen);
  };

  const onSubmitBtn = () => {
    navigate("/pay");
  };

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
      <div className="H_form">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item className="H_form_combo" name="combo">
            <Select
              open={openDD}
              ref={selectRef}
              onChange={handleDD}
              placeholder="Các loại vé"
              suffixIcon={<></>}
            >
              <Option value="Vé trọn gói">Vé trọn gói</Option>
              <Option value="Vé vào cổng">Vé vào cổng</Option>
            </Select>
            <Button type="link" onClick={DropdownBtn}>
              <img className="H_dropdown" src={dropdown} alt="" />
            </Button>
          </Form.Item>
          <Row>
            <Col span={8}>
              <Form.Item className="H_form_col1" name="number">
                <Input placeholder="Số lượng vé" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item className="H_form_col2" name="date">
                <DatePicker
                  open={openSche}
                  onChange={handleSche}
                  suffixIcon={<></>}
                  placeholder="Ngày sử dụng"
                  format="DD/MM/YYYY"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Button type="link" onClick={ScheduleBtn}>
                <img className="H_schedule" src={schedule} alt="" />
              </Button>
            </Col>
          </Row>
          <Form.Item name="fullname">
            <Input className="H_form_input" placeholder="Họ và tên" />
          </Form.Item>
          <Form.Item name="phone">
            <Input className="H_form_input" placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item name="address">
            <Input className="H_form_input" placeholder="Địa chỉ email" />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={onSubmitBtn}
              className="H_submit"
              type="primary"
              htmlType="submit"
            >
              Đặt vé
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
