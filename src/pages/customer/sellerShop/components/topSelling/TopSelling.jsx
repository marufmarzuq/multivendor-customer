import { MdOutlineViewInAr } from "react-icons/md";
import arrivalStyle from "./topSelling.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductLayout from "../productLayout/ProductLayout";
import { NavLink } from "react-router-dom";
import GridView from "../../../../../common/product/prodsLayout/GridView";

const TopSelling = ({ loading, topSelling, addToCart }) => {
  return (
    <div className="container">
      <div className={arrivalStyle.titles}>
        <h1 className="text-center mb-5 pt-5">Top Selling Products</h1>
      </div>
      <section className="mb-4">
        {loading ? (
          <SkeletonTheme height={50}>
            <p>
              <Skeleton count={5} />
            </p>
          </SkeletonTheme>
        ) : (
          topSelling?.products && (
            <GridView products={topSelling?.products} addToCart={addToCart} />
          )
        )}
      </section>

      <div className="d-flex justify-content-center my-2">
        <NavLink to={`/shop/${topSelling?.slug}`} className="btn btn-primary">
          <MdOutlineViewInAr /> View More
        </NavLink>
      </div>
    </div>
  );
};

export default TopSelling;
