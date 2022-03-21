import React from "react";
import Filler from "../components/Filler";
import FAQ from "../components/FAQ";
import InfoSection from "../components/InfoSection";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import "../static/styles/pages/utility.scss";
import {
  Lightbulb,
  WaterDamageTwoTone,
  TvOffTwoTone,
} from "@mui/icons-material";

export default function Utility() {
  return (
    <>
      <Hero
        title="Reliable way to pay for utility"
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sit cum a eum nam vitae dignissimos consequatur enim."
        img={require("../static/images/power.png")}
      />

      <InfoSection
        title="Pay utility bills from your wallet."
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        img={require("../static/images/utils.png")}
        ctaLink="/dashboard"
        ctaText="learn more"
      />

      <ServiceSection
        title1="Pay electricity bills"
        subtitle1="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur, culpa."
        cta1="pay now"
        cta1Link="/dashboard"
        icon1={<Lightbulb fontSize="1" color="warning" />}
        title2="pay water bills"
        subtitle2=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur, culpa."
        cta2="pay now"
        cta2Link="/dashboard"
        icon2={<WaterDamageTwoTone fontSize="1" color="primary" />}
        title3="pay cable subscription"
        subtitle3="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur, culpa."
        cta3="pay now"
        cta3Link="/dashboard"
        icon3={<TvOffTwoTone fontSize="1" color="action" />}
      />
      <Filler
        className="utitlty_filler"
        title="Smooth and seamless process"
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eligendi eaque accusantium a repudiandae, ea dicta facere quisquam nostrum quaerat."
        point1="Safely and conviently pay bills"
        point2="All the tools you want"
      />
      <FAQ />
    </>
  );
}
