import React from "react";
import "./brands.css";
import {
  catSlider1,
  beauty,
  clothing,
  groceries,
  bagAndShoes,
  product1,
  product2,
} from "../../../../../assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
const Brands = () => {
  return (
    <div class="wrapper mb-5 pb-3">
      {" "}
      <section className="brands my-4">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <h2 className="section-title">Brands</h2>
            <p className="section-subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={1}
              breakpoints={{
                960: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 4,
                },
                650: {
                  slidesPerView: 3,
                },
                550: {
                  slidesPerView: 2,
                },
                450: {
                  slidesPerView: 1,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {/* <div className="swiper-slide"> */}
                <a href="">
                  <img src={product1} />
                </a>
                {/* </div> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="swiper-slide"> */}
                <a href="">
                  <img src={product2} alt="" />
                </a>
                {/* </div> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="swiper-slide"> */}
                <a href="">
                  <img src={groceries} alt="" />
                </a>
                {/* </div> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="swiper-slide"> */}
                <a href="">
                  <img src={product1} alt="" />
                </a>
                {/* </div> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="swiper-slide"> */}
                <a href="">
                  <img src={product1} />
                </a>
                {/* </div> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="swiper-slide"> */}
                <a href="">
                  <img src={product2} alt="" />
                </a>
                {/* </div> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="swiper-slide"> */}
                <a href="">
                  <img src={groceries} alt="" />
                </a>
                {/* </div> */}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Brands;
