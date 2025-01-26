import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((a) => a !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((a) => a !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = async () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-[#891652]">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 text-[#891652]"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? " rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-[#891652] pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium text-[#891652]">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-[#891652]">
            <p className="flex gap-2">
              <input
                className="w-3 text-[#891652]"
                value={"Men"}
                onChange={toggleCategory}
                type="checkbox"
              />{" "}
              Men{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 text-[#891652]"
                value={"Women"}
                onChange={toggleCategory}
                type="checkbox"
              />{" "}
              Women{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 text-[#891652]"
                value={"Kids"}
                onChange={toggleCategory}
                type="checkbox"
              />{" "}
              Kids{" "}
            </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div
          className={`border border-[#891652] pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium text-[#891652]">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-[#891652]">
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Topwear{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Bottoms"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Bottoms{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Weddings"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Weddings{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Shoes"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Shoes{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Dresses"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Dresses{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Winterwear{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-[#891652] text-sm px-2 text-[#891652]"
            name=""
            id=""
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
