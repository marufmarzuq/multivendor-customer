
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const PinnedCategories = ({settings,pinnedCategories}) => {
  return (
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
  );
};

export default PinnedCategories;
