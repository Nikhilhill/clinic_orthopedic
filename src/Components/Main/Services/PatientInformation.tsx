import { WHAT_TO_EXPECT, INSURANCE_PAYMENT, PATIENT_TITLE } from '@/Components/Shared/Consts';
import ListItem from './ListItem';
import SectionWrapper from '../SectionWrapper';

const PatientInformation = () => {
  return (
    <SectionWrapper id="patientinformation">
      <h2 className="text-3xl tracking-wider font-bold text-center my-10 md:mt-20">
        {PATIENT_TITLE}
      </h2>
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 md:gap-10 mt-20">
      <div className="max-w-xs md:max-w-md">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">
          {WHAT_TO_EXPECT.heading}
        </h3>
        <ul className="text-sm md:ml-5 gap-2 md:gap-5 flex flex-col">
          {WHAT_TO_EXPECT.texts.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
      <div className="bg-[#9ae7ff] shadow-xl rounded-2xl p-5 pb-0 max-w-xs md:max-w-md">
        <img src={WHAT_TO_EXPECT.img} alt="Banner1" />
      </div>
    </div>


    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 md:gap-10 mt-20">
      <div className="max-w-xs md:max-w-md">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">
          {INSURANCE_PAYMENT.heading}
        </h3>
        <ul className="text-sm md:ml-5 gap-2 md:gap-5 flex flex-col">
          {INSURANCE_PAYMENT.texts.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
      <div className="bg-[#9ae7ff] shadow-xl rounded-2xl p-5 pb-0 max-w-xs md:max-w-md">
        <img src={WHAT_TO_EXPECT.img} alt="Banner1" />
      </div>
    </div>
    </SectionWrapper>
  );
};

export default PatientInformation;
