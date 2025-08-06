import React from "react";
import "./ProductCard.css";

export default function ProductCard({ course, onAddToCart }) {
  const { title, image, description, price } = course;

  return (
    <div className="productCard">
      <img src={image} alt={title} className="productImage" />
      <h3 className="productTitle">{title}</h3>
      <p className="productDescription">{description}</p>
      <p className="productPrice">{price}</p>
      <button className="addToCartBtn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
