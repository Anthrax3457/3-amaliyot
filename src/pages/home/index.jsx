import React, { useState } from "react";
import "./index.css";
import HomeImage from "../../assets/images/banner-right-image.png";
import Card from "../../components/reachCard/index";
import About from "../../components/about";
import Services from "../../components/services";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Portfolio from "../../components/portfolio";
// import Cound from "../Cound/Cound.jsx";
// import Head from "../../components/head";

// react-scroll
// import { Link, animateScroll as scroll } from "react-scroll";
import Head from "../../components/head/index.jsx";

const Home = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  return (
    <>
      <Head activeLink={activeLink} />
      <div id="hero" className="home__container grid justify-center ">
        <div data-aos="fade-right" className="home__content mt-[160px]">
          <div className="home__items grid justify-center items-center text-center">
            <div className="home__item">
              <p className="home__item-name text-[15px] font-normal text-[#2A2A2A]">
                Agency Status:
              </p>
              <p className="home__item-text text-[20px] font-bold text-[#2A2A2A]">
                Ready Work
              </p>
            </div>
            <div className="home__item">
              <p className="home__item-name text-[15px] font-normal text-[#2A2A2A]">
                Price:
              </p>
              <p className="home__item-text text-[20px] font-bold text-[#2A2A2A]">
                {" "}
                $720/Month
              </p>
            </div>
            <div className="home__item">
              <p className="home__item-name text-[15px] font-normal text-[#2A2A2A]">
                Schedules
              </p>
              <p className="home__item-text text-[20px] font-bold text-[#2A2A2A]">
                $450/Meeting
              </p>
            </div>
          </div>
          <div className="home__title-content">
            <hr className="home__line" />
            <p className="home__title">SEO & Digital Marketing Agency</p>
          </div>
          <div className="home__btn-content grid justify-center">
            <button className="home__btn">Get Your Qoute</button>
          </div>
        </div>
        <div data-aos="fade-left" className="image__conten mt-[20px]">
          <img className="home__image" src={HomeImage} alt="" />
        </div>
      </div>
      <div>
        <div className="mt-[100px]"></div>
        <div id="features">
          <Card />
        </div>
      </div>
      <div>
        <div className="mt-[100px]"></div>
        <div id="about">
          <About />
        </div>
      </div>
      <div>
        <div className="mt-[100px]"></div>
        <div id="services">
          <Services />
        </div>
      </div>
      <div>
        <div className="mt-[100px]"></div>
        <div id="portfolio">
          <Portfolio />
        </div>
      </div>
      <div>
        <div className="mt-[100px]"></div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
