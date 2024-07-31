import React from "react";
import StoreCard from "../components/storecard/StoreCard";

const Allstores = () => {
  return (
    <>
      <div className="container">
        <h1>All stores in pune</h1>
      </div>
      <div className="store-card-container">
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    </>
  );
};

export default Allstores;
