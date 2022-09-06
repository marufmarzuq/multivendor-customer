import { Fragment , useEffect, useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import allProductsStyle from "./allProducts.module.css";
import Select from 'react-select'
import { BiCopy, BiEdit, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getApi } from "../../../../../api/apiCall";
import { setProducts } from "../../../../../redux/slices/seller/products";
import ReactPaginate from 'react-paginate';

const AllProducts = () => {

  const { products , total , per_page ,loading, error } = useSelector((state) => state.productSlice);
	const [currentPage, setCurrentPage] = useState(null);
	const [perPage, setPerPage] = useState(per_page);
	const [search, setSearch]     = useState('');

  useEffect(() => {
    // getApi("products.json", setProducts);
    getApi("v1/seller/products?search_value="+`${search}`+"&sort_by=price_high_to_low&per_page="+`${perPage}`+"&page="+`${currentPage}`, setProducts);
  },[]);

	const handlePageClick = (event) => {
		setCurrentPage(event.selected+1)
	};
	const options = [
		{ value: '5', label: '5' },
		{ value: '10', label: '10' },
		{ value: '15', label: '15' },
		{ value: '20', label: '20' }
	]
  return (
    <Fragment>
				<div>
					<div className={`${allProductsStyle.background}`}>
						<section>
							<h5 className="px-md-4 px-3 py-2 pt-3">All Products</h5>
							<div className="table-filters px-md-4 px-3 pt-3 py-2">
									<Select options={options} />
									<input
										type="text"
										className="table-search-input"
										placeholder="Search by product name"
										value={search}
														onChange={(e) => setSearch(e.target.value)}
									/>
							</div>
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
						{ error ? <h1>{error}</h1> : ""}
						{loading ? ( <h3>Loading</h3>)
						: (
							<Fragment>
								<section>
								{ products.length > 0 &&
									products.map((item,key) => {
										return (
											<div className="row px-0 mx-0 ps-3 mt-3 pt-2" key={key}>
												<div className={`col-2 col-lg-1 `}>
													<p>{item.id}</p>
												</div>
												<div className={`col-6 col-lg-2`}>
													<p>{item.name}</p>
												</div>
												<div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
													{ item.category }
													<div>Sub category : { item.sub_category } </div>
												</div>
												<div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
													<p>{item.current_stock}</p>
												</div>
												<div className={`col-4 col-lg-2 `}>
													<p> {item.unit_price}</p>
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
								<div className="d-flex justify-content-end pe-3">
									<ReactPaginate
										breakLabel="..."
										nextLabel="next >"
										onPageChange={handlePageClick}
										pageRangeDisplayed={per_page}
										pageCount={total}
										previousLabel="< previous"
										containerClassName="pagination"
										pageClassName="page__count"
										activeLinkClassName="active"
									/>
								</div>
							</Fragment>
						)}
					</div>
				</div>
    </Fragment>
  );
};

export default AllProducts;
