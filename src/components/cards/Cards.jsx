import React, { useState } from "react";
import "./cards.css";

// ***************************************************
/* 
Card Widget 

Description

An HTML widget for a children's game represents a clickable card row. Initially, all cards are face down. Whenever a card is clicked, it is turned over to face up, and any card that was previously face up is turned over to face down. Only one card can be face up at one time. Cards that are face up should have the content 'up' while face down cards should have the content 'down'. When an 'up' card is clicked, it remains 'up'.
Implement the React component Cards that accepts the amount prop which defines how many cards there should be. The component should be rendered as a table element. 
For example, after clicking the second cell on the Cards component, rendered as:
<Cards amount={4} />
the page should contain the following table:
<table>
  <tbody>
    <tr>
      <td>down</td>
      <td>up</td>
      <td>down</td>
      <td>down</td>
    </tr>
  </tbody>
</table> 
*/

// ***************************************************

const Cards = (props) => {
  // Object that has the card up and card down image details
  const cards = {
    imgUp:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/1200px-01_of_spades_A.svg.png",
    imgDown:
      "https://png.pngtree.com/background/20211217/original/pngtree-wedding-card-backgound-design-picture-image_1598231.jpg",
  };

  // Creating an array and filling it with object cards
  const totalCards = Array(props.amount).fill(cards);

  // Creating a state value and assigning it to null
  const [value, setValue] = useState(null);

  // A function to handle click event
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
                    onClick={() => clickHandler(index)}
                    alt="card"
                    src={value === index ? cards.imgUp : cards.imgDown}
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
