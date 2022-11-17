import { useEffect, useState, Fragment } from "react";
import { Table } from "react-bootstrap";
import { setReviews } from "../../../redux/slices/seller/products";
import reviewsStyle from "./shopReviews.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import PaginationCom from "../../../common/pagination/PaginationCom";
import SimpleLoading from "../../../common/loading/SimpleLoading";

const ShopReviews = () => {
  const { reviews, total, per_page, last_page, current_page, loading, error } =
    useSelector((state) => state.reviewSlice);
  const [perPage, setPerPage] = useState(per_page);
  const [currentPage, setCurrentPage] = useState(current_page);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getApi(`shop-reviews?per_page=20&sort_by=high_to_low`, setReviews);
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
                    <small>Name</small>
                  </th>
                  <th>
                    <small>Email</small>
                  </th>
                  <th>
                    <small>Rating</small>
                  </th>
                  <th>
                    <small>Comment</small>
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
                    <small>Name</small>
                  </th>
                  <th>
                    <small>Email</small>
                  </th>
                  <th>
                    <small>Rating</small>
                  </th>
                  <th>
                    <small>Comment</small>
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
                          <small>{item.name}</small>
                        </td>
                        <td>
                          <small>{item.email} </small>
                        </td>
                        <td>
                          <small>{item.rating}</small>
                        </td>
                        <td>
                          <small>{item.comment}</small>
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

export default ShopReviews;
