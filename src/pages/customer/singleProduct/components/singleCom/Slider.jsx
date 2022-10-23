import { useState } from "react";
import "./singleCom.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Slider = ({loading,sliders}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    {
    loading ?
    (
			<SkeletonTheme height={50}>
				<p><Skeleton count={5} /></p>
			</SkeletonTheme>
    ) : (
			<div className="col mb-5 mb-md-2 overflow-hidden">
				<div className="product-gallery-container">
					<div className="swiper-container gallery-main">
						<Swiper
							style={{
								"--swiper-navigation-color": "#fff",
								"--swiper-pagination-color": "#fff",
							}}
							spaceBetween={10}
							navigation={true}
							thumbs={{
								swiper:
									thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
							}}
							modules={[FreeMode, Navigation, Thumbs]}
							className="mySwiper2"
						>
							{
								sliders?.map((slider,index)=>{
									return(
										<SwiperSlide key={index}>
											<img src={slider} alt={`slide-${index}`} />
										</SwiperSlide>
									)
									})
							}
						</Swiper>
					</div>
					<div className="swiper-container gallery-thumbs">
						<Swiper
							onSwiper={setThumbsSwiper}
							spaceBetween={10}
							slidesPerView={4}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]}
							className="mySwiper"
						>
							{
								sliders?.map((slider,index)=>{
									return(
										<SwiperSlide key={index}>
											<img src={slider} alt={`slide-${index}`} />
										</SwiperSlide>
									)
									})
							}
						</Swiper>
					</div>
				</div>
			</div>
    )
    }

    </>
  );
};

export default Slider;
