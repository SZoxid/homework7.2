import React from "react";

const ProductListing = () => {
  return (
    <div className="w-[300px] ml-5 mt-4">
      <h2 className="text-[20px] uppercase font-semibold">Brand</h2>
      <ul className="mt-4">
        <li className="mb-1  text-[18px]">
          <input type="checkbox" />
          Logitech
        </li>
        <li className="mb-1  text-[18px]">
          <input type="checkbox" />
          HyperX
        </li>
        <li className="mb-1  text-[18px]">
          <input type="checkbox" />
          Asus
        </li>
        <li className="mb-1  text-[18px]">
          <input type="checkbox" />
          Razer
        </li>
        <li className="mb-1  text-[18px]">
          <input type="checkbox" />
          NZXT
        </li>
        <li className="mb-1 text-[18px]">
          <input type="checkbox" />
          MSI
        </li>
      </ul>
    </div>
  );
};

export default ProductListing;
