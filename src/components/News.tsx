import { useEffect } from "react";
import { useState } from "react";

function News() {
  const [showReasons, setShowReasons] = useState(false);

  const handleReasonsClick = () => setShowReasons(!showReasons);

  return (
    <div className="h-100 w-1/3  absolute mb: w-fit text-sm">
      <h1 className="ml-2 mb-3 mt-2 underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold mb: text-center text-base ">
        WIE BITCOIN SICHER GEKAUFT WIRD
      </h1>
      <div>
        <article className="text-xl text-white mb-4 ml-2 mr-2 mb:text-s inline-block">
          <p className="text-center">
            Willkommen auf wie-kauft-man-bitcoin.de !
          </p>
          <br />
          Hier erfahren Sie Schritt für Schritt, wie Sie{" "}
          <b>sicher und schnell</b> Bitcoin auf Binance kaufen können und dabei
          von einem{" "}
          <b>
            exklusiven
            <p className="" style={{ color: "yellow" }}>
              <b>10% Rabatt </b> auf die Handelsgebühren profitieren.
            </p>
            <br />
          </b>
          <br />
          Außerdem finden Sie{" "}
          <b>
            alles, was Sie über den Kauf von Kryptowährungen über die bekannte
            Plattform Binance wissen müssen.
          </b>{" "}
          <br />
          Wir sind der Meinung, dass Krypto-Investitionen eine <b>lohnende </b>
          Möglichkeit sind, um Ihr Portfolio zu diversifizieren und{" "}
          <b>Ihr Vermögen zu erhöhen.</b>
          <br />
          Bitcoin (BTC) ist die <b>
            wichtigste & bekannteste Kryptowährung
          </b>{" "}
          überhaupt.
          <br />
          Viele Investoren sind sich einig,{" "}
          <b>dass Bitcoin mittlerweile in jedes Portfolio gehört.</b>
          <br />
          <br />
        </article>
      </div>
      <div>
        <h1 className="ml-0 mb-3 mt-2 underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold text-xl mb: text-base">
          WARUM SOLLTE MAN BITCOIN KAUFEN?
        </h1>
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
      </div>
      <h2 className="ml-0 underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold text-sm mb: text-base">
        1. POTENZIAL FÜR ZUKÜNFTIGES WACHSTUM
        <br />
      </h2>
      Bitcoin ist eine <b>dezentralisierte Währung</b>, die von keiner Regierung
      oder Institution kontrolliert wird.
      <br />
      Es gibt eine <b>begrenzte Anzahl von Bitcoin</b>, die jemals erstellt
      werden können (21 Millionen), was dazu beiträgt, dass der Preis von
      Bitcoin steigt, wenn die Nachfrage steigt. <br />
      Eine Manipulation und Entwertung der Währung durch andere, ist hierbei{" "}
      <b>unmöglich durchzuführen. </b>
      <br />
      Da immer mehr Menschen Kryptowährungen entdecken und{" "}
      <b>
        Unternehmen wie Tesla und Square Milliarden von Dollar in Bitcoin
        investieren, steigt die Nachfrage nach Bitcoin weiter an.
      </b>{" "}
      <br />
      In den 14 jahren seit seines Bestehens, ist der Bitcoin Preis von
      0,000994$ im Jahr 2009 auf <b>über 60.000$ im Jahr 2021 </b> gestiegen.
      <br />
      Was einer durschnittlichen <b>Wachstumsrate von 1.576% pro Jahr </b>{" "}
      entspricht.
      <br />
      Viele Experten glauben, dass Bitcoin in den kommenden Jahren durch
      Verknappung und immer steigender Nachfrage{" "}
      <b> noch erhebliches Wachstumspotenzial hat.</b>
      <br />
      <br />
      <h2 className="ml-0 underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold text-sm mb: text-base">
        2. DIVERSIFKATION IHRES PORTFOLIOS
      </h2>
      Eine der Grundregeln des Investierens ist es, Ihr{" "}
      <b> Portfolio zu diversifizieren.</b>
      <br />
      Indem Sie in verschiedene Anlageklassen investieren, können Sie das{" "}
      <b>Risiko reduzieren</b>, dass der Verlust einer Anlageklasse Ihr gesamtes
      Portfolio beeinträchtigt.
      <br />
      <b>Bitcoin bietet eine einzigartige Möglichkeit</b>, Ihr Portfolio zu
      diversifizieren, da es eine relativ neue und unkorrelierte Anlageklasse
      ist.
      <br />
      Das bedeutet, dass der Preis von Bitcoin nicht unbedingt mit dem Preis von
      Aktien, Anleihen oder anderen Anlageklassen korreliert.
      <br />
      <br />
      <h2 className="ml- underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold text-sm mb: text-base">
        3.SICHERHEIT UND KONTROLLE
      </h2>
      Als{" "}
      <b>
        dezentralisierte Währung bietet Bitcoin ein hohes Maß an Sicherheit und
        Kontrolle.
      </b>{" "}
      Im Gegensatz zu traditionellen Währungen, bei denen eine Bank oder
      Regierung den Kontrolle hat, ist Bitcoin{" "}
      <b>ein Vermögenswert, den Sie selbst kontrollieren können.</b> <br />
      Sie können Bitcoin sicher aufbewahren, indem Sie sie in einer Wallet
      speichern, die nur Sie kontrollieren.
      <br />
      <br />
      <h2 className="ml-0 mb-3 mt-2 underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold text-sm mb: text-base">
        FAZIT
      </h2>
      Bitcoin ist eine{" "}
      <b>
        sehr gute Möglichkeit zum Investieren und bietet großes Potenzial für
        zukünftiges Wachstum, Diversifikation Ihres Portfolios und Sicherheit
        und Kontrolle.
      </b>{" "}
      <br />
      <br />
      Wenn Sie sich{" "}
      <b>
        kostenlos über unseren{" "}
        <a
          href="https://accounts.binance.com/register?ref=YSY8VOEH"
          target="_blank"
          style={{ color: "yellow" }}
        >
          Link
        </a>{" "}
        bei Binance Registrieren, erhalten Sie einen exklusiven 10% Rabatt auf
        Handelsgebühren, egal ob Sie Bitcoin, Ethereum oder andere
        Kryptowährungen kaufen.
      </b>
      <h1 className="ml-0 mb-3 mt-2 underline underline-red underline-rounded underline-thick underline-offset text-2xl text-white font-poppins font-semibold text-xl mb: text-base">
        WAS IST BINANCE?{" "}
      </h1>
      <b>
        {" "}
        Binance ist eine der größten und zuverlässigsten
        Krypto-Handelsplattformen der Welt.
      </b>{" "}
      <br />
      Mit Binance können Sie eine <b>Vielzahl von Kryptowährungen kaufen</b>,
      verkaufen und handeln, darunter Bitcoin, Ethereum, Litecoin und viele
      weitere.
      <br />
      Was Binance von anderen Plattformen unterscheidet, ist die
      <b> Benutzerfreundlichkeit und die Sicherheit </b>, die es seinen Nutzern
      bietet.
      <br />
      <br />
      Durch das Registrieren auf Binance <b>
        über unseren exklusiven Link
      </b>{" "}
      erhalten Sie <b>viele Vorteile.</b>
      <br />
      Zum einen erhalten Sie einen
      <b> exklusiven Rabatt in Höhe von 10% auf die Handelsgebühren.</b>
      <br />
      Zum anderen haben Sie{" "}
      <b>
        Zugang zu einer breiten Palette von Krypto-Investitionen, die Sie
        anderswo nicht finden können.
      </b>{" "}
      <br />
    </div>
  );
}

export default News;
