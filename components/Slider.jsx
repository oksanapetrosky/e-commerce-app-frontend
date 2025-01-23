// import React from "react";
// import Slider from "react-slick";

// const ImageSlider = () => {
//   const settings = {
//     infinite: true, 
//     speed: 3000, 
//     slidesToShow: 4, 
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, 
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 768, 
//         settings: {
//           slidesToShow: 1, 
//           vertical: true,  
//           verticalSwiping: true
//         }
//       }
//     ]
//   };

//   const images = [
//     "https://images.unsplash.com/photo-1605813808456-26c16c0dfb77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFjY2Vzb3Jpb3MlMjBmYXNoaW9ufGVufDB8fDB8fHww",
//     "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFjY2Vzb3Jpb3MlMjBmYXNoaW9ufGVufDB8fDB8fHww",
//     "https://images.unsplash.com/photo-1689367436414-7acc3fdc3e2a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://img.freepik.com/free-photo/hand-bag-layout-with-place-text-women-s-accessories-jewellery-background-mockup-banner-fashion-accessories_460848-13219.jpg?t=st=1727471520~exp=1727475120~hmac=26498c12cc719c5500939d398c73811dcac4d379d1d4c3c74c3bb77705ce07f9&w=1380",
//     "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGFjY2Vzb3Jpb3MlMjBmYXNoaW9ufGVufDB8fDB8fHww",
//     "https://images.unsplash.com/photo-1660245409239-23b212a77793?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGFjY2Vzb3Jpb3MlMjBmYXNoaW9ufGVufDB8fDB8fHww",
//     "https://img.freepik.com/free-photo/display-shiny-elegant-gold-chain_23-2149635331.jpg?uid=R145496865&ga=GA1.1.488613285.1713630384&semt=ais_hybrid",
//     "https://img.freepik.com/premium-photo/close-up-beauty-portrt-graceful-blond-woman-with-trendy-tropical-jewerly-neck-posing-outdoo_1356031-5808.jpg?uid=R145496865&ga=GA1.1.488613285.1713630384&semt=ais_hybrid",
//     "https://img.freepik.com/premium-photo/pair-embroidered-gloves-with-floral-motifs-pearl-accents-generative-ai_437323-10553.jpg?uid=R145496865&ga=GA1.1.488613285.1713630384&semt=ais_hybrid"
//   ];

//   return (
//     <div>
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div className="carousel" key={index}>
//             <img id="slider-carousel" src={image} alt={`slide-${index}`} style={{ width: "400px", height: "550px" }} />
//             <button className="btn3">Shop Now</button>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;