import React from "react";
import { HeroImg } from "../assets";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 rounded-[50px] border-primary border-2 mt-10">
      <div className="flex items-center justify-end">
        <h2 className="text-primary text-[54px]">Новая</h2>
      </div>
      <div className="flex flex-col p-2 gap-2.5 justify-center bg-primary items-strart">
        <div className="inline-flex flex-col w-[245px]">
          <h2 className="text-white inline-block text-[54px]">колекция</h2>
          <a 
            href="#"
            className="text-[#E0BEA2]  h-0 border-b-[1px] self-end border-[#E0BEA2]"
          >
            Смотреть новинки{" "}
            <i className="fa fa-chevron-right ms-2 text-xs"></i>
          </a>
        </div>
      </div>
      <div className="">
        <img
          className="w-full h-full object-cover"
          src={HeroImg}
          alt="Hero Img"
        />
      </div>
    </div>
  );
};

export default Hero;
