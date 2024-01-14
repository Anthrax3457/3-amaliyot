import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home";
// import Head from "../components/head/index";
import Card from "../components/reachCard";

const Router = () => {
  return (
    <div>
      {/* <div className='pt-[90px]'> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/services" element={<Home />} />
      </Routes>
      {/* </div> */}
    </div>
  );
};

export default Router;
