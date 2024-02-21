import React from "react";
import logo from "../assets/img/Link → 4e6e925ea554fc698123ea71ed7bda26.png.png";
import { Input } from "antd";
import homeImg from "../assets/img/home.png";
import {
    SearchOutlined,
    ArrowDownOutlined,
    StarFilled,
  } from "@ant-design/icons";
import accountImg from "../assets/img/account.png";
import cartImg from "../assets/img/cart.png";


const Header = () => {
  return (
    <div
      className=""
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
    </div>
  );
};

export default Header;
