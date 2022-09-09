import { useEffect,useState,Fragment } from "react";
import { Table } from "react-bootstrap";
import { setReviews } from "../../../redux/slices/seller/products";
import reviewsStyle from "./productReviews.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import ReactPaginate from 'react-paginate';

const ProductReviews = () => {

	const { reviews , total , per_page ,loading, error} = useSelector((state) => state.reviewSlice);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(per_page);
	const [search, setSearch]     = useState(null);

	useEffect(() => {
		getApi(`reviews?search_value=${search}&sort_by=price_high_to_low&per_page=${perPage}&page=${currentPage}`, setReviews);
	}, []);

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
      <div className={`${reviewsStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Product Reviews</h5>
        </section>

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
						{ error ? <h1>{error}</h1> : ""}
						{loading ? ( <h3>Loading</h3>)
						: (
						<Fragment>
							<tbody>
							{ reviews.length > 0 &&
								reviews.map((item,key) => {
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
												className="form-check-input"
												type="checkbox"
												role="switch"
												id="flexSwitchCheckDefault"
												defaultChecked={item.published}
												/>
										</div>
									</td>
								</tr>
								)
								})}
							</tbody>
							<div className="d-flex justify-content-end pe-3">
								<ReactPaginate
									breakLabel="..."
									nextLabel="Next >"
									onPageChange={handlePageClick}
									pageRangeDisplayed={per_page}
									pageCount={total}
									previousLabel="< Previous"
									containerClassName="pagination"
									pageClassName="page__count"
									activeLinkClassName="active"
								/>
							</div>
						</Fragment>
            )}
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default ProductReviews;
