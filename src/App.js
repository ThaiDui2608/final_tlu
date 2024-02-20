import React, { useState, useEffect } from "react";
import logo from "./assets/img/Link → 4e6e925ea554fc698123ea71ed7bda26.png.png";
import homeImg from "./assets/img/home.png";
import accountImg from "./assets/img/account.png";
import cartImg from "./assets/img/cart.png";
import "./App.css";
import { Layout } from "antd";
import { Col, Row, Breadcrumb } from "antd";
import BooksPages from "./components/BooksPages";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";

import { Input } from "antd";
import {
  SearchOutlined,
  ArrowDownOutlined,
  StarFilled,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [showSider, setShowSider] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowSider(location.pathname === "/");
  }, [location.pathname]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        style={{
          background: "#fff",
          height: "120px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="header_container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="header_left">
            <a href="http://localhost:3000/">
              <img src={logo} />
            </a>
            <Input
              placeholder="Free ship đến 30K"
              prefix={<SearchOutlined />}
              style={{
                borderRadius: 10,
                border: "1px solid #d9d9d9",
                marginRight: 8,
                width: "600px",
              }}
              suffix={
                <div>
                  <span>| </span>
                  <span
                    style={{
                      color: "#0A68FF",
                    }}
                  >
                    Tìm kiếm
                  </span>
                </div>
              }
            />
          </div>

          <div
            className="header_right"
            style={{
              display: "flex",
            }}
          >
            <div className="header_icon">
              <img src={homeImg} />
              <span>Trang chủ</span>
            </div>
            <div className="header_icon">
              <img src={accountImg} />
              <span>Tài khoản</span>
            </div>

            <img src={cartImg} />
          </div>
        </div>
      </Header>
      <div style={{ marginBottom: "16px" }}>
        <Breadcrumb
          items={[
            {
              title: "Trang chủ",
            },
            {
              title: <a href="/">Nhà sách Tiki</a>,
            },
          ]}
        />
      </div>
      <Layout
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        {showSider && (
          <Sider
            className="sider"
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              height: "max-content",
              display: showSider ? "block" : "none",
            }}
          >
            <h3
              style={{
                color: "#38383D",
              }}
            >
              Danh Mục Sản Phẩm
            </h3>
            <ul>
              <li>English Books</li>
              <li>Sách Tiếng Việt</li>
              <li>Văn phòng phẩm</li>
              <li>Quà lưu niệm</li>
            </ul>

            <hr />

            <h3
              style={{
                color: "#38383D",
              }}
            >
              Nhà cung cấp
            </h3>
            <ul>
              <li>
                <input type="checkbox" id="checkbox_1" />
                <label for="checkbox_1">Nhà sách Fahasa</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox_2" />
                <label for="checkbox_2">Bamboo Books</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox_3" />
                <label for="checkbox_3">Times Books</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox_4" />
                <label for="checkbox_4">Nhà Sách Trẻ Online</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox_5" />
                <label for="checkbox_5">VBooks</label>
              </li>
              <li
                style={{
                  color: "#0B74E5",
                }}
              >
                <a href="#">
                  Xem thêm <ArrowDownOutlined />
                </a>
              </li>
            </ul>

            <hr />

            <h3
              style={{
                color: "#38383D",
              }}
            >
              Đánh giá
            </h3>

            <ul>
              <li>
                <StarFilled className="star_yellow" />
                <StarFilled className="star_yellow" />
                <StarFilled className="star_yellow" />
                <StarFilled className="star_yellow" />
                <StarFilled className="star_yellow" />
                <span> từ 5 sao</span>
              </li>
              <li>
                <StarFilled className="star_yellow" />
                <StarFilled className="star_yellow" />
                <StarFilled className="star_yellow" />
                <StarFilled className="star_yellow" />
                <StarFilled className="star_grey" />
                <span> từ 4 sao</span>
              </li>
              <li>
                <StarFilled className="star_yellow" />
                <StarFilled className="star_yellow" />
                <StarFilled className="star_yellow" />
                <StarFilled className="star_grey" />
                <StarFilled className="star_grey" />
                <span> từ 3 sao</span>
              </li>
            </ul>
          </Sider>
        )}

        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:bookId" element={<BooksPages />} />
          </Routes>
        </Content>
      </Layout>

      <Footer
        style={{
          width: "100%",
          backgroundColor: "#fff",
          height: "20%",
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
                  <img src="" alt="" />
                </div>
              </li>
            </ul>
          </Col>
          <Col span={4} style={{}}>
            <ul>
              <li>
                <h4>Phương thức thanh toán</h4>
              </li>
              <li>
                <h4>Dịch vụ giao hàng</h4>
              </li>
            </ul>
          </Col>
          <Col span={4} style={{}}></Col>
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
      </Footer>
    </Layout>
  );
}

export default App;
