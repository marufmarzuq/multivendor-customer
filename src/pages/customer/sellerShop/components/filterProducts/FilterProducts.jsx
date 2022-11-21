import { MdOutlineViewInAr } from "react-icons/md";
import arrivalStyle from "./arrival.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductLayout from "../productLayout/ProductLayout";
import { NavLink } from "react-router-dom";

const FilterProducts = ({ loading , filterProducts ,addToCart}) => {
  return (
    <div className="container">
     	{ filterProducts?.data &&
			<div className={arrivalStyle.titles}>
				<h1 className="text-center mb-5 pt-5">Search Result</h1>
			</div>
		}
      <section>
        <div className={arrivalStyle.productsContainer}>
        { 
		!loading &&
			filterProducts?.data?.map((product,index)=>{
			return(
				<ProductLayout
					product={product}
					key={index}
					addToCart={addToCart}
				/>
			)
			})
		
		}
        </div>
      </section>
	  	{ filterProducts?.data  &&
			<div className="d-flex justify-content-center my-2 ">
				<NavLink to={`/shop/${filterProducts.store_slug}`} className="btn btn-primary ">
					<MdOutlineViewInAr /> View More
				</NavLink>
			</div>
		}
    </div>
  );
};

export default FilterProducts;
