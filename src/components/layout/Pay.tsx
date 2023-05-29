import React, { useState } from "react";
import { Header } from "../header/Header";
import "./Pay.css";
import boxpay from "../assets/boxpay.png";
import bepay from "../assets/bepay.png";
import schedule from "../assets/schedule.svg";
import { Button, Col, DatePicker, Form, Input, InputNumber, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore/lite";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Dayjs } from "dayjs";
import { toast } from "react-toastify";
import { db } from "../../Server/firebase";

interface Ticket {
  id: string;
  combo: string;
  number: number;
  date: Timestamp;
  fullname: string;
  phone: number;
  address: string;
}

export const Pay = () => {
  const navigate = useNavigate();
  const [openSche, setOpenSche] = useState(false);
  const [numCard, setNumCard] = useState<number | null>(1);
  const [nameCard, setNameCard] = useState("");
  const [expirationDate, setExpirationDate] = useState<Dayjs | null>(null);
  const [veriNum, setVeriNum] = useState<number | null>(1);

  const formData = useSelector(
    (state: RootState) => state.ticket.formData
  ) as Ticket;

  // console.log(formData)
  // console.log(formData.combo)

  const formattedNumber = (num: any) => {
    return num.toLocaleString("vi-VN");
  };

  const handleSche = (expirationDate: any) => {
    setExpirationDate(expirationDate);
    setOpenSche(false);
  };

  const ScheduleBtn = () => {
    setOpenSche((prevOpen) => !prevOpen);
  };

  const handleNumCardLimit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    let num = parseInt(value);
    if (isNaN(num)) {
      num = 0;
    }
    if (value.length >= 16 && e.key !== "Backspace") {
      e.preventDefault();
    } else {
      setNumCard(num);
    }
  };

  const handleVeriNumLimit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if (value.length >= 3 && e.key !== "Backspace") {
      e.preventDefault();
    } else {
      setVeriNum(parseInt(value));
    }
  };

  const onSubmitBtn = async () => {
    if (
      numCard &&
      nameCard &&
      expirationDate &&
      veriNum &&
      formData.combo &&
      formData.number &&
      formData.date &&
      formData.fullname &&
      formData.phone &&
      formData.address
    ) {
      await addDoc(collection(db, "ticket"), {
        numCard: numCard,
        nameCard: nameCard,
        expirationDate: Timestamp.fromDate(expirationDate.toDate()),
        veriNum: veriNum,
        combo: formData.combo,
        numberTicket: formData.number,
        fullName: formData.fullname,
        phone: formData.phone,
        address: formData.address,
      });
      // navigate("/pay/payment_success");
      console.log("Thành công");
    } else {
      toast.error("Please complete all information!");
    }
  };

  console.log(numCard);
  console.log(veriNum);

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
          autoComplete="off"
          // onFinish={onSubmitBtn}
        >
          <div className="P_form1">
            <Row className="P_col">
              <Col span={8}>
                <Form.Item
                  className="P_form_col1"
                  label="Số tiền thanh toán"
                  name="combo"
                >
                  <Input
                    placeholder="Tổng tiền"
                    disabled
                    value={
                      formData.combo === "Vé trọn gói"
                        ? `${formattedNumber(450000 * formData.number)} vnđ`
                        : formData.combo === "Vé vào cổng"
                        ? `${formattedNumber(80000 * formData.number)} vnđ`
                        : ""
                    }
                  />
                  <span></span>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  className="P_form_col2"
                  label="Số lượng vé"
                  name="number"
                >
                  <Input
                    placeholder="Số lượng vé"
                    disabled
                    value={formData.number}
                  />
                  <span className="P_col2_span">vé</span>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  className="P_form_col3"
                  label="Ngày sử dụng"
                  name="date"
                >
                  <Input
                    placeholder="Ngày sử dụng"
                    disabled
                    value={formData.date.toDate?.().toLocaleDateString()}
                  />
                  <span></span>
                </Form.Item>
              </Col>
            </Row>
            <div className="P_form_input">
              <Form.Item
                className="P_form_text1"
                label="Thông tin liên hệ"
                name="fullname"
              >
                <Input
                  placeholder="Họ tên"
                  disabled
                  value={formData.fullname}
                />
                <span></span>
              </Form.Item>
              <Form.Item
                className="P_form_text2"
                label="Điện thoại"
                name="phone"
              >
                <Input
                  placeholder="0123456789"
                  disabled
                  value={formData.phone}
                />
                <span></span>
              </Form.Item>
              <Form.Item className="P_form_text1" label="Email" name="email">
                <Input
                  type="email"
                  placeholder="Email"
                  disabled
                  value={formData.address}
                />
                <span></span>
              </Form.Item>
            </div>
          </div>
          <div className="P_form2">
            <Form.Item
              className="P_form_text1"
              label="Số thẻ"
              name="cardnumber"
            >
              <InputNumber
                className="P_numcard"
                onKeyDown={handleNumCardLimit}
                placeholder="1111 1111 1111 1111"
                value={numCard}
              />
            </Form.Item>
            <Form.Item className="P_form_text1" label="Họ tên" name="fullname">
              <Input
                placeholder="Họ tên chủ thẻ"
                value={nameCard}
                onChange={(e) => {
                  setNameCard(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              className="P_form_text3"
              label="Ngày hết hạn"
              name="date"
            >
              <DatePicker
                open={openSche}
                onChange={handleSche}
                suffixIcon={<></>}
                placeholder="Ngày hết hạn"
                format="DD/MM/YYYY"
                value={expirationDate}
              />
              <Button type="link" onClick={ScheduleBtn}>
                <img className="P_schedule" src={schedule} alt="" />
              </Button>
            </Form.Item>
            <Form.Item className="P_form_text4" label="CVV/CVC" name="email">
              <InputNumber
               className="P_verium"
                onKeyDown={handleVeriNumLimit}
                placeholder="000"
                value={veriNum}
              />
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              onClick={onSubmitBtn}
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
