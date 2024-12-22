import React from 'react';
import Knee_Arthritis_details from '../../../assets/Images/details/knee_arthritis_details.jpg'


const KneeArthritis = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-10 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Knee Joint & Arthritis</h1>
        <p className="text-gray-600">Learn how a healthy knee joint functions and understand common knee issues like arthritis and osteoarthritis.</p>
      </div>

      {/* Responsive Image */}
      <div className="mb-10">
        <img
          src={Knee_Arthritis_details}
          alt="Knee Anatomy"
          className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: How a Normal Knee Joint Works */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">How a Normal Knee Joint Works</h2>
          <p className="text-gray-600 leading-relaxed">
            The knee is the largest weight-bearing joint in the body. It consists of the femur, tibia, and patella, with articular cartilage cushioning these bones. Ligaments provide stability, and a synovial membrane releases lubricating fluid, ensuring smooth movement.
          </p>
        </div>

        {/* Card 2: What is Knee Arthritis? */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">What is Knee Arthritis?</h2>
          <p className="text-gray-600 leading-relaxed">
            Arthritis refers to the roughness of joint surfaces, often causing chronic knee pain and disability. Common types include osteoarthritis, rheumatoid arthritis, and traumatic arthritis.
          </p>
        </div>

        {/* Card 3: What is Osteoarthritis Knee Joint? */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">What is Osteoarthritis Knee Joint?</h2>
          <p className="text-gray-600 leading-relaxed">
            Osteoarthritis is a degenerative joint disease caused by wear and tear. Symptoms include pain, stiffness, swelling, and bowing of legs, often starting after age 40 and worsening after 50.
          </p>
        </div>

        {/* Card 4: Risk Factors for Osteoarthritis */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">Risk Factors for Osteoarthritis</h2>
          <p className="text-gray-600 leading-relaxed">
            Risk factors include obesity, family history, old age, and previous knee injuries. These factors increase the likelihood of developing osteoarthritis over time.
          </p>
        </div>

        {/* Card 5: Treatment Options for Osteoarthritis */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">Treatment Options for Osteoarthritis</h2>
          <p className="text-gray-600 leading-relaxed">
            Treatment depends on the disease stage. Early stages respond well to non-operative methods like physiotherapy, weight reduction, and supplements. Late stages may require surgical intervention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KneeArthritis;
