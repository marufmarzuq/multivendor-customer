import React from "react";
import "../dailyDeals/dailyDeals.css";
import { AiFillStar } from "react-icons/ai";
import { FaBalanceScaleLeft, FaCartPlus } from "react-icons/fa";
import { MdOutlineViewInAr } from "react-icons/md";
import { useCart } from "react-use-cart";
import { useState } from "react";
import { priceFormat } from "../../../../../hooks/helper";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Variation from "../../../../../common/product/variation/Variation";

const MostPopular = ({ popularProducts }) => {

  const { addItem, onItemAdd } = useCart();
  const [categoryName, setCategoryName] = useState("all");

  const addToCart = (product) => {
    addItem(product);
  };

  return (
    <section className="most-popular my-4">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Most Popular</h2>
        </div>

        {Object.keys(popularProducts).length == 0 && (
          <SkeletonTheme height={50}>
            <p>
              <Skeleton count={5} />
            </p>
          </SkeletonTheme>
        )}

        <div className="row most-popular-tabs">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            {popularProducts &&
              Object.keys(popularProducts).map((category_name, index) => {
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
                {popularProducts &&
                  popularProducts[categoryName]?.map((product, index) => {
                    return (
                      <div className="col-sm-6 col-lg-4 col-xxl-3 mb-3" key={index}>
                        <div className="single-product style-1">
                          <div className="image-wrap">
                            <a href="#">
                              <img
                                src={product.thumbnail_img}
                                alt={product.name}
                              />
                            </a>
                            <div className="buttons-wrap">
                              <button>
                                <FaBalanceScaleLeft />
                              </button>
                              <button onClick={() => addToCart(product)}>
                                <FaCartPlus />
                              </button>
                            </div>
														<div className="badges">
															{ product.discount_type =="percent" &&
																	<div className="badge sale-badge">
																		<span> {product.discount +'%'} </span>
																	</div>
															}
															{ product.tags?.map((item,key) => {
                                  return (
																		<div className="badge tag-badge" key={key}>{item}</div>
                                  );
                                })
                              }
                            </div>
                          </div>
                          <div className="content-wrap">
														{ product.product_type == "variation" &&
															<Variation
															choseOptions={product.choice_options}
															product={product}
															colors={product.colors}
															/>
														}
                            <h3 className="product-title">
                              <NavLink to={`products/${product.slug}`}>
                                {product.name}
                              </NavLink>
                            </h3>
                            <div className="price">
                              <span className="sale">
                                {priceFormat(product?.discount_price)}
                              </span>
                              <span className={ product?.discount_price ? ' del ms-1' : 'ms-1' } >
                                {priceFormat(product.unit_price)}
                              </span>
                            </div>
                            <div className="ratings">
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                            </div>
                          </div>
                        </div>
                      </div>
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

export default MostPopular;
