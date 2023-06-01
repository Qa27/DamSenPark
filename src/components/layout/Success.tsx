import { Header } from "../header/Header";
import "./Success.css";
import betraiqr from "../assets/betraiqr.png";
import tick from "../assets/tick.png";
import btntrai from "../assets/btntrai.svg";
import btnphai from "../assets/btnphai.svg";
import { Button, QRCode } from "antd";
import {
  Timestamp,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../../Server/firebase";

interface Ticket {
  id: string;
  numberTicket: number;
  expirationDate: Timestamp;
  nowDate: Timestamp;
}

export const Success = () => {
  const [ticket, setTicket] = useState<Ticket[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const qrCodesPerPage = 4;

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

  async function getCities(db: any) {
    const citiesCol = collection(db, "ticket");
    const queryObj = query(citiesCol, orderBy("nowDate", "desc"), limit(1));
    const citySnapshot = await getDocs(queryObj);
    const cityList = citySnapshot.docs.map((doc) => ({
      ...(doc.data() as Ticket),
      id: doc.id,
    }));
    setTicket(cityList);
  }

  useEffect(() => {
    getCities(db);
  }, []);

  // Xét từ localStorage có r thì hoi chưa có thì tạo random
  const storedCode = localStorage.getItem("qrCode");
  let qrCode: string;
  if (storedCode) {
    qrCode = storedCode;
  } else {
    qrCode = "Qa" + Math.random().toString(36).substring(7);
    localStorage.setItem("qrCode", qrCode);
  }

  const data = ticket.flatMap((item) =>
    Array.from({ length: item.numberTicket }, (_, index) => ({
      value: qrCode,
      count: "Vé " + (index + 1),
      title: "Vé cổng",
      date: item.expirationDate.toDate().toLocaleDateString(),
    }))
  );

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.length / qrCodesPerPage) - 1)
    );
  };

  const paginatedData = data.slice(
    currentPage * qrCodesPerPage,
    (currentPage + 1) * qrCodesPerPage
  );

  return (
    <div>
      <Header />
      <span className="S_title">Thanh toán thành công</span>
      <img className="S_betraiqr" src={betraiqr} alt="" />
      <div className="S_box">
        <div className="S_dash">
          <Button type="link">
            <img
              className="S_btntrai"
              src={btntrai}
              alt=""
              onClick={handlePrevPage}
            />
          </Button>
          <Button type="link">
            <img
              className="S_btnphai"
              src={btnphai}
              alt=""
              onClick={handleNextPage}
            />
          </Button>
          <div className="S_box_all">
            {paginatedData.map((item) => (
              <div className="S_box_qr">
                <QRCode value={item.value} />
                <span className="S_qr_count">{item.count}</span>
                <span className="S_qr_title">{item.title}</span>
                <span className="S_qr_title S_qr__">---</span>
                <span className="S_qr_date">Ngày sử dụng: {item.date}</span>
                <img className="S_tick" src={tick} alt="" />
              </div>
            ))}
          </div>
          <span className="S_ticket_count">
            Số lượng vé: {ticket[0]?.numberTicket}
          </span>
          <span className="S_ticket_page">
            Trang {currentPage + 1}/{Math.ceil(data.length / qrCodesPerPage)}
          </span>
        </div>
      </div>
      <Button className="btn_down_qr" type="primary" onClick={downloadQRCode}>
        Tải vé
      </Button>
      <Button className="btn_down_qr btn_down_email" type="primary">
        Gửi Email
      </Button>
    </div>
  );
};
