import React from 'react';
import shoulder_replacement_details from '../../../assets/Images/details/shoulder_replacement_details.jpg'


const ShoulderReplacement = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-10 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Shoulder Replacement</h1>
        <p className="text-gray-600">Learn how a healthy Shoulder joint functions and understand common hip issues like arthritis and osteoarthritis.</p>
      </div>

      {/* Responsive Image */}
      <div className="mb-10">
        <img
          src={shoulder_replacement_details}
          alt="Knee Anatomy"
          className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: How a Normal Knee Joint Works */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">What is Total Shoulder Replacement Operation?</h2>
          <p className="text-gray-600 leading-relaxed">
          Total Shoulder Replacement (TSR) is a surgical procedure in which a damaged or arthritic shoulder joint is replaced with an artificial joint, often referred to as a prosthesis. This surgery is typically performed when the shoulder joint has been severely damaged by conditions like osteoarthritis, rheumatoid arthritis, or rotator cuff tear arthropathy, and when conservative treatments like physical therapy or medication no longer provide relief.
          </p>
        </div>

        {/* Card 2: What is Knee Arthritis? */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">When to do a Total Knee Replacement Operation?</h2>
          <p className="text-gray-600 leading-relaxed">
          When pain becomes chronic and interferes with daily activities such as sleeping, dressing, or lifting objects, TSR can help eliminate or significantly reduce the pain by replacing the damaged joint surfaces.
          </p>
        </div>

        {/* Card 3: What is Osteoarthritis Knee Joint? */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">At what Age Hip Replacement can be done?</h2>
          <p className="text-gray-600 leading-relaxed">
          Shoulder replacement surgery, including Total Shoulder Replacement (TSR) or Reverse Shoulder Replacement, is typically recommended for individuals over the age of 60
          </p>
        </div>
      </div>
    </div>
  );
};




export default ShoulderReplacement;