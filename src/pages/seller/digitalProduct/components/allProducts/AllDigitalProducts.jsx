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
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { priceFormat } from "../../../../../hooks/helper";

const AllDigitalProducts = () => {
  const { products, last_page, per_page, current_page, loading, error } =
    useSelector((state) => state.productSlice);
  const [perPage, setPerPage] = useState(per_page);
  const [currentPage, setCurrentPage] = useState(current_page);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getApi(
      `digital-products?search_value=${search}&sort_by=price_high_to_low&per_page=${perPage}&page=${currentPage}`,
      setProducts
    );
  }, [perPage, currentPage, search]);

  const removeItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(`${API_URL}/delete-product?product_id=${id}`, {
            headers: {
              Authorization: authHeader(),
            },
          })
          .then((response) => {
            toast(response.data.message);
            getApi(
              `digital-products?search_value=${search}&sort_by=price_high_to_low&per_page=${perPage}&page=${currentPage}`,
              setProducts
            );
          });
      }
    });
  };

  return (
    <Fragment>
      <div className={`${allProductsStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">All Digital Products</h5>
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
          <div className={`row px-0 mx-0 ps-3 mt-4 ${allProductsStyle.header}`}>
            <div className={`col-2 col-lg-1 `}>
              <p>#</p>
            </div>
            <div className={`col-6 col-lg-2`}>
              <p>Name</p>
            </div>
            <div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
              <p>Category</p>
            </div>
            <div
              className={`col-4 col-lg-1 text-center ${allProductsStyle.hide}`}
            >
              <p>Stock</p>
            </div>
            <div className={`col-4 col-lg-2 text-center `}>
              <p> Base Price</p>
            </div>
            <div
              className={`col-4 col-lg-1 text-center ${allProductsStyle.hide}`}
            >
              <p> Published</p>
            </div>

            <div
              className={`col-4 col-lg-1 text-center ${allProductsStyle.hide}`}
            >
              <p> Featured</p>
            </div>

            <div
              className={`col-4 col-lg-2 text-center ${allProductsStyle.hide}`}
            >
              <p> Options</p>
            </div>
          </div>
        </section>

        <section>
          {error ? <h1>{error}</h1> : ""}
          {loading ? (
            <SimpleLoading />
          ) : (
            <Fragment>
              <section>
                {products.length > 0 &&
                  products.map((item, key) => {
                    return (
                      <div className="row px-0 mx-0 ps-3 mt-3 pt-2" key={key}>
                        <div className={`col-2 col-lg-1 `}>
                          <p>{item.id}</p>
                        </div>
                        <div className={`col-6 col-lg-2`}>
                          <p>{item.name}</p>
                        </div>
                        <div
                          className={`col-4 col-lg-2 ${allProductsStyle.hide}`}
                        >
                          {item.category}
                          <div>Sub category : {item.sub_category} </div>
                        </div>
                        <div
                          className={`col-4 col-lg-1 text-center ${allProductsStyle.hide}`}
                        >
                          <p>{item.current_stock}</p>
                        </div>
                        <div className={`col-4 col-lg-2  text-center `}>
                          <p> {priceFormat(item.unit_price)}</p>
                        </div>
                        <div
                          className={`col-4 col-lg-1 d-none d-lg-flex justify-content-center ${allProductsStyle.hide}`}
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
                          className={`col-4 col-lg-1 d-none d-lg-flex  justify-content-center ${allProductsStyle.hide}`}
                        >
                          <div className="form-check  form-switch">
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
                          className={`col-4 text-center col-lg-2 ${allProductsStyle.hide}`}
                        >
                          <p>
                            <Link
                              to={`/seller/products/digital/update/${item.id}`}
                            >
                              <button className={allProductsStyle.preview}>
                                <BiEdit />
                              </button>
                            </Link>

                            <button className={allProductsStyle.preview}>
                              <BiCopy />
                            </button>
                            <button
                              className={allProductsStyle.del}
                              onClick={() => removeItem(item.id)}
                            >
                              <RiDeleteBin2Line />
                            </button>
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </section>
              <PaginationCom
                currentItem={products}
                perPage={per_page}
                pageCount={last_page}
                currentPage={currentPage}
                setPerPage={setPerPage}
                setCurrentPage={setCurrentPage}
              />
            </Fragment>
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default AllDigitalProducts;
