
import { NavLink } from "react-router-dom";
import "../category.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Sliders = ({sliders}) => {
console.log(sliders.length == 0 );
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
						delay: 2000,
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
					{
						sliders.length == 0 ? (
							<SkeletonTheme height={50}>
							<p><Skeleton count={5}/></p>
							</SkeletonTheme>
						) :
						(
							sliders.map((item,key)=>{
								return(
									<SwiperSlide key={key}>
										<div className="swiper-slide">
											<img src={item.image} alt={item.title} />
											<div className="slider-content">
												<h3>{item.title}</h3>
												<NavLink to={item.link} className="button-outline">
													Shop Now
												</NavLink>
											</div>
										</div>
									</SwiperSlide>
								)
							})
						)
					}
				</Swiper>

				{/* </div> */}
			</div>
		</div>
		{/* <!-- ./Slider main container --> */}
		</div>
  );
};

export default Sliders;
