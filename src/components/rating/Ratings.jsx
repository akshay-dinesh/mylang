import React, { useState } from "react";
import "./ratings.css";
import { FaStar } from "react-icons/fa";

const Ratings = () => {
  const colors = {
    inactive: "#000",
    active: "#FFA500",
  };

  const [value, setValue] = useState(0);

  const clickHandler = (value) => {
    setValue(value);
  };

  const stars = Array(5).fill(0);
  return (
    <div className="container-ratings">
      {[
        stars.map((arr, index) => {
          return (
            <FaStar
              className="star"
              key={index}
              onClick={() => clickHandler(index + 1)}
              color={value > index ? colors.active : colors.inactive}
            />
          );
        }),
      ]}
    </div>
  );
};

export default Ratings;
