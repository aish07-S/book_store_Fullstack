import React from 'react';
import './CustomArrow.css'; // New CSS file for custom arrows

const CustomArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onClick={onClick}
        />
    );
};

export default CustomArrow;