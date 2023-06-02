import React from "react";
import WieWirdBitcoinSicherGekauft from "./WieBitcoinSicherGekauftWird";
import WarumSollteManBitcoinKaufen from "./WarumSollteManBitcoinKaufen";
import Potenzial from "./Potenzial";
import Diversifikation from "./Diversifikation";
import SicherheitUndKontrolle from "./SicherheitUndKontrolle";
import Fazit from "./Fazit";
import WasIstBinance from "./WasIstBinance";

function Article() {
  return (
    <div>
      <WieWirdBitcoinSicherGekauft />
      <div className="flex flex-col justify-items-center space-y-8 ml-5">
        <div>
          <WarumSollteManBitcoinKaufen />
        </div>
        <div className="mt-20"></div>
      </div>
    </div>
  );
}

export default Article;
