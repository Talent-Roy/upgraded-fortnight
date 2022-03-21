import React from "react";
import GiftcardSampleHero from "../components/GiftcardSampleHero";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";

export default function Wallet() {
  return (
    <div>
      <Hero
        title="Manage your wallet"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc neque, luctus at semper vel, fermentum a nulla."
        img={require("../static/images/e-wallet.png")}
      />
      <InfoSection
        title="We've got a data plan for you!"
        subtitle="Whatever your data needs are, we have a plan for you, our fast, affordable and reliable internet experience will keep you connected anytime, anywhere."
        img={require("../static/images/wallet.png")}
        ctaLink="/dashboard"
        ctaText="Buy now"
      />
    </div>
  );
}
