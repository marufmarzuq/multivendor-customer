
import { NavLink } from "react-router-dom";
import "../category.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  catSlider1,
  beauty,
  clothing,
  groceries,
  bagAndShoes,
} from "../../../../../../assets";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PinnedCategories = ({pinnedCategories}) => {
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
		<div
		style={{
			overflowX: "hidden",
			width: "100%",
		}}
		className="row mx-0 px-0"
	>
		<div className="col-12 col-xs-12 col-md-12 mb-5">
			<Slider {...settings}>
				{
				pinnedCategories.length == 0 ? (
					<SkeletonTheme height={50}>
					<p>
						<Skeleton count={5} />
					</p>
				</SkeletonTheme>
				) :
				(
					// pinnedCategories.map((category,key)=>{
					// 	return(
					// 		<div className="mini-slide" key={key}>
					// 			<a href="#">
					// 				<div className="image">
					// 					<img src={category.banner} alt={category.name} />
					// 				</div>
					// 				<p>{category.name}</p>
					// 			</a>
					// 		</div>
					// 	)
					// })
					<Slider {...settings}>
					<div className="mini-slide">
						<a href="#">
							<div className="image">
								<img src={beauty} alt="" />
							</div>
							<p>Beauty</p>
						</a>
					</div>

					<div className="mini-slide">
						<a href="#">
							<div className="image">
								<img src={clothing} alt="" />
							</div>
							<p>Clothing</p>
						</a>
					</div>
					<div className="mini-slide">
						<a href="#">
							<div className="image">
								<img src={beauty} alt="" />
							</div>
							<p>Beauty</p>
						</a>
					</div>
					<div className="mini-slide">
						<a href="#">
							<div className="image">
								<img src={bagAndShoes} alt="" />
							</div>
							<p>Bag and Shoes</p>
						</a>
					</div>

					<div className="mini-slide">
						<a href="#">
							<div className="image">
								<img src={groceries} alt="" />
							</div>
							<p>Groceries</p>
						</a>
					</div>

					<div className="mini-slide">
						<a href="#">
							<div className="image">
								<img src={clothing} alt="" />
							</div>
							<p>Clothing</p>
						</a>
					</div>

					<div className="mini-slide">
						<a href="#">
							<div className="image">
								<img src={bagAndShoes} alt="" />
							</div>
							<p>Bag and Shoes</p>
						</a>
					</div>
				</Slider>
				)
				}

			</Slider>
		</div>
	</div>
  );
};

export default PinnedCategories;
