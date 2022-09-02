import React from "react";
import topPartStyle from "./topPart.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper";

const TopPart = () => {
  return (
    <div className="container">
      <div className={topPartStyle.topPartContainer}>
        <div className={topPartStyle.topPartLeft}>
          <div className={topPartStyle.topPartLeftImage}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7lvtGO39t8VVfZw2HUbHc0MGS09576EJhw&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <h1>One Mart</h1>
            <h5>
              <span>
                <AiOutlineStar />
              </span>
              <span>
                <AiOutlineStar />
              </span>
              <span>
                <AiOutlineStar />
              </span>
              <span>
                <AiOutlineStar />
              </span>
              <span>
                <AiOutlineStar />
              </span>
            </h5>
            <p>Paris, France</p>
          </div>
        </div>

        <div className={topPartStyle.slides}>
          <Swiper
            pagination={true}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            // navigation={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}

            className="mySwiper"
          >
            <SwiperSlide className={topPartStyle.swiperSlide}>
              <div className={topPartStyle.swiperSlideContent}>
                <h3>
                  Huge Discount <br />
                  on Leather Bag
                </h3>
                <button className="btn btn-sm ">Shop Now</button>
              </div>
              <img
                src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className={topPartStyle.swiperSlide}>
              <div className={topPartStyle.swiperSlideContent}>
                <h3>
                  Huge Discount <br />
                  on Leather Bag
                </h3>
                <button className="btn btn-sm ">Shop Now</button>
              </div>
              <img
                src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className={topPartStyle.swiperSlide}>
              <div className={topPartStyle.swiperSlideContent}>
                <h3>
                  Huge Discount <br />
                  on Leather Bag
                </h3>
                <button className="btn btn-sm ">Shop Now</button>
              </div>
              <img
                src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className={topPartStyle.swiperSlide}>
              <div className={topPartStyle.swiperSlideContent}>
                <h3>
                  Huge Discount <br />
                  on Leather Bag
                </h3>
                <button className="btn btn-sm ">Shop Now</button>
              </div>
              <img
                src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default TopPart;
