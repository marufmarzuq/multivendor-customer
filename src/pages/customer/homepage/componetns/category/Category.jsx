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
import { BiBasketball } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";
const Category = () => {
  return (
    <section className="category-wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xs-4 col-md-3 col-lg-4 ">
            <div className="category-list">
              <ul>
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
          <div className="col-12 col-xs-8 col-md-9 col-lg-8">
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
              <div className="row ">
                <div className="col-12 col-xs-12 col-md-12 category-thumbs-slider  ">
                  <div className="mb-3">
                    <div className="swiper-wrapper ">
                      <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        slidesPerView={3}
                        // breakpoints={{
                        //   320: {
                        //     slidesPerView: 2,
                        //   },
                        //   550: {
                        //     slidesPerView: 3,
                        //   },
                        // }}
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
                            <a href="#">
                              <div className="thumb-image">
                                <img src={beauty} alt="" />
                              </div>
                              <p>Beauty</p>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <a href="#">
                              <div className="thumb-image">
                                <img src={groceries} alt="" />
                              </div>
                              <p>Groceries</p>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <a href="#">
                              <div className="thumb-image">
                                <img src={clothing} alt="" />
                              </div>
                              <p>Clothing</p>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <a href="#">
                              <div className="thumb-image">
                                <img src={bagAndShoes} alt="" />
                              </div>
                              <p>Bags & Shoes</p>
                            </a>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;