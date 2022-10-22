import React from "react";
import categoryStyle from "./shopCategory.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

import { GiJeweledChalice } from "react-icons/gi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { BiBasketball } from "react-icons/bi";
import { RiBearSmileLine } from "react-icons/ri";
import { AiOutlineLaptop } from "react-icons/ai";
const ShopCategories = ({categories}) => {
  return (
    <div className="container">
      <div className={categoryStyle.titles}>
        <div>
          <h1>Categories</h1>
        </div>
        <div className={categoryStyle.search}>
          <input placeholder="Search in Shop" type="text" />{" "}
          <button style={{}} className="btn btn-outline-primary">
            search
          </button>
        </div>
      </div>

      <section className="my-5">
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
          className={`mySwiper py-3 ${categoryStyle.slideContainer}`}
        >
          <SwiperSlide>
            <div className={categoryStyle.slideItem}>
              <GiJeweledChalice />
            </div>
            <h5>Beauty</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className={categoryStyle.slideItem}>
              <MdOutlineLocalGroceryStore />
            </div>
            <h5>Groceries</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className={categoryStyle.slideItem}>
              <IoShirtOutline />
            </div>
            <h5>Clothing</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className={categoryStyle.slideItem}>
              <BsHandbag />
            </div>
            <h5>Bags & Shoes</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className={categoryStyle.slideItem}>
              <BiBasketball />
            </div>
            <h5>Sports & Fun</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className={categoryStyle.slideItem}>
              <RiBearSmileLine />
            </div>
            <h5>Toys & Kids</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className={categoryStyle.slideItem}>
              <AiOutlineLaptop />
            </div>
            <h5>Electronics</h5>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default ShopCategories;
