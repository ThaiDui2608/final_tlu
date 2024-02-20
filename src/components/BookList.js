import React from "react";
import SingleBook from "./SingleBook";
import { Row, Col } from "antd";
import bookPlaceholder from "../assets/img/placeholder_image.png";

const BookList = ({ books, onBookClick }) => {
  return (
    <div>
      <Row>
        {books.map((book) => (
          <Col span={4} key={book.id} onClick={() => onBookClick(book.id)}>
            <SingleBook
              img={book.book_cover ? book.book_cover : bookPlaceholder}
              title={book.name}
              rating_average={book.rating_average}
              quantity_sold={
                book.quantity_sold ? book.quantity_sold.text : "Đã bán: "
              }
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BookList;
