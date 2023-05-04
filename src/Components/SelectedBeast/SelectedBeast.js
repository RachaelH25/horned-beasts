import React from "react";

export default function SelectedBeast({ modalImg, handleModal }) {
    return (
        <div>
            <img src={modalImg.imgURL} alt="The Beast" />
            <p onClick={handleModal}> X </p>
        </div>
    );
}
