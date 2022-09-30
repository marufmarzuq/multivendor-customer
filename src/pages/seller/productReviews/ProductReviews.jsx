import { useEffect, useState, Fragment } from "react";
import { Table } from "react-bootstrap";
import { setReviews } from "../../../redux/slices/seller/products";
import reviewsStyle from "./productReviews.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import PaginationCom from "../../../common/pagination/PaginationCom";
import SimpleLoading from "../../../common/loading/SimpleLoading";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { API_URL, markutosSellerApi } from "../../services/Api/api";
import { toast } from "react-toastify";

const ProductReviews = () => {
  const { reviews, total, per_page, last_page, current_page, loading, error } =
    useSelector((state) => state.reviewSlice);
  const [perPage, setPerPage] = useState(per_page);
  const [currentPage, setCurrentPage] = useState(current_page);
  const [search, setSearch] = useState("");

  const changeStatus = (item) => {
    markutosSellerApi
      .get(`reviews/change-status?review_id=${item.id}`, {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    getApi(
      `reviews?search_value=${search}&sort_by=price_high_to_low&per_page=${perPage}&page=${currentPage}`,
      setReviews
    );
  }, [perPage, currentPage, search]);

  return (
    <Fragment>
      <div className={`${reviewsStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Product Reviews</h5>
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

        {(loading || error) && (
          <section className={`px-4 ${reviewsStyle.tableData}`}>
            <Table borderless responsive>
              <thead>
                <tr>
                  <th>
                    <small>#</small>
                  </th>
                  <th>
                    <small>Product</small>
                  </th>
                  <th>
                    <small>Customer</small>
                  </th>
                  <th>
                    <small>Rating</small>
                  </th>
                  <th>
                    <small>Comment</small>
                  </th>
                  <th>
                    <small>Published</small>
                  </th>
                </tr>
              </thead>
            </Table>
          </section>
        )}
        {loading && <SimpleLoading />}
        {error ? <h1 className="text-center">{error}</h1> : ""}

        {!loading && reviews?.length > 0 && !error && (
          <section className={`px-4 ${reviewsStyle.tableData}`}>
            <Table borderless responsive>
              <thead>
                <tr>
                  <th>
                    <small>#</small>
                  </th>
                  <th>
                    <small>Product</small>
                  </th>
                  <th>
                    <small>Customer</small>
                  </th>
                  <th>
                    <small>Rating</small>
                  </th>
                  <th>
                    <small>Comment</small>
                  </th>
                  <th>
                    <small>Published</small>
										<div>Active switch to show Reviews in the frontend</div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {reviews.length > 0 &&
                  reviews.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <small>{item.id}</small>
                        </td>
                        <td>
                          <small>{item.product_name}</small>
                        </td>
                        <td>
                          <small>{item.customer_name} </small>
                        </td>
                        <td>
                          <small>{item.rating}</small>
                        </td>
                        <td>
                          <small>{item.comment}</small>
                        </td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              onChange={() => changeStatus(item)}
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                              value={item.status == 1 ? true : false}
                              defaultChecked={item.status == 1 ? true : false}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>

            <PaginationCom
              currentItem={reviews}
              perPage={per_page}
              pageCount={last_page}
              currentPage={currentPage}
              setPerPage={setPerPage}
              setCurrentPage={setCurrentPage}
            />
          </section>
        )}
      </div>
    </Fragment>
  );
};

export default ProductReviews;
