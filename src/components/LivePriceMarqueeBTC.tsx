import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrency } from "../utilities/formatCurrency";
import { btcLogo } from "../assets";

function LivePriceMarqueeBTC() {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
        .then((res) => {
          let price: number = Number(res.data.price).toFixed(2);
          setPrice(price);
        })
        .catch((e) => {
          console.log("Error");
        });
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div className="flex items-center mr-12">
      <img
        className="lg:h-[0.99vw]  mr-2 mb: h-[5vw]"
        src={btcLogo}
        alt="Binance Coin Logo"
      />
      <p className="text-white">{formatCurrency(price)} Bitcoin</p>
    </div>
  );
}

export default LivePriceMarqueeBTC;
