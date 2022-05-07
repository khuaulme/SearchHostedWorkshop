import React from "react";
import LOGO from "../images/Logomark.svg";
import LOGO_WHITE from "../images/MongoDB_Logo_White.svg";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center bg-slateblue text-white px-20">
      <div className="flex text-2xl  ">
        <img className="mr-2 my-auto h-16" src={LOGO_WHITE} alt="logo" />
      </div>
      <div className="flex text-4xl mr-20 text-springgreen font-noto">
        {" "}
        MongoDB Day with AWS & Accenture
      </div>
      <div className="flex text-2xl font-noto"> May 11, 2022</div>
    </div>
  );
};

export default Header;
