import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";
import Logo from "../../assets/images/logo-icon.png";
import Modal from "./modal";
import Aos from "aos";
import "./style.css";

import { Link, animateScroll as scroll } from "react-scroll";

const Head = ({ activeLink }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the state
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000, // animatsiyani bajarish davri
      easing: "ease-in-out", // animatsiya tezligi
      once: true, // faqat bir marta aniqlangan elementni animatsiya qilish
    });
  }, [3]);
  const [menu, setMenu] = useState(true);
  const [modal, setModal] = useState(false);

  return (
    <section className={`header fixed w-[100%]  z-[1000]`}>
      <div className="head relative z-20"> 
        <div className="head__container w-[100%] h-[100px] lg:h-[90px] lg:px-[4%] bg-[#33CCC5] md:gap-4  md:px-[3%] flex justify-between px-[7%]  sm:pl-[15%] items-center gap-0">
          <div className="logo__container flex items-center md:items-start  lg:justify-center md:-mt-3  justify-center gap-2">
            <a
              href="#"
              className="logo__name select-none font-extrabold lg:text-[30px] lg:mt-3 lg:font-extrabold  text-[#fff] text-[30px] md:text-[27px]  -tracking-tight"
            >
              SEO Dream
            </a>
            <img
              className="logo w-[30px] h-[30px] lg:w-8 lg:h-8 md:-mt-1 lg:mt-2"
              src={Logo}
              alt="siteLogo"
            />
          </div>
          <div className="head__icons  block md:hidden">
            {menu ? (
              <button
                className="head__icon text-[35px] text-white"
                onClick={() => {
                  setMenu(false);
                  setModal(true);
                }}
              >
                <CgMenuLeft />
              </button>
            ) : (
              <button
                className="head__icon grid text-[35px] text-white"
                onClick={() => {
                  setMenu(true);
                  setModal(false);
                }}
              >
                <FaXmark />
              </button>
            )}
          </div>
          <div className="hidden md:block">
            <div className="head__items flex items-center justify-center gap-7 text-[white]">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={activeLink === "hero" ? "active" : ""}
                className="navbar-link cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="features"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={activeLink === "features" ? "active" : ""}
                className="navbar-link cursor-pointer"
              >
                Features
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={activeLink === "about" ? "active" : ""}
                className="navbar-link cursor-pointer"
              >
                About Us
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={activeLink === "services" ? "active" : ""}
                className="navbar-link cursor-pointer"
              >
                Services
              </Link>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={activeLink === "portfolio" ? "active" : ""}
                className="navbar-link cursor-pointer"
              >
                Portfolio
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={activeLink === "contact" ? "active" : ""}
                className="navbar-link cursor-pointer"
              >
                Contact Us
              </Link>
              <a href="#contact" className="head__btn">
                Get Your Quote
              </a>
            </div>
          </div>
        </div>
        <div className="head__modal px-[18px]">
          {modal && (
            <div className="head-modal">
              <div data-aos="fade-down">
                <div className="head__modal-content">
                  <Modal />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Head;
