import React, { useState } from "react";
import "./cards.css";

const Cards = (props) => {
  const cards = {
    imgUp:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/1200px-01_of_spades_A.svg.png",
    imgDown:
      "https://png.pngtree.com/background/20211217/original/pngtree-wedding-card-backgound-design-picture-image_1598231.jpg",
  };

  const totalCards = Array(props.amount).fill(cards);
  const [value, setValue] = useState(null);

  const clickHandler = (index) => {
    setValue(index);
  };

  return (
    <div className="container-cards">
      <table>
        <tbody>
          <tr>
            {totalCards.map((card, index) => {
              return (
                <td key={index}>
                  <img
                    onClick={() => clickHandler(index + 1)}
                    alt="card"
                    src={value === index + 1 ? cards.imgUp : cards.imgDown}
                    width="100px"
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cards;
