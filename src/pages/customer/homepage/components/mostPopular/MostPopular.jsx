import "../dailyDeals/dailyDeals.css";
import { MdOutlineViewInAr } from "react-icons/md";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import GridOne from "../../../../../common/product/layout/GridOne";
import { NavLink } from "react-router-dom";

const MostPopular = ({ addToCart , popularProducts }) => {
  const [categoryName, setCategoryName] = useState("all");
  const [categorySlug, setCategorySlug] = useState("all");
  return (
    <section className="most-popular my-4">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Most Popular</h2>
        </div>

        {Object.keys(popularProducts).length == 0 && (
          <SkeletonTheme height={50}>
            <p><Skeleton count={5} /></p>
          </SkeletonTheme>
        )}

        <div className="row most-popular-tabs">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            {popularProducts &&
              Object.keys(popularProducts).map((category_name, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <button
                      onClick={() => setCategoryName(category_name) + setCategorySlug( popularProducts[categoryName]?.category_slug )}
                      className={`nav-link ${
                        category_name == "all" ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      data-bs-target={`#mp-${category_name}`}
                    >
                      {category_name}
                    </button>
                  </li>
                );
              })}
          </ul>
          <div className="tab-content">
            <div className="container">
              <div className="row products-wrap">
                {popularProducts &&
                  popularProducts[categoryName]?.products?.map((product, index) => {
                    return (
                      <GridOne
                        key={index}
                        product={product}
                        addToCart={addToCart}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-2 ">
          <NavLink to={`/shop/${categorySlug}`} className="btn btn-primary ">
            <MdOutlineViewInAr /> View More
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
