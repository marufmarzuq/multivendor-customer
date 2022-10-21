
import { NavLink } from "react-router-dom";

const Ads = ({ads}) => {
  return (
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
  );
};

export default Ads;
