import React from "react";
import categoryStyle from "./shopCategory.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { GiJeweledChalice } from "react-icons/gi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

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
				{ categories?.length == 0 ?
					(
						<SkeletonTheme height={50}>
						<p>
							<Skeleton count={5} />
						</p>
					</SkeletonTheme>
					) :
					(
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
						{
								categories?.map((item,index)=>{
										return(
											<SwiperSlide key={index}>
												<NavLink to={`/${item.slug}`}>
													<div className={categoryStyle.slideItem}>
														<img src={item.banner} alt={item.name}/>
													</div>
													<h5>{item.name}</h5>
												</NavLink>
											</SwiperSlide>
										)
										})
							}
						</Swiper>
					)
				}
      </section>
    </div>
  );
};

export default ShopCategories;
