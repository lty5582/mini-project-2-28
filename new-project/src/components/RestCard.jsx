import React from "react";

const RestCard = ({ name, image }) => {
    return (
        <div className="rest-card">
            <img src={image} alt={name} className="rest-image" />
            <div className="rest-name">
                <span>{name}</span>
            </div>
        </div>
    );
};

export default RestCard;