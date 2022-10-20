import React from "react";
import "./category.css";
import {
  catSlider1,
  beauty,
  clothing,
  groceries,
  bagAndShoes,
} from "../../../../../assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { BsBagDash, BsFlower2 } from "react-icons/bs";
import { GiClothes, GiFruitBowl } from "react-icons/gi";
import { BiArrowBack, BiBasketball } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Next, Prev } from "react-bootstrap/esm/PageItem";
import { FcNext, FcPrevious } from "react-icons/fc";
import PinnedCategories from "./pinnedCategories/pinnedCategories";

const Category = ( {pinnedCategories} ) => {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="category-wrapper mt-5 wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xs-4 col-md-3 col-lg-4 ">
            <div className="category-list pt-3 pb-2">
              <ul
                style={{
                  marginBottom: "10px",
                }}
              >
                <li>
                  <a href="#">
                    <i>
                      {" "}
                      <BsFlower2 />
                    </i>
                    Beauty
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <GiFruitBowl />
                    </i>
                    Groceries
                  </a>

                  <ul>
                    <li>
                      <a href="#">Men</a>
                    </li>
                    <li>
                      <a href="#">Women</a>
                    </li>
                    <li>
                      <a href="#">Kids</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <GiClothes />
                    </i>
                    Clothing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <BsBagDash />
                    </i>
                    Bags & Shoes
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <BiBasketball />
                    </i>
                    Outdoor Fun & Sports
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <AiFillCar />
                    </i>
                    Automobile & Motorcycles
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <FaBaby />
                    </i>
                    Toys & Kids
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              marginTop: "-7px",
            }}
            className="col-12 col-xs-8 col-md-9 col-lg-8 "
          >
            <div className="container-fluid">
              <div className="row mb-4">
                <div className="col-12 col-xs-9 col-md-9 my-2">
                  {/* <!-- Slider main container --> */}

                  <div className="category-slider">
                    <div className="swiper-wrapper">
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={1}
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
                          <div className="swiper-slide">
                            <img src={catSlider1} alt="" />
                            <div className="slider-content">
                              <h3>
                                Upto 30% Off on <br />
                                Groceries
                              </h3>
                              <a href="#" className="button-outline">
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <img src={catSlider1} alt="" />
                            <div className="slider-content">
                              <h3>
                                Upto 30% Off on <br />
                                Groceries
                              </h3>
                              <a href="#" className="button-outline">
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <img src={catSlider1} alt="" />
                            <div className="slider-content">
                              <h3>
                                Upto 30% Off on <br />
                                Groceries
                              </h3>
                              <a href="#" className="button-outline">
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <img src={catSlider1} alt="" />
                            <div className="slider-content">
                              <h3>
                                Upto 30% Off on <br />
                                Groceries
                              </h3>
                              <a href="#" className="button-outline">
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      {/* </div> */}
                    </div>
                  </div>
                </div>
                {/* <!-- ./Slider main container --> */}
                <div className="col-12 col-xs-3 col-md-3 my-2">
                  <div className="category-promotion">
                    <h4>Winter Flash Sale!</h4>
                    <h3>
                      Upto 65% <br /> On <br /> Baby Products
                    </h3>
                    <a href="#" className="button-outline">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                style={{
                  overflowX: "hidden",
                  width: "100%",
                }}
                className="row mx-0 px-0"
              >
								<PinnedCategories settings={settings} pinnedCategories={pinnedCategories}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
