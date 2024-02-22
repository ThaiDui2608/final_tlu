import React, { useState, useEffect } from "react";
import logo from "./assets/img/Link → 4e6e925ea554fc698123ea71ed7bda26.png.png";
import homeImg from "./assets/img/home.png";
import accountImg from "./assets/img/account.png";
import cartImg from "./assets/img/cart.png";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
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

const { Content, Sider } = Layout;

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
      <Header />

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

      <Footer />
    </Layout>
  );
}

export default App;
