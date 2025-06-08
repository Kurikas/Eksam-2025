import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">{product.price}€</div>
      {/* The link below navigates to a generic products page as per your HTML */}
      <Link to="/tooted" className="button">Vaata lähemalt</Link>
    </div>
  );
};

export default ProductCard;