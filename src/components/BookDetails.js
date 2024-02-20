import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import { fetchBooks } from "../services/apiServices";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBooks(bookId);
        if (data) {
          setBook(data);
        }
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchData();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Row>
        <Col span={6}>abc</Col>
        <Col span={12}>
          <h2>{book.name}</h2>
          <p>{book.description}</p>
          <p>Price: ${book.price}</p>
        </Col>
        <Col span={6}>def</Col>
      </Row>
    </div>
  );
};

export default BookDetails;
