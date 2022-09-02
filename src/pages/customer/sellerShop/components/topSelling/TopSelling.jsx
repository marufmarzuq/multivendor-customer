import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { MdOutlineViewInAr } from "react-icons/md";
import { product, product1 } from "../../../../../assets";
import arrivalStyle from "./topSelling.module.css";
const TopSelling = () => {
  return (
    <div className="container">
      <div className={arrivalStyle.titles}>
        <h1 className="text-center mb-5 pt-5">Top Selling Products</h1>
      </div>
      <section>
        <div className={arrivalStyle.productsContainer}>
          <section>
            <div className="products-wrap">
              <div className="mb-3">
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
                        {/* <span>10%</span> */}
                      </div>

                      <div className="badge tag-badge">
                        {/* <span>Sale</span> */}
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
          </section>
          <section>
            <div className="products-wrap">
              <div className="mb-3">
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
                        {/* <span>10%</span> */}
                      </div>

                      <div className="badge tag-badge">
                        {/* <span>Sale</span> */}
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
          </section>
          <section>
            <div className="products-wrap">
              <div className="mb-3">
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
                        {/* <span>10%</span> */}
                      </div>

                      <div className="badge tag-badge">
                        {/* <span>Sale</span> */}
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
          </section>
          <section>
            <div className="products-wrap">
              <div className="mb-3">
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
                        {/* <span>10%</span> */}
                      </div>

                      <div className="badge tag-badge">
                        {/* <span>Sale</span> */}
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
          </section>
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
