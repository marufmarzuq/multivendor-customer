import { MdOutlineViewInAr } from "react-icons/md";
import arrivalStyle from "./allProducts.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import GridView from "../../../../../common/product/prodsLayout/GridView";

const AllProducts = ({ loading, allProducts, addToCart }) => {
  return (
    <div className="container">
      <div className={arrivalStyle.titles}>
        <h1 className="text-center mb-5 pt-5">All Products</h1>
      </div>
      <section className="mb-4">
        {loading ? (
          <SkeletonTheme height={50}>
            <p>
              <Skeleton count={5} />
            </p>
          </SkeletonTheme>
        ) : (
          allProducts?.products && (
            <GridView products={allProducts?.products} addToCart={addToCart} />
          )
        )}
      </section>

      <div className="d-flex justify-content-center my-2">
        <NavLink to={`/shop/${allProducts?.slug}`} className="btn btn-primary">
          <MdOutlineViewInAr /> View More
        </NavLink>
      </div>
    </div>
  );
};

export default AllProducts;
