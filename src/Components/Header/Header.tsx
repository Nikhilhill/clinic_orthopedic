// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import AppointmentModal from "../Main/AppointmentModal/AppointmentModal"

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-0">
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[13vw] lg:px-8">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Specialty Orthopaedic Clinic
        </p>
        <div>
          <p className="text-white">
            Your trusted destination for advanced orthopaedic care and pain
            management. Our team of expert orthopaedic specialists is dedicated
            to improving your mobility, relieving your pain, and helping you
            lead a healthier, active life.
          </p>
          <br />
          <p className="text-white">
          Book an appointment today and take the first step toward better mobility!
          </p>
        </div>
        <AppointmentModal />
      </div>

      {/* Right side */}
      <div className="md:w-1/2 relative">
        <img
          className="md:absolute md:bottom-0 h-200 rounded-lg"
          src="src/assets/Images/hero.jpg"
          alt="Hero"
          style={{height: "645px", width:"750px"}}
        />
      </div>
    </div>
  );
};

export default Header;


//  <img
//     className="absolute inset-0 m-auto w-auto h-96 rounded-lg"
//     src="src/assets/Images/hero.jpg"
//     alt="Hero"
//   /> 