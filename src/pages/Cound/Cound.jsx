import React, { useEffect, useState } from "react";
import './style.css'
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const config = {
  percent: 80,
  stroke: 2,
  colorSlice: "#FD6A54",

};
const config2 = {
  percent: 60,
  stroke: 2,
  colorSlice: "#FD6A54",

};
const config3 = {
  percent: 90,
  stroke: 2,
  colorSlice: "#FD6A54",

};
const config4 = {
  percent: 70,
  stroke: 2,
  colorSlice: "#FD6A54",

};


function Cound() {
  const [update, setUpdate] = useState(config);
  const [update2, setUpdate2] = useState(config2);
  const [update3, setUpdate3] = useState(config3);
  const [update4, setUpdate4] = useState(config4);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate({
        ...config,
        id: 0, // we indicate which component we want to change
        // percent: Math.floor(Math.random() * 100 + 1),
        colorSlice: "#FD6A54",
        fontColor: "#000",
        fontSize: "14px",
        fontWeight: 700,
        animationOff: true
      });

    }, 300);
    return () => clearInterval(interval);

  }, []);
  useEffect(() => {
    const interval2 = setInterval(() => {
      setUpdate2({
        ...config2,
        id: 0, // we indicate which component we want to change
        // percent: Math.floor(Math.random() * 100 + 1),
        colorSlice: "#FD6A54",
        fontColor: "#000",
        fontSize: "14px",
        fontWeight: 700,
        animationOff: true
      });

    }, 300);
    return () => clearInterval(interval2);

  }, []);
  useEffect(() => {
    const interval3 = setInterval(() => {
      setUpdate3({
        ...config3,
        id: 0, // we indicate which component we want to change
        // percent: Math.floor(Math.random() * 100 + 1),
        colorSlice: "#FD6A54",
        fontColor: "#000",
        fontSize: "14px",
        fontWeight: 700,
        animationOff: true
      });

    }, 300);
    return () => clearInterval(interval3);

  }, []);
  useEffect(() => {
    const interval4 = setInterval(() => {
      setUpdate4({
        ...config4,
        id: 0, // we indicate which component we want to change
        // percent: Math.floor(Math.random() * 100 + 1),
        colorSlice: "#FD6A54",
        fontColor: "#000",
        fontSize: "14px",
        fontWeight: 700,
        animationOff: true
      });

    }, 300);
    return () => clearInterval(interval4);

  }, []);

  const newObject = { ...config, ...update };
  const newObject2 = { ...config2, ...update2 };
  const newObject3 = { ...config3, ...update3 };
  const newObject4 = { ...config4, ...update4 };

  return (
    <div className="chart__container flex  justify-center gap-[40px] sm:gap-[20px] sm:flex md:flex lg:gap-[100px]">
      <div className="chart__content"  data-aos="fade-right"
     data-aos-duration="1000">
        <CircularProgressBar {...newObject}>
          <p>
            HTML/CSS/JS
          </p>
        </CircularProgressBar >
      </div>
      <div className="chart__content"  data-aos="fade-right"
     data-aos-duration="2000">
        <CircularProgressBar {...newObject2}>
          <p>
            WORDPRESS
          </p>
        </CircularProgressBar >
      </div>
      <div className="chart__content"  data-aos="fade-right"
     data-aos-duration="2500">
        <CircularProgressBar {...newObject3}>
          <p>
            MARKETING
          </p>
        </CircularProgressBar >
      </div>
      <div className="chart__content"  data-aos="fade-right"
     data-aos-duration="2800">
        <CircularProgressBar {...newObject4}>
          <p>
            PHOTOSHOP
          </p>
        </CircularProgressBar >
      </div>
      {/* <p></p> */}
    </div >

  );
}

export default Cound


