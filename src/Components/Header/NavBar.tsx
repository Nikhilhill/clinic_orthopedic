import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isTreatmentDropdownVisible, setTreatmentDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutDropdownRef = useRef(null);
  const treatmentDropdownRef = useRef(null);

  const toggleAboutDropdown = () => {
    setAboutDropdownVisible(!isAboutDropdownVisible);
    setTreatmentDropdownVisible(false); // Close Treatment dropdown
  };

  const toggleTreatmentDropdown = () => {
    setTreatmentDropdownVisible(!isTreatmentDropdownVisible);
    setAboutDropdownVisible(false); // Close About dropdown
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setAboutDropdownVisible(false);
    setTreatmentDropdownVisible(false);
  };

  const handleItemClick = () => {
    setAboutDropdownVisible(false);
    setTreatmentDropdownVisible(false);
    setMobileMenuOpen(false);
  };

  // const closeDropdowns = () => {
  //   // setAboutDropdownVisible(false);
  //   // setTreatmentDropdownVisible(false);
  // };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target) &&
        treatmentDropdownRef.current &&
        !treatmentDropdownRef.current.contains(event.target)
      ) {
        // closeDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-white z-50 flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo with Padding */}
      <NavLink
        to="/"
        className="text-lg md:text-xl font-semibold text-primary tracking-wide hover:text-secondary transition-all duration-300 px-4"
      >
        Dr. Akshay Jadhav
      </NavLink>

      {/* Hamburger Menu */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-3 focus:outline-none"
      >
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-start gap-5 font-medium px-4">
        <NavLink to="/">
          <li className="py-1 px-3 hover:bg-gray-100 rounded-lg">HOME</li>
        </NavLink>

        <li className="relative" ref={aboutDropdownRef}>
          <button
            onClick={toggleAboutDropdown}
            className="py-1 px-3 hover:bg-gray-100 rounded-lg"
          >
            ABOUT US
          </button>
          {isAboutDropdownVisible && (
            <ul className="absolute bg-white shadow-lg mt-2 py-2 w-40 border border-gray-200 left-0" style={{ marginTop: "17px" }}>
              <NavLink to="/about/about-us" onClick={handleItemClick}>
                <li className="px-4 py-2 hover:bg-gray-100">About</li>
              </NavLink>
              <NavLink to="/about/blog-updates" onClick={handleItemClick}>
                <li className="px-4 py-2 hover:bg-gray-100">Blog/Updates</li>
              </NavLink>
            </ul>
          )}
        </li>

        <li className="relative" ref={treatmentDropdownRef}>
          <button
            onClick={toggleTreatmentDropdown}
            className="py-1 px-3 hover:bg-gray-100 rounded-lg"
          >
            TREATMENT
          </button>
          {isTreatmentDropdownVisible && (
            <ul className="absolute bg-white shadow-lg mt-2 py-2 w-40 border border-gray-200 left-0" style={{ marginTop: "17px" }}>
              <NavLink to="/treatment/knee-arthritis" onClick={handleItemClick}>
                <li className="px-4 py-2 hover:bg-gray-100">Knee Arthritis</li>
              </NavLink>
              <NavLink to="/treatment/hip-arthritis" onClick={handleItemClick}>
                <li className="px-4 py-2 hover:bg-gray-100">Hip Arthritis</li>
              </NavLink>
              <NavLink to="/treatment/knee-replacement" onClick={handleItemClick}>
                <li className="px-4 py-2 hover:bg-gray-100">Knee Replacement</li>
              </NavLink>
              <NavLink to="/treatment/hip-replacement" onClick={handleItemClick}>
                <li className="px-4 py-2 hover:bg-gray-100">Hip Replacement</li>
              </NavLink>
              <NavLink
                to="/treatment/shoulder-replacement"
                onClick={handleItemClick}
              >
                <li className="px-4 py-2 hover:bg-gray-100">
                  Shoulder Replacement
                </li>
              </NavLink>
              <NavLink to="/treatment/joint-replacement" onClick={handleItemClick}>
                <li className="px-4 py-2 hover:bg-gray-100">Joint Replacement</li>
              </NavLink>
            </ul>
          )}
        </li>

        <NavLink to="/faqs">
          <li className="py-1 px-3 hover:bg-gray-100 rounded-lg">FAQs</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 px-3 hover:bg-gray-100 rounded-lg">CONTACT</li>
        </NavLink>
      </ul>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-start gap-5 font-medium absolute top-16 left-0 bg-white shadow-lg w-full py-4 px-4">
          <NavLink to="/" onClick={handleItemClick}>
            <li className="py-1 px-3">HOME</li>
          </NavLink>
          <li>
            <button
              onClick={toggleAboutDropdown}
              className="py-1 px-3 hover:bg-gray-100 rounded-lg"
            >
              ABOUT US
            </button>
            {isAboutDropdownVisible && (
              <ul className="ml-4">
                <NavLink to="/about/about-us" onClick={handleItemClick}>
                  <li className="py-1 px-3">About</li>
                </NavLink>
                <NavLink to="/about/blog-updates" onClick={handleItemClick}>
                  <li className="py-1 px-3">Blog/Updates</li>
                </NavLink>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={toggleTreatmentDropdown}
              className="py-1 px-3 hover:bg-gray-100 rounded-lg"
            >
              TREATMENT
            </button>
            {isTreatmentDropdownVisible && (
              <ul className="ml-4">
                <NavLink to="/treatment/knee-arthritis" onClick={handleItemClick}>
                  <li className="py-1 px-3">Knee Arthritis</li>
                </NavLink>
                <NavLink to="/treatment/hip-arthritis" onClick={handleItemClick}>
                  <li className="py-1 px-3">Hip Arthritis</li>
                </NavLink>
                <NavLink
                  to="/treatment/knee-replacement"
                  onClick={handleItemClick}
                >
                  <li className="py-1 px-3">Knee Replacement</li>
                </NavLink>
                <NavLink
                  to="/treatment/hip-replacement"
                  onClick={handleItemClick}
                >
                  <li className="py-1 px-3">Hip Replacement</li>
                </NavLink>
                <NavLink
                  to="/treatment/shoulder-replacement"
                  onClick={handleItemClick}
                >
                  <li className="py-1 px-3">Shoulder Replacement</li>
                </NavLink>
                <NavLink
                  to="/treatment/joint-replacement"
                  onClick={handleItemClick}
                >
                  <li className="py-1 px-3">Joint Replacement</li>
                </NavLink>
              </ul>
            )}
          </li>
          <NavLink to="/faqs" onClick={handleItemClick}>
            <li className="py-1 px-3">FAQs</li>
          </NavLink>
          <NavLink to="/contact" onClick={handleItemClick}>
            <li className="py-1 px-3">CONTACT</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
