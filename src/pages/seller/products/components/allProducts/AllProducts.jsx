import React, { Fragment , useEffect } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import allProductsStyle from "./allProducts.module.css";

import { BiCopy, BiEdit, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getApi } from "../../../../../api/apiCall";
import { setProducts,setSingleProduct } from "../../../../../redux/slices/seller/products";

const AllProducts = () => {

  const { products , loading, error } = useSelector((state) => state.productSlice);

  useEffect(() => {
    getApi("products.json", setProducts);
  }, []);
  if ( typeof products !=="undefined" ) {
		console.log(products.length);
		console.log(loading);
	}

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
						{ ( typeof products !=="undefined" && products.length > 0 ) &&
							products.map((item) => {
							<div className="row px-0 mx-0 ps-3 mt-3 pt-2">
								<div className={`col-2 col-lg-1 `}>
									<p>{item.id}</p>
								</div>
								<div className={`col-6 col-lg-2`}>
									<p>{item.title}</p>
								</div>
								<div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
									<p>Baby</p>
								</div>
								<div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
									<p>9899</p>
								</div>
								<div className={`col-4 col-lg-2 `}>
									<p> 10000.00</p>
								</div>
								<div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
									<div className="form-check form-switch">
										<input
											className="form-check-input"
											type="checkbox"
											role="switch"
											id="flexSwitchCheckDefault"
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
						})}
						</section>
					</div>
				</div>
			)}

    </Fragment>
  );
};

export default AllProducts;
