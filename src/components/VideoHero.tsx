import React from "react";
import BackgroundVideo from "../assets/Background.mp4";
import { arrowdown } from "../assets";

const VideoHero = () => {
  const handleArrowDownClick = () => {
    window.scrollBy({
      top: 510,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex mt-0 w-full">
      <video
        className="w-full h-[510px] object-cover"
        autoPlay
        loop
        muted
        src={BackgroundVideo}
      />
      <div className="absolute w-full h-[510px] bg-black opacity-80" />
      <h1 className="absolute z-10 text-3xl text-center lg:text-4xl lg:-mt-5 lg:ml-24 ss:text-4xl ml-[50px] font-poppins font-semibold text-white translate-y-[50px] mb: ml-1">
        Wie kauft man Bitcoin?
      </h1>
      <h2 className=" absolute z-10 lg:text-4xl text-white text-3xl font-poppins text-center text-m mt-40 mb: ml-2 text-s">
        <br />
        Sicher und schnell Bitcoin mit <u>10%</u> Rabatt auf Gebühren bei
        Binance kaufen.
        <br />
      </h2>

      <div
        className="absolute flex w-20 lg:hidden mb: mt-80 ml-40"
        onClick={handleArrowDownClick}
      >
        <img src={arrowdown} />
      </div>
    </div>
  );
};

export default VideoHero;
