import React from "react";
import StoreCard from "../components/storecard/StoreCard";
import allstore from '../data/Allstores.json'

const Allstores = () => {
  return (
    <>
      <div className="container">
        <h1>All stores in pune</h1>
      </div>

      {
  allstore.map((val, index) => {
    return (
      <>
        <div className="store-card-container" key={index}>
          <StoreCard img={val.img} name={val.storename} area={val.address} dist={val.distance} />
        </div>
      </>
    );
  })
}
    </>
  );
};

export default Allstores;


  