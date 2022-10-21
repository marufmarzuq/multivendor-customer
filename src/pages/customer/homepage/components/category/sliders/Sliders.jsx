
import { NavLink } from "react-router-dom";
import {catSlider1} from "../../../../../../assets";
import "../category.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

const Sliders = ({sliders}) => {

  return (
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
		{/* <!-- ./Slider main container --> */}
		</div>
  );
};

export default Sliders;
