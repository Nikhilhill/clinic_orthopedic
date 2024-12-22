import Home from './Components/Main/Home/Home';
import AboutUs from './Components/Main/About/About';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Header/NavBar';
import Footer from './Components/Footer/Footer';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Treatment from './Components/Main/Treatment/Treatment';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import KneeArthritis from './Components/Main/Treatment/KneeArthritis';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import HipArthritis from './Components/Main/Treatment/HipArthritis';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import HipReplacement from './Components/Main/Treatment/HipReplacement';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ShoulderReplacement from './Components/Main/Treatment/ShoulderReplacement';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import JointReplacement from './Components/Main/Treatment/JointReplacement';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import KneeReplacement from './Components/Main/Treatment/KneeReplacement';
import FaqList from './Components/Main/FAQS/Faqs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Blog from "./Components/Main/Blog/Blog"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Contact from "./Components/Main/Contact/Contact"



function App() {
  return (
    <div className="mx4 sm:mx">
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/faqs' element={<FaqList />} />
      <Route path='/about/about-us' element={<AboutUs />} />
      <Route path='/about/blog-updates' element={<Blog />} />
      <Route path='/treatment' element={<Treatment />} />
      <Route path="/treatment/knee-arthritis" element={<KneeArthritis />} />
      <Route path="/treatment/hip-arthritis" element={<HipArthritis />} />
      <Route path="/treatment/hip-replacement" element={<HipReplacement />} />
      <Route path="/treatment/shoulder-replacement" element={<ShoulderReplacement />} />
      <Route path="/treatment/joint-replacement" element={<JointReplacement />} />
      <Route path="/treatment/knee-replacement" element={<KneeReplacement />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
