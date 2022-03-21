import React from "react";
import FAQ from "../components/FAQ";
import GiftCardHero from "../components/GiftCardHero";
import GiftcardSampleHero from "../components/GiftcardSampleHero";
import HowToSell from "../components/HowToSell";
import RateCalc from "../components/RateCalc";

export default function GiftCard() {
  return (
    <div>
      <GiftCardHero />
      <GiftcardSampleHero />
      <RateCalc />
      <HowToSell />
      <FAQ />
    </div>
  );
}
