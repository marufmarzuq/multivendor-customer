
import { NavLink } from "react-router-dom";
import "../category.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
			<div className="col-12 col-xs-12 col-md-12  ">
				<div className="mb-5">
						<Slider {...settings}>

						{ pinnedCategories.map((category, index) => {
								return (
									<div className="mini-slide" key={index}>
										<NavLink to={'#'}>
											<div className="image">
												<img src={category.banner} alt={category.name} />
											</div>
											<p>{category.name}</p>
										</NavLink>
									</div>
								);
							})}
						</Slider>
				</div>
			</div>
	</div>
  );
};

export default PinnedCategories;
