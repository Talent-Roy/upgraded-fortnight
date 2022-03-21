import InfoSection from "../components/InfoSection";
import HowToCards from "../components/HowToCards";
import Filler from "../components/Filler";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import "../static/styles/pages/topup.scss";

export default function Topup() {
  return (
    <>
      <Hero
        title="fast and reliable services you can trust."
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sit cum a eum nam vitae dignissimos consequatur enim."
        img={require("../static/images/about.png")}
      />
      <InfoSection
        title="We've got a data plan for you!"
        subtitle="Whatever your data needs are, we have a plan for you, our fast, affordable and reliable internet experience will keep you connected anytime, anywhere."
        img={require("../static/images/dataplans.jpg")}
        ctaLink="/dashboard"
        ctaText="Buy now"
      />
      <HowToCards />
      <Filler
        className="topup_filler"
        title="Fast and Reliable Transaction"
        subtitle="Esetech helps you convert your airtime to cash safely and smoothly. All payouts are automated and transactions are secured from end-to-end."
        point1="Safe and Convenient Exchange"
        point2="All the tools you want"
      />
      <FAQ />
    </>
  );
}
