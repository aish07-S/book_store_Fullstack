import React from 'react';
import './AuthorCard.css';

const AuthorCard = ({ image, name }) => {
    return (
        <div className="author-card">
            <img src={image} alt={name} className="author-image" />
            <p className="author-name">{name}</p>
        </div>
    );
};

export default AuthorCard;