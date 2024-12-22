import React from 'react';
import hip_replacement_details from '../../../assets/Images/details/hip_replacement_details.jpg'


const HipReplacement = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-10 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hip Replacement</h1>
        <p className="text-gray-600">Learn how a healthy hip joint functions and understand common hip issues like arthritis and osteoarthritis.</p>
      </div>

      {/* Responsive Image */}
      <div className="mb-10">
        <img
          src={hip_replacement_details}
          alt="Knee Anatomy"
          className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: How a Normal Knee Joint Works */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">What is Total Hip Replacement Operation?</h2>
          <p className="text-gray-600 leading-relaxed">
          In this operation, damaged cartilage - bone are removed and then replaced with a ball & socket to restore the alignment and function of hip joint. Many different types of designs and materials are currently used in artificial hip joints. All of them consist of two basic components: the ball component (made of a highly polished strong metal or ceramic material) and the socket component (a durable cup of plastic, ceramic or metal.
          </p>
        </div>

        {/* Card 2: What is Knee Arthritis? */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">When to do a Total Knee Replacement Operation?</h2>
          <p className="text-gray-600 leading-relaxed">
          The decision whether to have knee replacement surgery should be a cooperative one between Patients, their family, & treating surgeon. Orthopedic surgeons evaluate patients individually & recommendations for surgery are based on the extent of joint pain, disability, and general health status.
          </p>
        </div>

        {/* Card 3: What is Osteoarthritis Knee Joint? */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">At what Age Hip Replacement can be done?</h2>
          <p className="text-gray-600 leading-relaxed">
          Age is not only criteria but important factors are amount of hip pain and disability. If some one is handicapped only because hip arthritis, then it can be done at any time after age of 18 years.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-4">How long is the Hospital Stay for Hip Replacement?</h2>
          <p className="text-gray-600 leading-relaxed">
          Hospital stay depends on patient’s recovery. Normally stay is 6-7 days. Patient is hospitalized one day prior to operation. Most hip replacement patients begin standing and walking with the help of a walking support, 4 to 5 days after surgery.
          </p>
        </div>
      </div>
    </div>
  );
};



export default HipReplacement;