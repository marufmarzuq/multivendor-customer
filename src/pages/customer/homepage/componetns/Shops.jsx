import React from "react";
import "../home.css";
import { groceries, product1, product2, slider1 } from "../../../../assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
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
            slidesPerView={5}
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
                <img src={slider1} />
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
                <img src={slider1} alt="" />
              </a>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div className="swiper-slide"> */}
              <a href="">
                <img src={slider1} alt="" />
              </a>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div className="swiper-slide"> */}
              <a href="">
                <img src={slider1} />
              </a>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div className="swiper-slide"> */}
              <a href="">
                <img src={slider1} alt="" />
              </a>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div className="swiper-slide"> */}
              <a href="">
                <img src={slider1} alt="" />
              </a>
              {/* </div> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Shops;
