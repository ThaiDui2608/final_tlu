import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../services/apiServices";
import { Pagination, Breadcrumb } from "antd";

const HomePage = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBooks();
        if (data) {
          setBooks(data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  const totalItems = books.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePaginationChange = (page) => setCurrentPage(page);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <div>
      <BookList books={currentItems} onBookClick={handleBookClick} />
      <Pagination
        style={{
          textAlign: "center",
        }}
        current={currentPage}
        total={totalPages}
        pageSize={itemsPerPage}
        onChange={handlePaginationChange}
      />
    </div>
  );
};

export default HomePage;
