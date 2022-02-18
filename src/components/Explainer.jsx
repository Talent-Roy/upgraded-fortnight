import React from "react";
import ExpSlider from "./ExpSlider";
import "../static/styles/components/explainer.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Slide from "react-reveal/Slide";

const Explainer = () => {
  return (
    <div className="explainer">
      <div className="content_wrap">
        <div className="slider_wrap box">
          <Slide left duration={1500}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </Slide>
        </div>
        <div className="explainer_slider_wrap box">
          <ExpSlider />
        </div>
      </div>
    </div>
  );
};

export default Explainer;
