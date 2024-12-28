import React from "react";
import Slider from "react-slick";
import { FeedbackData } from "@/Components/Shared/Consts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true, 
  };

  return (
    <div>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800 md:text-4xl lg:text-5xl relative inline-block">
          Testimonials
          <span className="block h-1 w-16 bg-primary mt-2 mx-auto"></span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <Slider {...settings}>
          {FeedbackData.map((feedback, index) => (
            <div key={index} className="px-4">
              <div className="bg-primary text-white shadow-lg rounded-lg p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {feedback.caption}
                </h3>
                <p className="text-gray-700 text-white italic mb-4">"{feedback.desc}"</p>
                <div className="text-sm text-gray-600">
                  <span className="block text-white font-medium">{feedback.name}</span>
                  <span className="block text-white font-medium">{feedback.age}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
