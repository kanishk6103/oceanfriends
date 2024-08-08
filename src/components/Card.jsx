import React, { useState } from 'react';

const Card = ({ title, price, description, category, image, clickHandler, id }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            clickHandler(id);
        }, 500);
    };

    return (
        <div
            className={`card ${isAnimating ? 'animate' : ''}`}
            style={{
                marginBottom: 25,
                borderWidth: 2,
                borderColor: 'black',
                borderStyle: 'solid',
                borderRadius: 8,
                padding: 5,
            }}
            onClick={handleClick}
        >
            <img src={image} alt="card-image" height={75} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span>{title}</span>
                <span>{price}</span>
                <span>{description}</span>
                <span>{category}</span>
            </div>
        </div>
    );
};

export default Card;
