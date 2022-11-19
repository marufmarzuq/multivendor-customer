
import { NavLink } from "react-router-dom";
import { priceFormat } from "../../../hooks/helper";
import { MdOutlineViewInAr } from "react-icons/md";

const SearchTemplate = ({ searchResult }) => {
  return (
	<div className="search-template">
	{
	  searchResult?.result?.map((prod,key) => (
		<div className="single_search_prod" key={key}>
		  <div className="ssp-img">
			<img src={prod.thumbnail_img} alt={prod.name} height="50px" width={"50px"} />
		  </div>
		  <div>
			<p className="ssp-title">{prod.name}</p>
			<p className="ssp-price">
			  {priceFormat(prod.price)}
			</p>
		  </div>
		</div>
	))}
	{
		searchResult?.view_more == "true" &&
		(
			<div className="d-flex justify-content-center my-2 ">
				<NavLink to={`/shop/${searchResult.category_slug}`} className="btn btn-primary ">
				<MdOutlineViewInAr /> View More
				</NavLink>
			</div>
		)
	}

  </div>
  );
};

export default SearchTemplate;
