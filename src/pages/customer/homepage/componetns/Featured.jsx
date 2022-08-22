import React from "react";
import { groceries, product1, product2 } from "../../../../assets";
import "../home.css";
const Featured = () => {
  return (
    <section className="featured-products my-4 mb-5">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Featured Products</h2>
        </div>
        <div className="row featured-products-tabs">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#fp-all"
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#fp-beauty"
              >
                Beauty
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#fp-groceries"
              >
                Groceries
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="fp-all">
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
                            <i className="fas fa-balance-scale-right count-circle"></i>
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
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="fp-beauty">
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
                            <i className="fas fa-balance-scale-right count-circle"></i>
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
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="fp-groceries">
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
                            <i className="fas fa-balance-scale-right count-circle"></i>
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
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex  justify-content-center my-2">
          <a href="#" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
