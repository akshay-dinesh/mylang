import React, { useState } from "react";
import "./ratings.css";
import { FaStar } from "react-icons/fa";

// ***************************************************
// Question:
// To create a rating component
// ***************************************************

const Ratings = () => {
  // Object that has the colors hex code(value) assigned to their keys
  const colors = {
    inactive: "#000",
    active: "#FFA500",
  };

  // State 'value' defined with initial value set to 0
  const [value, setValue] = useState(0);

  // Function that sets the state of value to whatever the value is passed in
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
