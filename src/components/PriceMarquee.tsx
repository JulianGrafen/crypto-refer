import React from "react";
import Marquee from "react-fast-marquee";
import LivePriceMarqueeBTC from "./LivePriceMarqueeBTC";
import LivePriceMarqueeETH from "./LivePriceMarqueeETH";
import LivePriceMarqueeBNB from "./LivePriceMarqueeBNB";
import LivePriceMarqueeXRP from "./LivePriceMarqueeXRP";

function PriceMarquee() {
  return (
    <div className="flex w-full z-10 h-10 bg-black">
      <Marquee gradient={false} className="">
        <LivePriceMarqueeBTC />
        <LivePriceMarqueeETH />
        <LivePriceMarqueeBNB />
        <LivePriceMarqueeXRP />
      </Marquee>
    </div>
  );
}

export default PriceMarquee;
