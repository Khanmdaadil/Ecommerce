import React, { useState } from "react";

import "./product.css";
const ProductDetails = ({ product, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="image-desc">
          <div className="prod-img">
            <img src={product.images[currentImageIndex]} alt={product.title} />
            <button
              className="slider-button left-slider-button"
              onClick={handlePrevClick}
            >
              &lt;
            </button>
            <button
              className="slider-button right-slider-button"
              onClick={handleNextClick}
            >
              &gt;
            </button>
          </div>
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>

            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        </div>
        <div className="product-buttons">
          <button className="buy-button">Buy Now</button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
