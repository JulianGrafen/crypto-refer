import React, { useState } from "react";
import "./WarumSollteManBitcoinKaufen.css";
import Potenzial from "./Potenzial";
import Diversifikation from "./Diversifikation";
import SicherheitUndKontrolle from "./SicherheitUndKontrolle";
import { arrowdown } from "../assets";

function WarumSollteManBitcoinKaufen() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  const handleClick1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleClick2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const handleClick3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const handleClick4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  return (
    <div>
      <h1
        className="heading underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold "
        onClick={handleClick1}
      >
        WARUM SOLLTE MAN BITCOIN KAUFEN? ⮟
      </h1>
      <div className={`content ${isExpanded1 ? "expanded" : ""}`}>
        Bitcoin (BTC) ist die <b>bekannteste Kryptowährung</b> und hat seit
        ihrer Gründung im Jahr 2009 eine{" "}
        <b>unglaubliche Wertentwicklung erlebt.</b>
        <br />
        Im Jahr 2010 wurde der erste Bitcoin-Preis bekannt gegeben - damals
        betrug der Wert von einem Bitcoin weniger als einen Cent. <br />
        Im April 2021 erreichte der{" "}
        <b>Bitcoin-Preis ein Allzeithoch von über 60.000 US-Dollar.</b> <br />
        Ein großer Vorteil von Bitcoin gegenüber von Aktien ist dass auch nur
        Bruchteile eines Bitcoins gekauft werden können. So kann man bereits mit
        nur 5€ in Bitcoin investieren.
        <br />
        Aber warum ist Bitcoin eine gute Möglichkeit zum Investieren?
        <br />
        <br />
        <b>Im Wesentlichen gibt es drei Gründe:</b>
        <br />
        <br />
        <div>
          <h2
            className="underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold text-sm mb: text-base"
            onClick={handleClick2}
          >
            1. POTENZIAL FÜR ZUKÜNFTIGES WACHSTUM ⮟
          </h2>
          <br />
          <div className={`content ${isExpanded2 ? "expanded" : ""}`}>
            <Potenzial />
          </div>
          <h2
            className="underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold text-sm mb: text-base"
            onClick={handleClick3}
          >
            2. DIVERSIFKATION IHRES PORTFOLIOS ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ⮟
          </h2>
          <br />

          <div className={`content ${isExpanded3 ? "expanded" : ""}`}>
            <Diversifikation />
          </div>
          <h2
            className="underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold text-sm mb: text-base"
            onClick={handleClick4}
          >
            3. SICHERHEIT UND KONTROLLE ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
            ‎ ‎ ‎ ⮟
          </h2>
          <br />

          <div className={`content ${isExpanded4 ? "expanded" : ""}`}>
            <SicherheitUndKontrolle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarumSollteManBitcoinKaufen;
