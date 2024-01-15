import React from "react";
import "./index.css";
import reachNum1 from "../../assets/images/features-number-01.png";
import reachNum2 from "../../assets/images/features-number-02.png";
import reachNum3 from "../../assets/images/features-number-03.png";
import reachNum4 from "../../assets/images/features-number-04.png";
import reachIcon1 from "../../assets/images/features-icon-white-01.png";
import reachIcon11 from "../../assets/images/features-icon-black-01.png";
import reachIcon2 from "../../assets/images/features-icon-white-02.png";
import reachIcon22 from "../../assets/images/features-icon-black-02.png";
import Cound from "../../pages/Cound/Cound";

const Card = () => {
  const data = [
    {

      number: "01",
      style: {
        borderTop: '3px solid #9d9a9a',
      },
      duration: 600,
      img: reachNum1,
      black: reachIcon11,
      white: reachIcon1,
      title: "Reach Out",
      description:
        "This HTML5 template is based on Bootstrap 5 CSS. You are free to customize anything",
    },
    {
      number: "02",
      duration: 2000,
      img: reachNum2,
      black: reachIcon22,
      white: reachIcon2,
      title: "Implementation",
      description:
        "This HTML5 template is based on Bootstrap 5 CSS. You are free to customize anything",
    },
    {
      number: "03",
      duration: 2000,
      img: reachNum3,
      black: reachIcon11,
      white: reachIcon1,
      title: "Implementation",
      description:
        "This HTML5 template is based on Bootstrap 5 CSS. You are free to customize anything",
    },
    {
      number: "04",
      duration: 2000,
      img: reachNum4,
      black: reachIcon11,
      white: reachIcon1,
      title: "Implementation",
      description:
        "This HTML5 template is based on Bootstrap 5 CSS. You are free to customize anything",
    },
  ];
  return (
    <div className="mt-[100px]">
      <section id="features"
        className="card__section mt-[100px]"
      >
        <div className="cound__bg grid min-[320px]:px-[7%] justify-center  bg-[#f5f5f5]  rounded-[55px]">
          <div className="grid justify-center">
            <div className="card__container bg-[#fff] grid justify-center items-center shadow-lg rounded-[50px] shadow-[#f3f3f3] ">
              {data.map((item, index) => {
                return (
                  <div data-aos="fade-up"
                    data-aos-duration={item.duration} key={index} className={`relative content  -mt-[130px] `}>
                    <div className="grid justify-center" >
                      <p className="card__number ml-[-25px] mt-[90px]">
                        <span className="absolute font-bold mt-3">{item.number}</span>
                      </p>
                      <img className="card__img" src={item.img} alt="" />
                    </div>
                    <div className={`card`}>
                      <div className="cards">
                        <div className='card__content rounded-[50px]'
                        // style={item?.style}
                        >
                          <div className="grid justify-center">
                            <div className="image-container">
                              <img
                                className=" visible-image"
                                src={item.black}
                                alt="Hidden"
                              />
                              <img
                                className="hidden-image"
                                src={item.white}
                                alt="Visible"
                              />
                            </div>
                          </div>
                          <p className="card__name">{item.title}</p>
                          <hr className="card__line" />
                          <p className="card__text">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Cound />
        </div>
      </section>
    </div>
  );
};

export default Card;
