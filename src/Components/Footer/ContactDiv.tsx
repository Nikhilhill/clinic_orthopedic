import { FooterData } from '../Shared/Consts';

const ContactDiv = () => {
  return (
    <div className="bg-[#aed4ff] mt-2.5 p-10 md:px-16">
      <div className="max-w-[1250px] m-auto flex justify-center gap-14 flex-wrap md:flex-nowrap">
        <div className="font-bold">
        <h3 className="text-2xl font-bold" style={{marginBottom: "10px"}}>
          Book Your Appointment
          </h3>
          <p>{FooterData.phone}</p>
          <p>{FooterData.email}</p>
        </div>

        <div className="font-bold">
        <h3 className="text-2xl font-bold" style={{marginBottom: "10px"}}>
          Clinic Hours
          </h3>
          <p>Monday to Saturday-  Afternoon 1:30pm to 3pm</p>
          <p>Evening:7:30pm to 10pm </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDiv;
