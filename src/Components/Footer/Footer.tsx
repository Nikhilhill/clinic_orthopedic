import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f6f6f6] py-8 mt-10">
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-10">
          {/* Clinic Info Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-primary mb-4">Visit Us</h3>
            <p className="text-lg mb-2"><FaMapMarkerAlt className="inline mr-2 text-primary" /> Speciality Orthopaedic Clinic,</p>
            <p className="text-lg mb-2" style={{marginLeft: "30px"}}> Sector-6, Vashi Koperkhairane Main Road,</p>
            <p className="text-lg mb-2" style={{marginLeft: "30px"}}>Opposite Teen Taki, Near KFC and Mathadi Hospital,</p>
            <p className="text-lg" style={{marginLeft: "30px"}}>Koperkhairane-400709</p>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-primary mb-4">Book Your Appointment</h3>
            <p className="text-lg mb-2"><FaPhoneAlt className="inline mr-2 text-primary" />9021222355, 8070995555</p>
            <p className="text-lg mb-2" style={{marginLeft: "27px"}}>8070993333</p>
            <p className="text-lg mb-2"><FaEnvelope className="inline mr-2 text-primary" />dr.akshay.jadhav@gmail.com</p>
          </div>

          {/* Clinic Hours Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-primary mb-4">Clinic Hours</h3>
            <p className="text-lg mb-2">Monday To Saturday</p>
            <p className="text-sm mb-2">(By Proir Appointment)</p>
            <p className="text-lg mb-2">Afternoon: 1:30pm to 3pm</p>
            <p className="text-lg mb-2">Evening: 7:30pm to 10pm </p>
          </div>
        </div>

        {/* Social Media Section */}
        {/* <div className="mt-8 flex justify-center gap-6">
          <a href="https://facebook.com" className="text-primary hover:text-secondary transition-all duration-300">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" className="text-primary hover:text-secondary transition-all duration-300">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" className="text-primary hover:text-secondary transition-all duration-300">
            <FaInstagram size={30} />
          </a>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 mt-10 bg-[#e5e5e5]">
        <p className="text-lg text-gray-700">© 2024 Dr. Akshay Jadhav. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
