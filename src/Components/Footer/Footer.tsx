import SectionWrapper from '../Main/SectionWrapper';
import { FooterData } from '../Shared/Consts';
import ContactDiv from './ContactDiv';

const Footer = () => {
  return (
    <SectionWrapper id="footer">
    <div className="bg-[#aed4ff] mt-20 p-10 md:px-16">
      <div className="max-w-[1250px] m-auto flex justify-center gap-14 flex-wrap md:flex-nowrap">
        <div className="font-bold">
          <img width={50} src={FooterData.logo} alt="Logo" />
          <h3 className="text-2xl font-bold">
          Visit Us
          </h3>
          {FooterData.addresses.map((address, index) => (
            <p className="my-3" key={index}>
              {address}
            </p>
          ))}
        </div>
        <ContactDiv />
      </div>
    </div>
    </SectionWrapper>
  );
};

export default Footer;
