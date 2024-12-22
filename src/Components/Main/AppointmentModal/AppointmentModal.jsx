import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "../../../../src/index.css"

const AppointmentModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Book Appointment Button */}
      <button
        onClick={toggleModal}
        className="bg-[#87b921] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#6c9e1f] transition duration-300"
      >
        Book Appointment
      </button>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 transition-opacity duration-500 ease-in-out"
          onClick={toggleModal} // Close modal when clicking outside the modal content
          style={{ animation: "fadeIn 0.5s ease-in-out" }}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative transform transition-transform duration-500 ease-in-out"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            style={{ animation: "scaleIn 0.5s ease-in-out" }}
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <div className="text-center my-8">
                <h1 className="text-2xl font-bold text-gray-800 md:text-1xl lg:text-1xl relative inline-block">
                  Book Your Appointment
                  <span className="block h-1 w-16 bg-primary mt-2 mx-auto"></span>
                </h1>
              </div>
              <div className="text-gray-700 space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-primary text-xl" />
                  <span>
                    <strong>Phone:</strong> 9021222355, 8070995555, 8070993333
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary text-xl" />
                  <a
                    href="mailto:dr.akshay.jadhav@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    dr.akshay.jadhav@gmail.com
                  </a>
                </div>

                {/* Clinic Hours */}
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary text-xl mt-1" />
                  <div>
                    <strong>Clinic Hours:</strong>
                    <ul className="list-disc list-inside mt-1 text-left">
                      <li>Monday to Saturday</li>
                      <li>Afternoon: 1:30pm to 3pm</li>
                      <li>Evening: 7:30pm to 10pm</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Close Button */}
              <div className="mt-6">
                <button
                  onClick={toggleModal}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300"
                  style={{ backgroundColor: "#87b921" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentModal;
