import React from "react";

const Modal = () => {
  return (
    <div className="modal__container">
      <div className="modal__items grid text-center">
        <div className="bg-[#f7f7f7] h-[50px] grid items-center hover:bg-[#eee] font-normal hover:text-[#33CCC5]">
          <a href="#" className="">
            Home
          </a>
        </div>
        <hr />
        <div className="bg-[#f7f7f7] h-[50px] grid items-center hover:bg-[#eee] font-normal hover:text-[#33CCC5]">
          <a href="#features" className="">
            Features
          </a>
        </div>
        <hr />
        <div className="bg-[#f7f7f7] h-[50px] grid items-center hover:bg-[#eee] font-normal hover:text-[#33CCC5]">
          <a href="#about" className="">
            About Us
          </a>
        </div>
        <hr />
        <div className="bg-[#f7f7f7] h-[50px] grid items-center hover:bg-[#eee] font-normal hover:text-[#33CCC5]">
          <a href="#services" className="">
            Services
          </a>
        </div>
        <hr />
        <div className="bg-[#f7f7f7] h-[50px] grid items-center hover:bg-[#eee] font-normal hover:text-[#33CCC5]">
          <a href="#portfolio" className="">
            Portfolio
          </a>
        </div>
        <hr />
        <div className="bg-[#f7f7f7] h-[50px] grid items-center hover:bg-[#eee] font-normal hover:text-[#33CCC5]">
          <a href="#contact" className="">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
