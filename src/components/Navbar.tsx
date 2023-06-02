import { useState } from "react";
import { menu, close, cryptoDailyLogo } from "../assets";

import "../index.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-full h-12 bg-black mb: hidden">
      <div className=" mb: hidden flex  justify-end ">
        <img
          src={toggle ? close : menu}
          className="mr-3 mt-4 mb:invisible"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "translate-x-0" : "translate-x-full"
          } ease-in-out duration-300 mt-10 opacity-90 rounded-md absolute -translate-z-10  w-[150px] h-[250px] bg-white z-10  bg-gradient-to-b from-videoBlueSecondary to-videoBluePrimary lg:hidden`}
        >
          <ul className="mt-12 list-none space-y-10 ">
            <li className="ml-10 font-poppins font-semibold text-white"></li>
            <li className="ml-10 font-poppins font-semibold text-white"></li>
            <li className="ml-10 font-poppins font-semibold text-white"></li>
          </ul>
        </div>
      </div>
      <ul className="xs:visible mb: -translate-y-5 items-center flex justify-between invisible ">
        <li className="font-poppins ml-20 text-white"> </li>
        <li className="font-poppins text-white"></li>
        <li className="font-poppins mr-20 text-white"></li>
      </ul>
    </nav>
  );
};

export default Navbar;
