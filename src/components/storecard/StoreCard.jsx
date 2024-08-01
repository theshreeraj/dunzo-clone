import React from "react";
import "./StoreCard.css";

const StoreCard = ({img,name,dist,area}) => {
  return (
    <>
      <div className="grocery-card">
        <div className="g-card-first">
          <img
            className="g-card-img"
            src={img}
            alt="gimg"
          />
        </div>
        <div className="g-card-content">
          <h3>{name}</h3>
          <p>{area}</p>
          <p>{dist}</p>
        </div>
      </div>
    </>
  );
};

export default StoreCard;
