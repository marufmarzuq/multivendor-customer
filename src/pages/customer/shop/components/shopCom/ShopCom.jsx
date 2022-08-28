import React from "react";
import "./shopCom.css";
import GridOne from "../../../../../common/productView/GridOne";
import { BiSearch, BiSquare } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";

const ShopCom = () => {
  return (
    <div>
      <section className="shop-wrap my-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="shop-sidebar">
                <div className="sidebar-row search-wrap">
                  <form action="" className="search-form">
                    <input
                      type="text"
                      className="sidebar-input"
                      placeholder="Search Products"
                    />
                    <button type="submit" className="search-button">
                      <BiSearch />
                    </button>
                  </form>
                </div>
                <div className="sidebar-row categories-wrap">
                  <h4 className="sidebar-label">Categories</h4>
                  <input
                    type="text"
                    className="sidebar-input"
                    placeholder="T-Shirt"
                  />
                </div>
                <div className="sidebar-row reviews-wrap">
                  <h4 className="sidebar-label">Customer Reviews</h4>
                  <div className="progress-wrap">
                    <h4 className="progress-label">5 Star</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 className="progress-label">25%</h4>
                  </div>
                </div>
                <div className="sidebar-row brands-wrap">
                  <h4 className="sidebar-label">Brands</h4>
                  <input
                    type="text"
                    className="sidebar-input"
                    placeholder="Polo"
                  />
                </div>

                <div className="sidebar-row radio-wrap">
                  <h4 className="sidebar-label">Size</h4>
                  <div className="radio-item">
                    <input type="radio" name="" value="L" id="L" />
                    <label for="L">L</label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" name="" value="XL" id="XL" />
                    <label for="XL">XL</label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" name="" value="M" id="M" />
                    <label for="M">M</label>
                  </div>
                </div>
                <div className="sidebar-row radio-wrap color-wrap">
                  <h4 className="sidebar-label">Color</h4>
                  <div className="radio-item">
                    <input type="radio" name="" value="L" id="red" />
                    <label for="red" style={{ backgroundColor: "red" }}></label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" name="" value="L" id="green" />
                    <label
                      for="green"
                      style={{ backgroundColor: "green" }}
                    ></label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" name="" value="L" id="blue" />
                    <label
                      for="blue"
                      style={{ backgroundColor: "blue" }}
                    ></label>
                  </div>
                </div>
                <div className="sidebar-row radio-wrap color-wrap">
                  <h4 className="sidebar-label">Color</h4>
                  <div className="radio-item">
                    <span
                      className="color"
                      style={{ backgroundColor: "blue" }}
                    ></span>
                    <span className="size">XL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-9">
              <div className="product-sort-bar">
                <div className="sort-bar-left">
                  <button>
                    <BsGrid3X3Gap />
                  </button>
                  <button>
                    <AiOutlineBars />
                  </button>
                </div>
                <div className="sort-bar-right">
                  <div class="form-group">
                    <label for="">Sort By:</label>
                    <select class="form-control" name="sort" id="sort">
                      <option>Default</option>
                      <option>Sale</option>
                      <option>Price</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row products-wrap">
								<GridOne/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopCom;
