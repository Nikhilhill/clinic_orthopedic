import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TREATMENT_CARD } from '@/Components/Shared/Consts'; 

const Treatment = () => {
  const navigate = useNavigate(); 

  const handleClick = (route) => {
    console.log(`Navigating to: ${route}`);
    navigate(route); 
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800 md:text-4xl lg:text-5xl relative inline-block">
          Treatments
          <span className="block h-1 w-16 bg-primary mt-2 mx-auto"></span>
        </h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {TREATMENT_CARD.map((el, i) => (
            <div
              key={i}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center"
            >
              <img
                src={el.img}
                alt={el.title}
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <button
                onClick={() => handleClick(el.route)}
                className="z-10 px-4 py-2 text-white rounded shadow-md transition-all bg-transparent hover:bg-black border border-white"
              >
                {el.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Treatment;
