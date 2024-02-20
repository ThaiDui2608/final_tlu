import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetail } from "../services/apiServices";
import { Row, Col } from "antd";
import bookPlaceholder from "../assets/img/placeholder_image.png";
import checkedImg from "../assets/img/checked.png";
import authenticationImg from "../assets/img/authentication.png";
import { StarFilled, StarOutlined } from "@ant-design/icons";

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
      <Row>
        <Col
          span={6}
          style={{
            marginRight: "10px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
          <img
            style={{
              width: "80%",
              height: "80%",
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
          </div>
        </Col>
        <Col
          style={{
            marginRight: "10px",
          }}
          span={12}
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
            {console.log(book.rating_average)}
          </div>
          <p>{book.description}</p>
          <p>Price: ${book.price}</p>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
};

export default BooksPages;
