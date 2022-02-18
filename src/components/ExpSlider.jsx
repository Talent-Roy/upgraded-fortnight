import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../static/styles/components/exp-slider.scss";
import { Pagination } from "swiper";
import Slide from "react-reveal/Slide";

export default function ExpSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Slide right duration={1500}>
      <div className="exp_slider">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text_content">
              <h2>Show your loved ones you care.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id
                modi illum cupiditate error quas non velit maxime optio qui
                eaque, ullam cum et deleniti, nisi debitis tenetur pariatur
                itaque.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text_content">
              <h2>Show your family & friends you care.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id
                modi illum cupiditate error quas non velit maxime optio qui
                eaque, ullam cum et deleniti, nisi debitis tenetur pariatur
                itaque.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text_content">
              <h2>Show your family & friends you care.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id
                modi illum cupiditate error quas non velit maxime optio qui
                eaque, ullam cum et deleniti, nisi debitis tenetur pariatur
                itaque.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Slide>
  );
}
