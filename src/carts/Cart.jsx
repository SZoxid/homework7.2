import React from "react";
import { Data } from "../data/data";
import ProductListing from "./ProductListing";

const Cart = () => {
  return (
    <div className="w-[1300px] grid grid-cols-3 gap-6 ml-[50px]">
      {Data.map((item, index) => (
        <div
          key={index}
          className="w-[350px] h-[440px] border border-black-200 mt-3"
        >
          <div>
            <img
              src={item.image}
              alt="img"
              className="w-[200px] h-[200px]  m-auto mt-5"
            />
          </div>
          <div>
            <p className="text-[#190D26] text-[20px] font-semibold w-[100%] mt-[35px]">
              {item.brand}
            </p>
            <p className="text-[18px] font-normal text-[#190D26] mt-2">
              {item.description}
            </p>
            <h2 className="text-[20px] font-semibold text-[#190D26] mt-2">
              {item.price}$
            </h2>
            <button className="w-[80%] h-[45px] border text-center text-[#fff] text-[20px] bg-[#0BA42D] rounded-[10px] mt-2">
              Add to Card
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
