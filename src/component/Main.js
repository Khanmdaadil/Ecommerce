// Main.js
import React, { useState } from "react";
import Card from "./Card";
import data from "../data";
import ProductDetails from "./ProductDetails"; // Import ProductDetails component
import "./Main.css";

function Main() {
  const categories = [
    "smartphones",
    "laptops",
    "womens-dresses",
    "skincare",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? data.products
      : data.products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="main">
      <div className="category-buttons space-kids">
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(category)}>
            {category}
            <img
              className="category-image"
              src={
                data.products.find((product) => product.category === category)
                  ?.thumbnail
              }
              alt={category}
            />
          </button>
        ))}
      </div>
      <div className="product-container">
        {filteredProducts.map((product, index) => (
          <Card key={index} product={product} onCardClick={handleCardClick} />
        ))}
      </div>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Main;
