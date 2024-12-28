// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center my-8">
            <h1 className="text-4xl font-bold text-gray-800 md:text-4xl lg:text-5xl relative inline-block">
              About Us
              <span className="block h-1 w-16 bg-primary mt-2 mx-auto"></span>
            </h1>
          </div>
          <div className="text-gray-700 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-primary mb-2">
                Who We Are
              </h2>
              <p className="leading-relaxed">
                At <span className="font-semibold">Speciality Orthopaedic Clinic</span>, 
                Dr. Akshay Jadhav specializes in diagnosing, treating, and preventing a wide range of orthopaedic conditions. 
                With years of experience and the latest technology, we provide cutting-edge care tailored to each patient’s needs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-2">
                Our Mission
              </h2>
              <p className="leading-relaxed">
                To deliver exceptional orthopaedic care that enhances quality of life through innovation, expertise, and compassion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-2">
                Why Choose Us?
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive care for bones, joints, and muscles</li>
                <li>State-of-the-art diagnostics and treatment</li>
                <li>Personalized rehabilitation plans</li>
                <li>Compassionate, patient-focused approach</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-6">
          <AppointmentModal />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
