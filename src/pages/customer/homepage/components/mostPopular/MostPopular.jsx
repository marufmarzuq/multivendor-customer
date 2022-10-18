import React from "react";
import "../dailyDeals/dailyDeals.css";
import { product2, product1, groceries } from "../../../../../assets";
import { AiFillStar } from "react-icons/ai";
import { FaBalanceScaleLeft, FaCartPlus } from "react-icons/fa";
import { MdOutlineViewInAr } from "react-icons/md";
import { useCart } from "react-use-cart";
import { useState } from "react";

const MostPopular = ({popularProducts}) => {
console.log(popularProducts);
  const [selectVariant, setSelcetVariant] = useState("");
  const { addItem, onItemAdd } = useCart();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Canon Camera",
      price: 99,
      M: {
        price: 99,
      },
      L: {
        price: 100,
      },
      XL: {
        price: 110,
      },
    },
    {
      id: 2,
      name: "Table Fan",
      price: 56,
      M: {
        price: 56,
      },
      L: {
        price: 62,
      },
      XL: {
        price: 65,
      },
    },
    {
      id: 3,
      name: "Water Heater",
      price: 45,
      M: {
        price: 45,
      },
      L: {
        price: 50,
      },
      XL: {
        price: 48,
      },
    },
  ]);
  const variations = ["M", "L", "XL"];

  const handleSetVariant = (product, variant) => {
    setSelcetVariant(`${product.id}-${variant}`);
    const filteredProducts = products.map((prod) => {
      if (prod.id == product.id) {
        prod.price = prod[variant].price;
        prod.variant = variant;
      }
      return prod;
    });

    setProducts(filteredProducts);
  };

  return (
    <section className="most-popular my-4">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Most Popular</h2>
        </div>
        <div className="row most-popular-tabs">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
						{ popularProducts && Object.keys(popularProducts).map((category_name, index) => {
							return (
								<li className="nav-item" key={index}>
								<button
									className="nav-link"
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
          {
          popularProducts && Object.keys(popularProducts).map((products, index) => {
						return(
									<div className="tab-pane fade show active" id={`mp-${products}`}  key={index}>
										<div className="container">
											<div className="row products-wrap">
											{
													popularProducts[products].length > 0 && popularProducts[products].map((product, j ) => {
															return (
																<div
																	className="col-sm-6 col-md-3 mb-3" key={j}
																>
																	<div className="single-product style-1">
																		<div className="image-wrap">
																			<a href="#">
																				<img src={product.thumbnail_img} alt={product.name} />
																			</a>
																			<div className="buttons-wrap">
																				<button>
																					<FaBalanceScaleLeft />
																				</button>
																				<button onClick={() => addItem(product)}>
																					<FaCartPlus />
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
																					{variations?.map((item) => {
																						return (
																							<span
																								className={
																									selectVariant ==
																										`${product.id}-${item}` &&
																									"variation-name"
																								}
																								onClick={() =>
																									handleSetVariant(product, item)
																								}
																								key={item}
																							>
																								{item}
																							</span>
																						);
																					})}

																				</div>
																			</div>
																			<h3 className="product-title">
																				<a href={`product/${product.id}`}> {product.name} </a>
																			</h3>
																			<div className="price">
																				<span className="sale">$ {product.price}</span>
																				<span className="del ms-1">
																					$ {product.price - 20}
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
														})
												}
											</div>
										</div>
									</div>
								)
						})
					}
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
