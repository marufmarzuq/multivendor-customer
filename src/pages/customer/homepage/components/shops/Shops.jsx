import React from "react";
import { product2, slider1 } from "../../../../../assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
const Shops = () => {
  return (
    <section className="shops my-5 pb-3">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Shops</h2>
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
              <a href="">
                <img src={slider1} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src={product2} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src={slider1} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src={slider1} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src={slider1} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src={slider1} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src={slider1} alt="" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Shops;
