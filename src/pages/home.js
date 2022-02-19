import React from "react";
import AboutSection from "../components/AboutSection";
import AppSection from "../components/AppSection";
import PageHeader from "../components/PageHeader";
import Partners from "../components/Partners";
import ServiceSection from "../components/ServiceSection";
// import Explainer from "../components/Explainer";
import bckgImg from "../static/images/hero-bg.jpg";
import Support from "../components/Support";
// import Reviews from "../components/Reviews";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <PageHeader backgroundImage={bckgImg} />
      <AboutSection />
      <ServiceSection />
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
