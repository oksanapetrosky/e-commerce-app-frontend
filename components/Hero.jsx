import React from "react";
// import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const slides = [
  // {
  //   id: 1,
  //   title: "Slide 1",
  //   image:
  //     "https://theportraitmasters.com/wp-content/uploads/2019/06/LJ2_HeroV2_1280.jpg",
  // },
  {
    id: 2,
    title: "Slide 2",
    image: "https://audaces.com/wp-content/uploads/2020/08/fashion-styles.webp",
  },
  {
    id: 3,
    title: "Slide 3",
    image:
      "https://img.freepik.com/premium-photo/woman-wears-scarf-sunglasses-street_1271244-194448.jpg?uid=R145496865&ga=GA1.1.488613285.1713630384&semt=ais_hybrid",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex flex-col sm:flex-row border border-[#891652] top-0 text-[#891652]">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#891652]">
          <div className="flex items-center">
            <p className="w-8 md:w-11 h-[2px] bg-[#891652] "></p>
            <p className="font-medium text-sm md:text-base ml-5">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="prata-regular text-6xl sm:py-3 lg-text-8xl leading-relaxed">
            New Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="ml-20 font-semibold text-sm md:text-base text-[#891652]">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#891652]"></p>
          </div>
        </div>
      </div>

      <img
        className="w-full sm:w-1/2"
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
      />
    </div>
  );
};

export default Hero;
