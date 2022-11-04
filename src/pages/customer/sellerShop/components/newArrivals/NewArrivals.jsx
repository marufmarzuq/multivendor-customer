import { MdOutlineViewInAr } from "react-icons/md";
import arrivalStyle from "./arrival.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductLayout from "../productLayout/ProductLayout";

const NewArrivals = ({ loading , newArrival,addToCart}) => {
  return (
    <div className="container">
      <div className={arrivalStyle.titles}>
        <h1 className="text-center mb-5 pt-5">New Arrivals</h1>
      </div>
      <section>
        <div className={arrivalStyle.productsContainer}>
        { loading ?
		<SkeletonTheme height={50}>
			<p><Skeleton count={5} /></p>
		</SkeletonTheme>
		:
		(
			newArrival?.map((product,index)=>{
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

      <div className="d-flex justify-content-center my-2">
        <a href="#" className="btn btn-primary">
          <MdOutlineViewInAr /> View More
        </a>
      </div>
    </div>
  );
};

export default NewArrivals;
