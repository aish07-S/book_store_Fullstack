import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={image} alt={title} className="product-image" />
            </div>
            <div className="product-info">
                <p className="product-price">Rs {price}</p>
                <p className="product-title">{title}</p>
            </div>
        </div>
    );
};

export default ProductCard;