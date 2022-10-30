
import { useState } from "react";
import { useCart } from "react-use-cart";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductLayout from "../../../homepage/components/productLayout/ProductLayout";
import FrontendPagination from "../../../../../common/pagination/frontend/FrontendPagination";
import SortBar from "./components/SortBar";

const RightComp = ({loading,shopProduct,pageCount,currentPage,setCurrentPage,setSortBy}) => {
  const { addItem, onItemAdd } = useCart();
  const [layout, setLayout] = useState("grid");

  const addToCart = (product) => {
    addItem(product);
  };

  return (
		<div>
			<SortBar setLayout={setLayout} setSortBy={setSortBy}/>
			<div className="row products-wrap">
				{loading && (
					<SkeletonTheme height={50}>
						<p>
							<Skeleton count={5} />
						</p>
					</SkeletonTheme>
				)}
				{
					shopProduct.map((product, index) => {
						return (
						<ProductLayout key={index}
							product={product}
							addToCart={addToCart}
						/>
					);
					})
				}

				{ shopProduct.length > 0 && (
					<FrontendPagination
						currentItem={shopProduct}
						perPage={12}
						pageCount={pageCount}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
					)
				}
			</div>
		</div>
  );
};

export default RightComp;