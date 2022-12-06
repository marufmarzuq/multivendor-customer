import { useState } from "react";
import { useCart } from "react-use-cart";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import FrontendPagination from "../../../../../common/pagination/frontend/FrontendPagination";
import SortBar from "./components/SortBar";
import GridView from "../../../../../common/product/prodsLayout/GridView";
import ListView from "../../../../../common/product/prodsLayout/ListView";

const RightComp = ({
  loading,
  shopProduct,
  pageCount,
  currentPage,
  setCurrentPage,
  setSortBy,
}) => {
  const { addItem, onItemAdd } = useCart();
  const [layout, setLayout] = useState("grid");

  const addToCart = (product) => {
    product.product_id = product.id;
    addItem(product);
  };

  return (
    <div>
      <SortBar setLayout={setLayout} setSortBy={setSortBy} />
      <div className="row products-wrap">
        {loading && (
          <SkeletonTheme height={50}>
            <p>
              <Skeleton count={5} />
            </p>
          </SkeletonTheme>
        )}
        {layout === "grid" ? (
          <GridView products={shopProduct} addToCart={addToCart} />
        ) : (
          <ListView products={shopProduct} addToCart={addToCart} />
        )}
        {/* {
					shopProduct.map((product, index) => {
						return (
							layout == "grid" ?
							(
							<GridOne 
								key={index}
								product={product}
								addToCart={addToCart}
							/>
							) :
							(
							<ListOne
								key={index}
								product={product}
								addToCart={addToCart}
							/>
							)
					);
					})
				} */}

        {shopProduct.length > 0 && (
          <FrontendPagination
            currentItem={shopProduct}
            perPage={12}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default RightComp;
