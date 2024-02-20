import React from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const SingleBook = (props) => {
  const numStars = 5;
  const filledStars = Math.floor(props.rating_average);
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<StarFilled key={i} style={{ color: "#fdd835" }} />);
  }

  for (let i = filledStars; i < numStars; i++) {
    stars.push(<StarOutlined key={i} />);
  }
  return (
    <div
      style={{
        background: "red",
        borderRadius: "4px",
        backgroundColor: "#fff",
        margin: "8px",
        height: "388px",
        width: "200px",
      }}
    >
      <img
        src={props.img}
        style={{
          width: "200px",
          height: "200px",
        }}
        alt=""
      />
      <p className="book_title">{props.title}</p>
      <div
        className=""
        style={{
          padding: "10px",
        }}
      >
        {stars}
        <span> {props.quantity_sold}</span>
      </div>
    </div>
  );
};

export default SingleBook;
