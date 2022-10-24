import { useState } from "react";
import "../dailyDeals/dailyDeals.css";
import { MdOutlineViewInAr } from "react-icons/md";
import { useCart } from "react-use-cart";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductLayout from "../productLayout/ProductLayout";

const DailyDeals = ({ dailyDeals }) => {

  const [selectVariant, setSelcetVariant] = useState("");
  const { addItem, onItemAdd } = useCart();
  const [categoryName, setCategoryName] = useState("all");

  const addToCart = (product) => {
    addItem(product);
  };

  return (
    <section className="most-popular my-4">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Daily Deals</h2>
        </div>

        {Object.keys(dailyDeals).length == 0 && (
          <SkeletonTheme height={50}>
            <p>
              <Skeleton count={5} />
            </p>
          </SkeletonTheme>
        )}

        <div className="row most-popular-tabs">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            {dailyDeals &&
              Object.keys(dailyDeals).map((category_name, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <button
                      onClick={() => setCategoryName(category_name)}
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
                {dailyDeals &&
                  dailyDeals[categoryName]?.map((product, index) => {
                    return (
											<ProductLayout key={index}
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
          <a href="#" className="btn btn-primary ">
            <MdOutlineViewInAr /> View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default DailyDeals;
