import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-[#891652]">
            Fabulous Fit is an innovative online fashion store that caters to
            fashion enthusiasts looking for trendy, high-quality apparel.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-[#891652]">COMPANY</p>
          <ul className="flex flex-col gap-1 text-[#891652]">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-[#891652]">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-[#891652]">
            <li>+1-989-390-8671</li>
            <li>customer-support@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-[#891652]">
          @2024 All copywrites are reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
