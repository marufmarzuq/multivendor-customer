
import { MdOutlineViewInAr } from "react-icons/md";
import arrivalStyle from "./topSelling.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useCart } from "react-use-cart";
import ProductLayout from "../productLayout/ProductLayout";

const TopSelling = ({loading,topSelling}) => {

  const { addItem, onItemAdd } = useCart();
	const addToCart = (product) => {
    addItem(product);
  };

  return (
    <div className="container">
      <div className={arrivalStyle.titles}>
        <h1 className="text-center mb-5 pt-5">Top Selling Products</h1>
      </div>
      <section>
        <div className={arrivalStyle.productsContainer}>
        { loading ?

						<SkeletonTheme height={50}>
						<p>
							<Skeleton count={5} />
						</p>
						</SkeletonTheme>
					:
					(
						topSelling?.map((product,index)=>{
							return(
								<ProductLayout
									product={product}
									index={index}
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

export default TopSelling;
