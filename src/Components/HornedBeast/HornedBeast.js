import React from "react";
import "./HornedBeast.css";

function HornedBeast({ title, imgURL, description }) {
    return (
        <>
            <h2>{title}</h2>
            <img className="beast-img" src={imgURL} alt={description} title={title} />
            <p>{description}</p>
        </>
    );
}

export default HornedBeast;
