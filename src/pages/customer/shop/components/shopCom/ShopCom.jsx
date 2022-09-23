import "./shopCom.css";
import GridOne from "../../../../../common/productView/GridOne";
import { BiSearch, BiSquare } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { FaBalanceScale, FaStar } from "react-icons/fa";
import { product2 } from "../../../../../assets/index";
const ShopCom = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <section className="shop-wrap my-4">
        <div className="container">
          <div className="shopContainer">
            <div className="">
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
                    <label htmlFor="L">L</label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" name="" value="XL" id="XL" />
                    <label htmlFor="XL">XL</label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" name="" value="M" id="M" />
                    <label htmlFor="M">M</label>
                  </div>
                </div>
                <div className="sidebar-row radio-wrap color-wrap">
                  <h4 className="sidebar-label">Color</h4>
                  <div className="radio-item">
                    <input type="radio" name="" value="L" id="red" />
                    <label
                      htmlFor="red"
                      style={{ backgroundColor: "red" }}
                    ></label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" name="" value="L" id="green" />
                    <label
                      htmlFor="green"
                      style={{ backgroundColor: "green" }}
                    ></label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" name="" value="L" id="blue" />
                    <label
                      htmlFor="blue"
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
            <div className="">
              <div className="sort-bar">
                <div className="sort-bar-left">
                  <div>
                    <button className="">
                      <BsGrid3X3Gap />
                    </button>
                  </div>

                  <div>
                    <button>
                      <AiOutlineBars />
                    </button>
                  </div>
                </div>
                <div className="sort-bar-right">
                  <div className="form-group">
                    <label htmlFor="">Sort By:</label>
                    <select className="form-control" name="sort" id="sort">
                      <option>Default</option>
                      <option>Sale</option>
                      <option>Price</option>
                    </select>

                    {/* <div>
                      <Select
                        styles={customStyles}
                        options={options}
                    
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="row products-wrap shop">
                <section>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <div className="single-product single-product-min style-1">
                      <div className="image-wrap">
                        <a href="#">
                          <img src={product2} alt="Locket New" />
                        </a>
                        <div className="buttons-wrap">
                          <button>
                            <FaBalanceScale />
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
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopCom;
