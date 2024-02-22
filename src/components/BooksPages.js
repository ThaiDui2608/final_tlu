import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetail } from "../services/apiServices";

// import images
import bookPlaceholder from "../assets/img/placeholder_image.png";
import checkedImg from "../assets/img/checked.png";
import authenticationImg from "../assets/img/authentication.png";
import viewMore from "../assets/img/view_more.png";

import { StarFilled, StarOutlined } from "@ant-design/icons";
import minusButton from "../assets/img/Button.png";
import plusButton from "../assets/img/Button (1).png";
import amountImg from "../assets/img/Input.png";

const BooksPages = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBookDetail(bookId);
        if (data) {
          setBook(data);
        }
      } catch (error) {
        console.error("Error fetching book detail:", error);
      }
    };

    fetchData();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  // RATING AVERAGE LOGIC
  const numStars = 5;
  const filledStars = Math.ceil(book.rating_average);
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<StarFilled key={i} style={{ color: "#fdd835" }} />);
  }

  for (let i = filledStars; i < numStars; i++) {
    stars.push(<StarOutlined key={i} />);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginBottom: '40px'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "25%",
            height: "max-content"
          }}
        >
          <img
            style={{
              width: "80%",
            }}
            src={book.book_cover ? book.book_cover : bookPlaceholder}
            alt=""
          />
          <div
            className="short_desc"
            style={{
              width: "80%",
            }}
          >
            <div
              className="short_desc_item"
              style={{
                display: "flex",
              }}
            >
              <img
                src={checkedImg}
                style={{
                  width: "16px",
                  height: "21px",
                }}
              />
              <p style={{ margin: "0 0 0 10px" }}>
                Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.
              </p>
            </div>
            <div
              className="short_desc_item"
              style={{
                display: "flex",
              }}
            >
              <img
                src={checkedImg}
                style={{
                  width: "16px",
                  height: "21px",
                }}
              />
              <p style={{ margin: "0 0 0 10px" }}>
                Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của
                trẻ em.
              </p>
            </div>
            <div
              className="short_desc_item"
              style={{
                display: "flex",
              }}
            >
              <img
                src={checkedImg}
                style={{
                  width: "16px",
                  height: "21px",
                }}
              />
              <p style={{ margin: "0 0 0 10px" }}>
                Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ
                của các quốc gia.
              </p>
            </div>

            <hr />
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={viewMore} alt="" />
              <span>
                {" "}
                <span
                  style={{
                    color: "#808089",
                  }}
                >
                  Xem thêm
                </span>{" "}
                Tóm tắt nội dung sách
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            margin: "0 10px",
          }}
        >
          <div
            style={{
              marginRight: "10px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              padding: "8px",
              width: "100%",
            }}
          >
            <div
              className="header_book_details"
              style={{
                display: "flex",
              }}
            >
              <img src={authenticationImg} />
              <span>
                Tác giả:{" "}
                <span style={{ color: "#0D5CB6" }}>
                  {book.authors ? book.authors[0].name : "Không có trong db"}
                </span>
              </span>
            </div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "30px",
                letterSpacing: "0.5px",
              }}
            >
              {book.name}
            </h2>
            <div className="rating_star">
              <span>{book.rating_average} </span>
              <span>{stars}</span>
            </div>
            <p
              style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "36px",
              }}
            >
              257.000₫
            </p>
            <p
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Thông tin chi tiết
            </p>
            <table>
              <tr>
                <td>Phiên bản sách</td>
                <td>Phiên bản thường</td>
              </tr>
              <tr>
                <td>Công ty phát hành</td>
                <td>Nhã Nam</td>
              </tr>
              <tr>
                <td>Ngày xuất bản</td>
                <td>2020-03-02</td>
              </tr>
              <tr>
                <td>Kích thước</td>
                <td>27 x 37 cm</td>
              </tr>
              <tr>
                <td>Dịch giả</td>
                <td>QuỳnhChi</td>
              </tr>
              <tr>
                <td>Loại bìa</td>
                <td>Bìa cứng</td>
              </tr>
              <tr>
                <td>Số trang</td>
                <td>108</td>
              </tr>
              <tr>
                <td>Nhà xuất bản</td>
                <td>Nhà Xuất Bản Lao Động</td>
              </tr>
            </table>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              marginTop: "10px",
              padding: '8px'
            }}
          >
            <h3
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Mô tả sản phẩm
            </h3>
            <p dangerouslySetInnerHTML={{ __html: book.description }}></p>
          </div>
        </div>
        <div
          style={{
            borderRadius: "8px",
            backgroundColor: "#fff",
            padding: "8px",
            width: "25%",
            height: 'max-content'
          }}
        >
          <h3>Số lượng</h3>
          <div
            style={{
              display: "flex",
            }}
          >
            <img src={minusButton} />
            <img src={amountImg} />
            <img src={plusButton} />
          </div>
          <h3
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#27272A",
            }}
          >
            Tạm tính
          </h3>
          <p
            style={{
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "36px",
            }}
          >
            257.000₫
          </p>
          <div className="buy_now_container">
            <button className="buy_now_1">Mua ngay</button>
            <button className="buy_now_2">Thêm vào giỏ</button>
            <button className="buy_now_3">Mua trước trả sau</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPages;
