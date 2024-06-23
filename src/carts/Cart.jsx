import React from "react";
import { Data } from "../data/data";
import ProductListing from "./ProductListing";

const Cart = () => {
  return (
    <div className="w-[1200px] grid grid-cols-3 gap-6 border border-black">
      {Data.map((item, index) => (
        <div
          key={index}
          className="w-[350px] h-[400px] border border-black rounded-[17px]"
        >
          <div>
            <img src={item.image} alt="img" />
          </div>
          <div>
            <p>{item.id}</p>
            <h2>{item.price}</h2>
            <p>{item["common-name"]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
