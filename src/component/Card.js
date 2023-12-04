// Card.js
import React from "react";
import "./Card.css";
import { BsCart4 } from "react-icons/bs";

const Card = ({ product, onCardClick }) => {
  const { id, title, description, price, thumbnail } = product;

  const handleClick = () => {
    onCardClick(product); // Call onCardClick with the product when card is clicked
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={thumbnail} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>

        <p className="card-price">${price}</p>
      </div>
      <BsCart4 className="cart-logo" />
    </div>
  );
};

export default Card;
