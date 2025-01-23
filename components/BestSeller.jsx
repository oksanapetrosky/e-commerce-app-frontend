import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10 ">
      <div className="text-center text-3xl py-8 ">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs m:text-m md:text-base text-[#891652]">
          The perfect fit in clothing, and its best sellers reflect this
          commitment to quality and precision
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
