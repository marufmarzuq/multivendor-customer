import {Fragment} from "react";
import { NavLink } from "react-router-dom";
import topPartStyle from "./topPart.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const TopPart = ({loading,shopName,address,logo,avgRating,sliders}) => {
  return (
    <div className="container">
      <div className={topPartStyle.topPartContainer}>
      { loading ?
      (
				<SkeletonTheme height={25}>
					<p><Skeleton count={5} /></p>
				</SkeletonTheme>
      )
      :
				(
					<Fragment>
						<div className={topPartStyle.topPartLeft}>
							<div className={topPartStyle.topPartLeftImage}>
								<img
									src={logo}
									alt={shopName}
								/>
							</div>
							<div>
								<h1>{shopName}</h1>
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
								<p>{address}</p>
							</div>
						</div>
						<div className={topPartStyle.slides}>
							<Swiper
								pagination={true}
								modules={[Autoplay, Pagination, Navigation]}
								spaceBetween={30}
								centeredSlides={true}
								loop={true}
								navigation={true}
								autoplay={{
								delay: 2500,
								disableOnInteraction: false,
								}}
								className="mySwiper"
							>
							{
								sliders?.length == 0 ? (
									<SkeletonTheme height={50}>
									<p><Skeleton count={5}/></p>
									</SkeletonTheme>
								) :
								(
									sliders?.map((item,key)=>{
										return(
											<SwiperSlide  className={topPartStyle.swiperSlide} key={key}>
												<div className={topPartStyle.swiperSlideContent}>
													<h3>{item.title}</h3>
													<NavLink to={item.link} className="button-outline">
														Shop Now
													</NavLink>
												</div>
												<img src={item.image} alt={item.title} />
											</SwiperSlide>
										)
									})
								)
							}
							</Swiper>
						</div>
					</Fragment>
				)
      }
      </div>
      <hr />
    </div>
  );
};

export default TopPart;
