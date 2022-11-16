import { MdOutlineViewInAr } from "react-icons/md";
import arrivalStyle from "./arrival.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductLayout from "../productLayout/ProductLayout";

const FilterProducts = ({ loading , filterProducts ,addToCart}) => {
	console.log(filterProducts);
  return (
    <div className="container">
     	{ filterProducts.length > 0 &&
			<div className={arrivalStyle.titles}>
				<h1 className="text-center mb-5 pt-5">New Arrivals</h1>
			</div>
		}
      <section>
        <div className={arrivalStyle.productsContainer}>
        { loading ?
			""
		:
		(
			filterProducts?.map((product,index)=>{
				return(
					<ProductLayout
						product={product}
						key={index}
						addToCart={addToCart}
					/>
				)
				})
		)
		}
        </div>
      </section>
	  	{ filterProducts.length > 0 &&
			<div className="d-flex justify-content-center my-2">
				<a href="#" className="btn btn-primary">
				<MdOutlineViewInAr /> View More
				</a>
			</div>
		}
    </div>
  );
};

export default FilterProducts;
