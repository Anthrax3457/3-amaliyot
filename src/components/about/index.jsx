import React from "react";
import AboutImg from "../../assets/images/about-left-image.png";
import "./index.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
  <div  className="mt-[100px]">
      <div  id="about" className="about__container">
      <div  data-aos="fade-right"className="about__images-content grid justify-center ice">
        <img className="about__image " src={AboutImg} alt="" />
      </div>
      <div className="about sm:mt-[30px]"  data-aos="fade-left">
        <div className="about__items mt-0">
          <p className="about__name">ABOUT US</p>
          <p className="about__title">
            Top <span className="text-[#33ccc5]">Marketing</span> Agency &
            Consult Your Website <span className="text-[#088ec3]">With Us</span>
          </p>
        </div>
        <div className="about__texts-contaniner sm:mt-[30px] ">
          <div className="about__text-content">
            <p className="about__number">750+</p>
            <p className="about__text">Projects Finished</p>
          </div>
          <div className="about__text-content">
            <p className="about__number">340+</p>
            <p className="about__text">Happy Clients</p>
          </div>
          <div className="about__text-content">
            <p className="about__number">128+</p>
            <p className="about__text">Awards</p>
          </div>
        </div>
        <p className="about__texts mt-5">
          <span className=" text-[#088ec3]">SEO Dream</span> is free digital
          marketing CSS template provided by TemplateMo website. You are allowed
          to use this template for your business websites. Please DO NOT
          redistribute this template ZIP file on any Free CSS collection
          websites. You may contact us for more information. Thank you.
        </p>
        <div className="about__btn-content">
          <a href="#" className="about__btn mt-9">
            Discover Company
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
