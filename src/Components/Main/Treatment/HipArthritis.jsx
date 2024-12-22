import React from 'react';
import hip_arthritis_details from '../../../assets/Images/details/hip_arthritis_details.jpg'


const HipArthritis = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-10 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hip Arthritis</h1>
        <p className="text-gray-600">Learn how a healthy hip joint functions and understand common hip issues like arthritis and osteoarthritis.</p>
      </div>

      {/* Responsive Image */}
      <div className="mb-10">
        <img
          src={hip_arthritis_details}
          alt="Hip Anatomy"
          className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: How a Normal Knee Joint Works */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">What is Hip Arthritis?</h2>
          <p className="text-gray-600 leading-relaxed">
          Hip Joint is a ball and socket joint. If your hip joint has been damaged by arthritis, common activities such as walking or getting in and out of a chair may be painful and difficult. Your hip may be stiff and it may be hard to put on your shoes and socks. You may even feel uncomfortable while resting.
          </p>
        </div>

        {/* Card 2: What is Knee Arthritis? */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">What are the causes of Hip Arthritis?</h2>
          <p className="text-gray-600 leading-relaxed">
          It may be due to Rheumatoid Arthritis, Ankylosing Spondylitis, secondary to A vascular Necrosis of femoral head (AVN) and after any fracture around Hip Joint.
          </p>
        </div>

        {/* Card 3: What is Osteoarthritis Knee Joint? */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">What is the treatment of Hip Arthritis?</h2>
          <p className="text-gray-600 leading-relaxed">
          Pain relieving medications, changes in everyday activities and the use of walking aids such as a cane are initially helpful. However if pain, stiffness of hip and difficulty in walking persist then one may consider hip replacement surgery. By replacing diseased hip joint with an artificial joint, hip replacement surgery can relieve pain, increase motion, and help patient get back to enjoying everyday activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HipArthritis;