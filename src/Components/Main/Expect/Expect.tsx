import { ABOUT_US } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';

const Expect = () => {
  return (
    <SectionWrapper id="about">
      <div>
      <h2 className="text-3xl tracking-wider font-bold text-center my-10 md:mt-20">
        {ABOUT_US.about}
      </h2>
        </div>  
      <h3 className="text-2xl tracking-wider font-bold text-center my-10 md:mt-20">
        {ABOUT_US.heading}
      </h3>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
        {ABOUT_US.desc}
      </div>

      <h3 className="text-2xl tracking-wider font-bold text-center my-10 md:mt-20">
        {ABOUT_US.heading1}
      </h3>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
        {ABOUT_US.desc1}
      </div>
    </SectionWrapper>
  );
};

export default Expect;