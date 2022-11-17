
import { NavLink } from "react-router-dom";
import { priceFormat } from "../../../hooks/helper";
import { searchData } from "./data";
import { MdOutlineViewInAr } from "react-icons/md";

const SearchTemplate = ({ searchResult }) => {

  return (
	<div className="search-template">
	{searchData[0]   &&
	  searchData.map((prod,key) => (
		<div className="single_search_prod" key={key}>
		  <div className="ssp-img">
			<img src={prod.img} alt="" />
		  </div>
		  <div>
			<p className="ssp-title">{prod.title}</p>
			<p className="ssp-price">
			  {priceFormat(prod.price)}
			</p>
		  </div>
		</div>
	))}
	<div className="d-flex justify-content-center my-2 ">
		<NavLink to={`/shop/${""}`} className="btn btn-primary ">
		<MdOutlineViewInAr /> View More
		</NavLink>
	</div>
  </div>
  );
};

export default SearchTemplate;
