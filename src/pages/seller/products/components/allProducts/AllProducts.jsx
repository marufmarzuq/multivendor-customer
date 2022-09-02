import React, { Fragment , useEffect } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import allProductsStyle from "./allProducts.module.css";

import { BiCopy, BiEdit, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getApi } from "../../../../../api/apiCall";
import { setProducts,setSingleProduct } from "../../../../../redux/slices/seller/products";
import TablePagination from "../../../../../common/tablePagination/TablePagination";

const AllProducts = () => {

  const { products , loading, error } = useSelector((state) => state.productSlice);

  useEffect(() => {
    getApi("products.json", setProducts);
    // getApi("v1/seller/products/search=''&page=1&limit=1", setProducts);
  }, []);

  return (
    <Fragment>
      {error ? <h1>{error}</h1> : ""}

			{loading ? (
				<h3>Loading</h3>
			) : (
				<div>
					<div className={`${allProductsStyle.background}`}>
						<section>
							<h5 className="px-md-4 px-3 py-2 pt-3">All Products</h5>
						</section>

						<section>
							<div className={`row px-0 mx-0 ps-3  ${allProductsStyle.header}`}>
								<div className={`col-2 col-lg-1 `}>
									<p>#</p>
								</div>
								<div className={`col-6 col-lg-2`}>
									<p>Name</p>
								</div>
								<div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
									<p>Category</p>
								</div>
								<div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
									<p>Current Qty</p>
								</div>
								<div className={`col-4 col-lg-2 `}>
									<p> Base Price</p>
								</div>
								<div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
									<p> Published</p>
								</div>

								<div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
									<p> Featured</p>
								</div>

								<div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
									<p> Options</p>
								</div>
							</div>
						</section>
						<section>
						{ products.length > 0 &&
							products.map((item,key) => {
								return (
								<div className="row px-0 mx-0 ps-3 mt-3 pt-2" key={key}>
									<div className={`col-2 col-lg-1 `}>
										<p>{item.id}</p>
									</div>
									<div className={`col-6 col-lg-2`}>
										<p>{item.title}</p>
									</div>
									<div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
										{ item.categories.length > 0 &&
												item.categories.map((category,i) => {
												return (
													<div key={i}>
														<li>{category.cat_name}</li>
													</div>
												)
										})}
									</div>
									<div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
										<p>{item.current_qty}</p>
									</div>
									<div className={`col-4 col-lg-2 `}>
										<p> {item.price}</p>
									</div>
									<div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												role="switch"
												id="flexSwitchCheckDefault"
												defaultChecked={item.published}
											/>
										</div>
									</div>

									<div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												role="switch"
												id="flexSwitchCheckDefault"
												defaultChecked={item.featured}
											/>
										</div>
									</div>

									<div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
										<p>
											<Link to="/seller/products/update">
												<button className={allProductsStyle.preview}>
													<BiEdit />
												</button>
											</Link>

											<button className={allProductsStyle.preview}>
												<BiCopy />
											</button>
											<button className={allProductsStyle.del}>
												<RiDeleteBin2Line />
											</button>
										</p>
									</div>
								</div>
								)
						})}
						</section>
						<TablePagination/>
					</div>
				</div>
			)}

    </Fragment>
  );
};

export default AllProducts;
