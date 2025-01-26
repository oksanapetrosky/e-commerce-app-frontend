import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-xl text-[#891652]">Our Store</p>
          <p className=" text-[#891652]">
            200 Pine Haven Dr <br /> Roscommon, MI 48653 USA
          </p>
          <p className=" text-[#891652]">
            Tel: (989) 390-8671 <br /> Email: fabulous_fit@gmail.com
          </p>
          <p className=" font-semibold text-xl text-[#891652]">
            Careers at Forever
          </p>
          <p className=" text-[#891652]">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-[#891652] px-8 py-4 text-sm text-[#891652] hover:bg-[#891652] hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
