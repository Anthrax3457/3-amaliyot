import React from "react";
import PortImg1 from "../../assets/images/portfolio-01.jpg";
import PortImg2 from "../../assets/images/portfolio-02.jpg";
import PortImg3 from "../../assets/images/portfolio-03.jpg";
import PortImg4 from "../../assets/images/portfolio-04.jpg";
import PortImg5 from "../../assets/images/portfolio-05.jpg";
import PortImg6 from "../../assets/images/portfolio-06.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.css";

export default function Portfolio() {
  const data = [
    [
      {
        id: 1,
        img: PortImg1,
        title: "Awesome Project",
        text: "Branding",
        num: "105",
      },
      {
        id: 2,
        img: PortImg5,
        title: "Awesome Project",
        text: "Atwork",
        num: "107",
      },
    ],
    [
      {
        id: 3,
        img: PortImg3,
        title: "Awesome Project",
        text: "Branding",
        num: "105",
      },
      {
        id: 4,
        img: PortImg6,
        title: "Awesome Project",
        text: "Branding",
        num: "105",
      },
    ],
    [
      {
        id: 5,
        img: PortImg4,
        title: "Awesome Project",
        text: "Branding",
        num: "105",
      },
      {
        id: 6,
        img: PortImg2,
        title: "Awesome Project",
        text: "Consulting",
        num: "105",
      },
    ],
    [
      {
        id: 7,
        img: PortImg1,
        title: "Awesome Project",
        text: "Branding",
        num: "105",
      },
      {
        id: 8,
        img: PortImg6,
        title: "Awesome Project",
        text: "Branding",
        num: "105",
      },
    ],

    [
      {
        id: 9,
        img: PortImg3,
        title: "Awesome Project",
        text: "Branding",
        num: "105",
      },
      {
        id: 10,
        img: PortImg2,
        title: "Awesome Project",
        text: "Branding",
        num: "105",
      },
    ],
  ];
  return (
    <div className="mt-[100px]">
      <div id="portfolio"   data-aos="fade-right" className="portfolio__texts order  mt-10 sm:mt-16 md:mt-20 lg:mt-[100px]">
        <p className="portfolio__name sm:text-start">OUR PORTOFOLIO</p>
        <p className="portfolio__text sm:text-start">
          Discover Our Recent <span className="text-[#33ccc5]">Projects</span>{" "}
          And <span className="text-[#088ec3]">Showcases</span>
        </p>
      </div>
      <div className="swiper__container"   data-aos="fade-up"
        data-aos-duration="3000">
        <Swiper
          loop={true}
          breakpoints={{
            360: {
              slidesPerView:3.5,
            },
            500: {
              slidesPerView:3,
            },
            760: {
              slidesPerView:3.2,
            },
            850: {
              slidesPerView:3.4,
            },
            880: {
              slidesPerView:3.4,
            },
            930: {
              slidesPerView:3.5,
            },
            1000: {
              slidesPerView:3.5,
            },
            1024: {
              slidesPerView:3.3,
            },
          
            1024: {
              slidesPerView:4.5,
            },
          
           
          }}
          slidesPerView={2.5}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid gap-4">
                <div className="grid gap-6 ">
                  {item.map((elem) => (
                    <span key={elem.id} className="hover__bg">
                      <span className="hidden__texts">
                        <span className="hidden__title">{elem.title}</span>
                        <span className="hidden__num">{elem.num}</span>
                        <span className="hidden__text">{elem.text}</span>
                      </span>
                      <img
                        className="hover__bg w-[170px]   h-[120px] rounded-[50px]"
                        src={elem.img}
                        alt=""
                      />
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
