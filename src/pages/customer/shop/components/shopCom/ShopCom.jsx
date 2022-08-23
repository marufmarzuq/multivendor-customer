import React from "react";
import "./shopCom.css";
import { product2 } from "../../../../../assets";
import { FaBalanceScale } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const ShopCom = () => {
  return (
    <div>
      <section class="shop-wrap my-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-3">
              <div class="shop-sidebar">
                <div class="sidebar-row search-wrap">
                  <form action="" class="search-form">
                    <input
                      type="text"
                      class="sidebar-input"
                      placeholder="Search Products"
                    />
                    <button type="submit" class="search-button">
                      <BiSearch />
                    </button>
                  </form>
                </div>
                <div class="sidebar-row categories-wrap">
                  <h4 class="sidebar-label">Categories</h4>
                  <input
                    type="text"
                    class="sidebar-input"
                    placeholder="T-Shirt"
                  />
                </div>
                <div class="sidebar-row reviews-wrap">
                  <h4 class="sidebar-label">Customer Reviews</h4>
                  <div class="progress-wrap">
                    <h4 class="progress-label">5 Star</h4>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 class="progress-label">25%</h4>
                  </div>
                </div>
                <div class="sidebar-row brands-wrap">
                  <h4 class="sidebar-label">Brands</h4>
                  <input type="text" class="sidebar-input" placeholder="Polo" />
                </div>
                {/* <div class="sidebar-row price-wrap">
                  <h4 class="sidebar-label">Price</h4>
                  <div class="price-range">
                    <div class="range-container">
                      <div class="slider-track"></div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value="30"
                        id="slider-1"
                        oninput="slideOne()"
                      />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value="70"
                        id="slider-2"
                        oninput="slideTwo()"
                      />
                    </div>
                    <div class="range-values">
                      <span>Price:</span>
                      <input type="number" id="range1" value="0" />
                      <span>-</span>
                      <input type="number" id="range2" value="100" />
                      <button class="range-go">Go</button>
                    </div>
                  </div>
                </div> */}
                <div class="sidebar-row radio-wrap">
                  <h4 class="sidebar-label">Size</h4>
                  <div class="radio-item">
                    <input type="radio" name="" value="L" id="L" />
                    <label for="L">L</label>
                  </div>
                  <div class="radio-item">
                    <input type="radio" name="" value="XL" id="XL" />
                    <label for="XL">XL</label>
                  </div>
                  <div class="radio-item">
                    <input type="radio" name="" value="M" id="M" />
                    <label for="M">M</label>
                  </div>
                </div>
                <div class="sidebar-row radio-wrap color-wrap">
                  <h4 class="sidebar-label">Color</h4>
                  <div class="radio-item">
                    <input type="radio" name="" value="L" id="red" />
                    <label for="red" style={{ backgroundColor: "red" }}></label>
                  </div>
                  <div class="radio-item">
                    <input type="radio" name="" value="L" id="green" />
                    <label
                      for="green"
                      style={{ backgroundColor: "green" }}
                    ></label>
                  </div>
                  <div class="radio-item">
                    <input type="radio" name="" value="L" id="blue" />
                    <label
                      for="blue"
                      style={{ backgroundColor: "blue" }}
                    ></label>
                  </div>
                </div>
                <div class="sidebar-row radio-wrap color-wrap">
                  <h4 class="sidebar-label">Color</h4>
                  <div class="radio-item">
                    <span
                      class="color"
                      style={{ backgroundColor: "blue" }}
                    ></span>
                    <span class="size">XL</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-9">
              <div class="row products-wrap">
                <div class="col-sm-6 col-md-3 mb-3">
                  <div class="single-product style-1">
                    <div class="image-wrap">
                      <a href="#">
                        <img src={product2} alt="Locket New" />
                      </a>
                      <div class="buttons-wrap">
                        <button>
                          <FaBalanceScale />
                        </button>
                      </div>
                      <div class="badges">
                        <div class="badge sale-badge">
                          <span>10%</span>
                        </div>

                        <div class="badge tag-badge">
                          <span>Sale</span>
                        </div>
                      </div>
                    </div>
                    <div class="content-wrap">
                      <h3 class="product-title">
                        <a href="#">Locket New</a>
                      </h3>
                      <div class="price">
                        <span class="sale">$ 200</span>
                        <span class="del">$ 180</span>
                      </div>
                      <div class="ratings">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopCom;
