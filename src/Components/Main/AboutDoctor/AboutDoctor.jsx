import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const DoctorCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Easing function
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center my-8" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-gray-800 md:text-4xl lg:text-5xl relative inline-block">
          About Doctor
          <span className="block h-1 w-16 bg-primary mt-2 mx-auto"></span>
        </h1>
      </div>
      <div className="mx4 sm:mx-[10%] flex flex-col md:flex-row items-center gap-6 p-6">
        {/* Doctor Photo Card with fade-left animation */}
        <div
          className="w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="fade-left" // Apply fade-left animation
        >
          <img
            src="https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg" // Replace with actual image URL
            alt="Doctor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Doctor Info Card with fade-right animation */}
        <div
          className="w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          data-aos="fade-right" // Apply fade-right animation
        >
          {/* Header with Name and Designation */}
          <div className="bg-primary text-white p-4">
            <h2 className="text-xl font-bold">Dr. Akshay Jadhav</h2>
            <p className="text-sm font-medium" style={{ fontSize: "12px" }}>
              MBBS, D.ORTHO / DNB(Orthopedics) / MNAMS(Mumbai)<br />
              Fellowship Joint Replacement Surgeries (Mumbai)
            </p>
          </div>

          {/* Caption */}
          <div className="p-4 flex-grow flex items-center">
            <p className="text-gray-700 text-sm">
              Dedicated to providing the best care and treatment for joint health and mobility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
