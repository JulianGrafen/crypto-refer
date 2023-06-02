import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrency } from "../utilities/formatCurrency";
import { xrpLogo } from "../assets";

function LivePriceMarqueeXRP() {
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT")
        .then((res) => {
          let price: number = parseFloat(res.data.price);
          setPrice(price);
        })
        .catch((e) => {
          console.log("Error");
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center mr-12">
      <img
        className="lg:h-[0.99vw] mr-2 mb: h-[5vw]"
        src={xrpLogo}
        alt="XRP Logo"
      />
      <p className="text-white">{formatCurrency(price)} XRP</p>
    </div>
  );
}

export default LivePriceMarqueeXRP;
