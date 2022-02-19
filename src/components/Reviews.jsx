import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "../static/styles/components/reviews.scss";

export default function Reviews() {
  return (
    <div className="reviews">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="" style={{ width: "fit-content !important" }}>
            <img
              src={require("../static/images/amazon-h.png")}
              alt=""
              style={{ width: "250px", height: "300px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="" style={{ width: "fit-content !important" }}>
            <img
              src={require("../static/images/amazon-h.png")}
              alt=""
              style={{ width: "250px", height: "300px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="" style={{ width: "fit-content !important" }}>
            <img
              src={require("../static/images/amazon-h.png")}
              alt=""
              style={{ width: "250px", height: "300px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="" style={{ width: "fit-content !important" }}>
            <img
              src={require("../static/images/amazon-h.png")}
              alt=""
              style={{ width: "250px", height: "300px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="" style={{ width: "fit-content !important" }}>
            <img
              src={require("../static/images/amazon-h.png")}
              alt=""
              style={{ width: "250px", height: "300px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="" style={{ width: "fit-content !important" }}>
            <img
              src={require("../static/images/amazon-h.png")}
              alt=""
              style={{ width: "250px", height: "300px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="" style={{ width: "fit-content !important" }}>
            <img
              src={require("../static/images/amazon-h.png")}
              alt=""
              style={{ width: "250px", height: "300px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <blockquote>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quidem quaerat dolore veniam tenetur labore minus voluptate,
                harum ducimus quibusdam?
              </p>
            </blockquote>
            <div className="reviewer">
              <i>Lorem, ipsum.</i>
              <img
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                alt="kaapo user review"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <blockquote>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quidem quaerat dolore veniam tenetur labore minus voluptate,
                harum ducimus quibusdam?
              </p>
            </blockquote>
            <div className="reviewer">
              <i>Lorem, ipsum.</i>
              <img
                src="https://swiperjs.com/demos/images/nature-9.jpg"
                alt="kaapo user review"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
