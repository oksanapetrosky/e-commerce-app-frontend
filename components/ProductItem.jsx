import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-100 h-80 object-cover hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm text-[#891652]">{name}</p>
      <p className="text-sm font-medium text-[#891652]">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
//className="hover:scale-110 transition ease-in-out"
