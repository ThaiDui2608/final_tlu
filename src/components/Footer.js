import React from "react";
import verifyImg from "../assets/img/bo-cong-thuong.svg fill.png";
import facebookIcon from "../assets/img/facebook icon.png";
import youtubeIcon from "../assets/img/youtube icon.png";
import zaloIcon from "../assets/img/zalo icon.png";

import { Row, Col } from "antd";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fff",
        height: "20%",
        padding: "8px",
      }}
    >
      <Row className="footer_row_1">
        <Col span={4}>
          <h4>Hỗ trợ khách hàng</h4>
          <ul>
            <li>
              Hotline: <span style={{ fontWeight: "bolder" }}>1900-6035</span>{" "}
              <br />
              (1000 đ/phút, 8-21h kể cả T7, CN)
            </li>
            <li>Các câu hỏi thường gặp</li>
            <li>Gửi yêu cầu hỗ trợ</li>
            <li>Hướng dẫn đặt hàng</li>
            <li>Phương thức vận chuyển</li>
            <li>Chính sách đổi trả</li>
            <li>Hướng dẫn trả góp</li>
            <li>Chính sách hàng nhập khẩu</li>
            <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
            <li>Báo lỗi bảo mật: security@tiki.vn</li>
          </ul>
        </Col>
        <Col span={4} style={{}}>
          <h4>Về Tiki</h4>
          <ul>
            <li>Giới thiệu Tiki</li>
            <li>Tiki Blog</li>
            <li>Tuyển dụng</li>
            <li>Chính sách bảo mật thanh toán</li>
            <li>Chính sách bảo mật thông tin cá nhân</li>
            <li>Chính sách giải quyết khiếu nại</li>
            <li>Điều khoản sử dụng</li>
            <li>Giới thiệu Tiki Xu</li>
            <li>Gói hội viên VIP</li>
            <li>Tiếp thị liên kết cùng Tiki</li>
            <li>Bán hàng doanh nghiệp</li>
            <li>Điều kiện vận chuyển</li>
          </ul>
        </Col>
        <Col span={4} style={{}}>
          <h4>Hợp tác và liên kết</h4>
          <ul>
            <li>Quy chế hoạt động Sàn GDTMĐT</li>
            <li>Bán hàng cùng Tiki</li>
            <li>
              <h4>Chứng nhận bởi</h4>
              <div className="verify">
                <img
                  style={{
                    width: "83px",
                    height: "32px",
                  }}
                  src={verifyImg}
                  alt=""
                />
              </div>
            </li>
          </ul>
        </Col>
        <Col span={4}>
          <ul>
            <li>
              <h4>Phương thức thanh toán</h4>
            </li>
            <li>
              <h4>Dịch vụ giao hàng</h4>
            </li>
          </ul>
        </Col>
        <Col span={4} style={{}}>
          <h4>Kết nối với chúng tôi</h4>
          <div className="footer_icon_container"
            style={{
              display: "flex",
            }}
          >
            <img src={facebookIcon} alt="" />
            <img src={youtubeIcon} alt="" />
            <img src={zaloIcon} alt="" />
          </div>
          <h4>Tải ứng dụng trên điện thoại</h4>
        </Col>
        <Col span={4} style={{ backgroundColor: "white" }}></Col>
      </Row>
      <Row className="footer_row_1">
        <Col span={14}>
          <h4>Công ty TNHH TIKI</h4>
          <p>
            Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường Cách Mạng Tháng 8,
            Phường 12, Quận 10, Thành phố Hồ Chí Minh
          </p>
          <p>
            Giấ`y chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch
            và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
          </p>
          <p>
            Hotline: <a href="tel: 1900 6035">1900 6035</a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
