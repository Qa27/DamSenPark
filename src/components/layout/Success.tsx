import { Header } from "../header/Header";
import "./Success.css";
import betraiqr from "../assets/betraiqr.png";
import tick from "../assets/tick.png";
import btntrai from "../assets/btntrai.svg";
import btnphai from "../assets/btnphai.svg";
import { Button, Pagination, QRCode } from "antd";

export const Success = () => {
  const downloadQRCode = () => {
    const canvas = document
      .getElementById("myqrcode")
      ?.querySelector<HTMLCanvasElement>("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div>
      <Header />
      <span className="S_title">Thanh toán thành công</span>
      <img className="S_betraiqr" src={betraiqr} alt="" />
      <div className="S_box">
        <div className="S_dash">
          <Button type="link">
            <img className="S_btntrai" src={btntrai} alt="" />
          </Button>
          <Button type="link">
            <img className="S_btnphai" src={btnphai} alt="" />
          </Button>
          <div className="S_box_all">
            <div id="myqrcode" className="S_box_qr">
              <QRCode value="Qa" />
              <span className="S_qr_count">Alt20210501</span>
              <span className="S_qr_title">Vé cổng</span>
              <span className="S_qr_title S_qr__">---</span>
              <span className="S_qr_date">Ngày sử dụng: 31/05/2021</span>
              <img className="S_tick" src={tick} alt="" />
            </div>
            <div id="myqrcode" className="S_box_qr">
              <QRCode value="Qa" />
              <span className="S_qr_count">Alt20210501</span>
              <span className="S_qr_title">Vé cổng</span>
              <span className="S_qr_title S_qr__">---</span>
              <span className="S_qr_date">Ngày sử dụng: 31/05/2021</span>
              <img className="S_tick" src={tick} alt="" />
            </div>
            <div id="myqrcode" className="S_box_qr">
              <QRCode value="Qa" />
              <span className="S_qr_count">Alt20210501</span>
              <span className="S_qr_title">Vé cổng</span>
              <span className="S_qr_title S_qr__">---</span>
              <span className="S_qr_date">Ngày sử dụng: 31/05/2021</span>
              <img className="S_tick" src={tick} alt="" />
            </div>
            <div id="myqrcode" className="S_box_qr">
              <QRCode value="Qa" />
              <span className="S_qr_count">Alt20210501</span>
              <span className="S_qr_title">Vé cổng</span>
              <span className="S_qr_title S_qr__">---</span>
              <span className="S_qr_date">Ngày sử dụng: 31/05/2021</span>
              <img className="S_tick" src={tick} alt="" />
            </div>
          </div>
          <span className="S_ticket_count">Số lượng vé: 12</span>
          {/* <Pagination simple defaultCurrent={2} total={50} /> */}
        </div>
      </div>
      <Button  className="btn_down_qr" type="primary" onClick={downloadQRCode}>
        Tải vé
      </Button>
      <Button  className="btn_down_qr btn_down_email" type="primary" >
        Gửi Email
      </Button>
    </div>
  );
};
