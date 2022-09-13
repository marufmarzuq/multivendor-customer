import React from "react";
import "../dailyDeals/dailyDeals.css";
import { product2, product1, groceries } from "../../../../../assets";
import { AiFillStar } from "react-icons/ai";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { MdOutlineViewInAr } from "react-icons/md";

const MostPopular = () => {
  return (
    <section className="most-popular my-4">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Most Popular</h2>
        </div>
        <div className="row most-popular-tabs">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#mp-all"
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#mp-beauty"
              >
                Beauty
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#mp-groceries"
              >
                Groceries
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="mp-all">
              <div className="container">
                <div className="row products-wrap">
                  <div className="col-sm-6 col-md-3 mb-3">
                    <div className="single-product style-1">
                      <div className="image-wrap">
                        <a href="#">
                          <img src={product2} alt="Locket New" />
                        </a>
                        <div className="buttons-wrap">
                          <button>
                            <FaBalanceScaleLeft />
                          </button>
                        </div>
                        <div className="badges">
                          <div className="badge sale-badge">
                            <span>10%</span>
                          </div>

                          <div className="badge tag-badge">
                            <span>Sale</span>
                          </div>
                        </div>
                      </div>
                      <div className="content-wrap">
                        <div className="variations d-flex flex-column">
                          <div className="variation d-flex justify-content-center">
                            <span className="variation-name">1 KG</span>
                            <span>5 KG</span>
                            <span>10 KG</span>
                          </div>
                        </div>
                        <h3 className="product-title">
                          <a href="#">Locket New</a>
                        </h3>
                        <div className="price">
                          <span className="sale">$ 200</span>
                          <span className="del">$ 180</span>
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
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="mp-beauty">
              <div className="container">
                <div className="row products-wrap">
                  <div className="col-sm-6 col-md-3 mb-3">
                    <div className="single-product style-1">
                      <div className="image-wrap">
                        <a href="#">
                          <img src={product1} alt="Locket New" />
                        </a>
                        <div className="buttons-wrap">
                          <button>
                            <FaBalanceScaleLeft />
                          </button>
                        </div>
                        <div className="badges">
                          <div className="badge sale-badge">
                            <span>10%</span>
                          </div>

                          <div className="badge tag-badge">
                            <span>Sale</span>
                          </div>
                        </div>
                      </div>
                      <div className="content-wrap">
                        <h3 className="product-title">
                          <a href="#">Locket New</a>
                        </h3>
                        <div className="price">
                          <span className="sale">$ 200</span>
                          <span className="del">$ 180</span>
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
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="mp-groceries">
              <div className="container">
                <div className="row products-wrap">
                  <div className="col-sm-6 col-md-3 mb-3">
                    <div className="single-product style-1">
                      <div className="image-wrap">
                        <a href="#">
                          <img src={groceries} alt="Locket New" />
                        </a>
                        <div className="buttons-wrap">
                          <button>
                            <FaBalanceScaleLeft />
                          </button>
                        </div>
                        <div className="badges">
                          <div className="badge sale-badge">
                            <span>10%</span>
                          </div>

                          <div className="badge tag-badge">
                            <span>Sale</span>
                          </div>
                        </div>
                      </div>
                      <div className="content-wrap">
                        <h3 className="product-title">
                          <a href="#">Locket New</a>
                        </h3>
                        <div className="price">
                          <span className="sale">$ 200</span>
                          <span className="del">$ 180</span>
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
                </div>
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
