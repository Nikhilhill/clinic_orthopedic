import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-5">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
            Contact
            <span className="block h-1 w-16 bg-primary mt-2 mx-auto"></span>
          </h2>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center items-center">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Address</h3>
            <p className="text-gray-600 text-left">
              Speciality Orthopaedic Clinic, Sector-6,<br />
              Vashi Koperkhairane Main Road,<br />
              Opposite Teen Taki, Near KFC and Mathadi Hospital, Koperkhairane-400709<br />
            </p>
            {/* Google Maps Embed */}
            <div className="mt-4">
              <iframe
                className="mx-auto"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Speciality%20Orthopaedic%20Clinic,%20Sector-6,%20Vashi%20Koperkhairane%20Main%20Road,%20Opposite%20Teen%20Taki,%20Near%20KFC%20and%20Mathadi%20Hospital,%20Koperkhairane-400709+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center items-center">
              <FaPhoneAlt />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
            <p className="text-gray-600">
              <a href="tel:9021222355" className="hover:text-secondary">
              9021222355
              </a>
              <br />
              <a href="tel:8070995555" className="hover:text-secondary">
              8070995555
              </a>
              <br />
              <a href="tel:8070993333" className="hover:text-secondary">
              8070993333
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center items-center">
              <FaEnvelope />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:udditclinic@gmail.com"
                className="font-semibold hover:text-secondary"
              >
                dr.akshay.jadhav@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
