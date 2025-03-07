import React from "react";
import { HeaderLogo } from "../assets";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mx-auto container flex justify-between items-center py-3 px-4 border-b-2 border-[#750000] ">
      <div className="flex gap-4 items-center justify-center">
        <img src={HeaderLogo} alt="Header Logo" />
        <div className="flex flex-col gap-1.5 items-start justify-center">
          <h2 className="text-[#750000] text-4xl">Red Clothes</h2>
          <p className="font-medium text-[#533333]">
            Магазин одежды для практики{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <a href="/">
          <i className="fa me-2 fa-cart-shopping text-primary text-2xl"></i>
          <span></span>
        </a>
        <Link to="/Favorite">
          <i className="fa-regular me-2 fa-heart  text-primary text-2xl hover:bg-primary"></i>
        </Link>
        <a href="">
          <i className="fa-regular me-2 fa-user text-primary text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
