import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../static/styles/components/reviews.scss";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

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
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
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
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
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
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
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
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
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
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
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
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
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
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
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
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
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
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
