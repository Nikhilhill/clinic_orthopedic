import Header from "@/Components/Header/Header";
import "../../../index.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Treatment from "../Treatment/Treatment";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import TestimonialCarousel from "../Testimonials/Testimonials";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import DoctorCard from "../AboutDoctor/AboutDoctor"

const Home = () => {

  return (
    <>
    <Header />
    <Treatment />
    <DoctorCard />
    <TestimonialCarousel />
    </>
  );
};

export default Home;
