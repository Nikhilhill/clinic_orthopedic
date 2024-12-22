import React, { useState, useEffect } from 'react';
import { FeedbackData } from '@/Components/Shared/Consts'; 

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % FeedbackData.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);
  

  return (
    <>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800 md:text-4xl lg:text-5xl relative inline-block">
          Testimonials
          <span className="block h-1 w-16 bg-primary mt-2 mx-auto"></span>
        </h1>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {FeedbackData.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-6 py-8 bg-primary shadow-lg rounded-lg mx-2"
              >
                <p className="text-xl font-semibold text-white">{testimonial.name}, {testimonial.age}</p>
                <p className="mt-4 text-white">{testimonial.caption}</p>
                <p className="mt-4 text-white italic">{testimonial.desc}</p>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white cursor-pointer z-10">
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex - 1 + FeedbackData.length) % FeedbackData.length)
              }
              className="bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200"
            >
              &#8592;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer z-10">
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex + 1) % FeedbackData.length)
              }
              className="bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
