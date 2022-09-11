import { Fragment, useEffect, useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import allProductsStyle from "./allProducts.module.css";
import { BiCopy, BiEdit, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getApi } from "../../../../../api/apiCall";
import { setProducts } from "../../../../../redux/slices/seller/products";
import PaginationCom from "../../../../../common/pagination/PaginationCom";
import SimpleLoading from "../../../../../common/loading/SimpleLoading";
import axios from "axios";
import authHeader from "../../../../services/auth-header";
import { API_URL } from "../../../../services/Api/api";

const AllProducts = () => {
  const { products, last_page, per_page, current_page , loading, error  } = useSelector((state) => state.productSlice);
  const [perPage, setPerPage] = useState(per_page);
	const [currentPage, setCurrentPage] = useState(current_page);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getApi(
      `products?search_value=${search}&sort_by=price_high_to_low&per_page=${perPage}&page=${currentPage}`,
      setProducts
    );
  }, [perPage,currentPage,search]);

	const removeItem =(id)=>{
	axios
		.delete(
			`${API_URL}/products/delete?id=${id}`,
			{
				headers: {
					Authorization: authHeader(),
				},
			})
		.then((response) => {
		});
	}

  return (
    <Fragment>
      <div>
        <div className={`${allProductsStyle.background}`}>
          <section>
            <h5 className="px-md-4 px-3 py-2 pt-3">All Products</h5>
            <div className="tableFilters">
              <input
                type="text"
                className="table-search-input"
                placeholder="Search product by name"
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

              <div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
                <p> Options</p>
              </div>
            </div>
          </section>
          {error ? <h1>{error}</h1> : ""}
          {loading ? (<SimpleLoading/>) :
          (
            <section>
              {products.length > 0 && (
                <Fragment>
                  {products.map((item, key) => {
                    return (
                      <div className="row px-0 mx-0 ps-3 mt-3 pt-2" key={key}>
                        <div className={`col-2 col-lg-1 `}>
                          <p>{item.id}</p>
                        </div>
                        <div className={`col-6 col-lg-2`}>
                          <p>{item.name}</p>
                        </div>
                        <div
                          className={`col-4 col-lg-1 ${allProductsStyle.hide}`}
                        >
                          {item.category}
                          <div> Sub category : {item.sub_category} </div>
                        </div>
                        <div
                          className={`col-4 col-lg-2 ${allProductsStyle.hide}`}
                        >
                          <p>{item.current_stock}</p>
                        </div>
                        <div className={`col-4 col-lg-2 `}>
                          <p> {item.unit_price}</p>
                        </div>
                        <div
                          className={`col-4 col-lg-1 ${allProductsStyle.hide}`}
                        >
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

                        <div
                          className={`col-4 col-lg-1 ${allProductsStyle.hide}`}
                        >
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

                        <div
                          className={`col-4 col-lg-2 ${allProductsStyle.hide}`}
                        >
                          <p>
                            <Link to="/seller/products/update">
                              <button className={allProductsStyle.preview}>
                                <BiEdit />
                              </button>
                            </Link>

                            <button className={allProductsStyle.preview}>
                              <BiCopy />
                            </button>
                            <button className={allProductsStyle.del} onClick={() =>removeItem(item.id)}>
                              <RiDeleteBin2Line />
                            </button>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                { products.length > 0 &&
									<PaginationCom
										currentItem={products}
										perPage={per_page}
										pageCount={last_page}
										currentPage={currentPage}
										setPerPage={setPerPage}
										setCurrentPage={setCurrentPage}
									/>
								}
                </Fragment>
              )}
            </section>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default AllProducts;
