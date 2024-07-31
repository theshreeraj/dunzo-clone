import React from "react";
import "./StoreCard.css";

const StoreCard = () => {
  return (
    <>
      <div className="grocery-card">
        <div className="g-card-first">
          <img
            className="g-card-img"
            src="https://shorturl.at/zdieZ"
            alt="gimg"
          />
        </div>
        <div className="g-card-content">
          <h3>Food Junction</h3>
          <p>Deccan GymKhana</p>
          <p>3.4 KM</p>
        </div>
      </div>
    </>
  );
};

export default StoreCard;
