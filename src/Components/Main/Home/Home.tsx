import hero from '@/assets/images/hero.png';
import SectionWrapper from '../SectionWrapper';
import { HOME } from '@/Components/Shared/Consts';
import { WHY_CHOOSE_US } from '@/Components/Shared/Consts';
import { SparklesIcon } from '@heroicons/react/16/solid';
import "../../../index.css"
import { Button } from '@/Components/Button/Book';

const Home = () => {
  const handleClick = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className=" tracking-wider md:tracking-normal max-w-xs lg:max-w-xl ">
          <h1 className="lg:text-4xl text-4xl font-bold">
          {HOME.title}
          </h1>
          <h1 className="lg:text-4xl text-4xl font-bold opacity-50">
          {HOME.doctor}
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
          {HOME.desc}
          </p>
        <div className=" tracking-wider md:tracking-normal max-w-xs lg:max-w-xl ">
          <h1 className="lg:text-2xl text-4xl font-bold">
          Why Choose Us?
          </h1>
          <div className="lg:min-w-[345px]">
          <ul className=" lg:ml-5 min-h-[310px] sm:min-h-[225px] md:min-h-[190px] lg:min-h-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-2">
            {WHY_CHOOSE_US.map((text) => (
              <li className="flex lg:items-center gap-3 text-xm xs:text-lg">
              <SparklesIcon className="h-3 w-3 text-[#2c84f7]" />
              <p>{text}</p>
            </li>
            ))}
          </ul>
          <p className="text-md md:text-base md:text-md my-10">
          Book an appointment today and take the first step toward better mobility!
          </p>
          <div className="lg:ml-5 mt-5">
            <Button handleClick={handleClick}/>
            {/* <button className='bookingButton' onClick={handleClick}>Book Your Appointment</button> */}
          </div>
        </div>
        </div>
        </div>
        <div className="max-w-xs md:max-w-none">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
