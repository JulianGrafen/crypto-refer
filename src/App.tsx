import { useState } from "react";
import Navbar from "./components/Navbar";
import VideoHero from "./components/VideoHero";
import PriceMarquee from "./components/PriceMarquee";
import Article from "./components/Article";

import News from "./components/News";

const App = () => (
  <div className="relative overflow-x-hidden	">
    <Navbar />
    <PriceMarquee />

    <div>
      <VideoHero />
    </div>
    <div>
      <Article />
    </div>
    <div className="w-full h-[8000px] bg-gradient-to-b from-videoBlueSecondary to-videoBluePrimary " />
  </div>
);

export default App;
