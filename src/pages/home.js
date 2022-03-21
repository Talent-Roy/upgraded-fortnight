import React from "react";
import InfoSection from "../components/InfoSection";
import AppSection from "../components/AppSection";
import Partners from "../components/Partners";
import ServiceSection from "../components/ServiceSection";
// import Explainer from "../components/Explainer";
import Support from "../components/Support";
// import Reviews from "../components/Reviews";
import Testimonials from "../components/Testimonials";
import {
  SimCardAlert,
  AccountBalanceWalletOutlined,
  MoneyOff,
} from "@mui/icons-material";
import GiftCardHero from "../components/GiftCardHero";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <GiftCardHero />
      {/* <Hero
        title="Fast and reliable solutions at your finger tips"
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sit cum a eum nam vitae dignissimos consequatur enim."
        img={require("../static/images/hero.gif")}
      /> */}
      <InfoSection
        title="Reliable Giftcard Trading"
        subtitle="Buy and sell from over 20 countries around the world"
        img={require("../static/images/about.png")}
        ctaLink="/giftcard"
        ctaText="learn more"
      />
      <ServiceSection
        title1="top up on the go"
        subtitle1="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur, culpa."
        cta1="learn more"
        cta1Link="/topup"
        icon1={
          <SimCardAlert
            fontSize="1"
            color="active"
            style={{ color: "var(--primary)" }}
          />
        }
        title2="pay utility bills"
        subtitle2=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur, culpa."
        cta2="learn more"
        cta2Link="/utility"
        icon2={
          <MoneyOff
            fontSize="1"
            color="active"
            style={{ color: "var(--primary)" }}
          />
        }
        title3="transfer and recieve"
        subtitle3="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur, culpa."
        cta3="learn more"
        cta3Link="/wallet"
        icon3={
          <AccountBalanceWalletOutlined
            fontSize="1"
            color="active"
            style={{ color: "var(--primary)" }}
          />
        }
      />
      {/* <Reviews /> */}
      {/* <Explainer /> */}
      <AppSection />
      <Support />
      <Partners />
      <Testimonials />
    </div>
  );
};

export default Home;
