import { useEffect,useState,Fragment } from "react";
import { Table } from "react-bootstrap";
import { setReviews } from "../../../redux/slices/seller/products";
import reviewsStyle from "./productReviews.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import ReactPaginate from 'react-paginate';
import SimpleLoading from "../../../common/loading/SimpleLoading";
import Select from "react-select";

const ProductReviews = () => {

	const { reviews , total , per_page , last_page, current_page ,loading, error} = useSelector((state) => state.reviewSlice);
  const [perPage, setPerPage] = useState(per_page);
	const [currentPage, setCurrentPage] = useState(current_page);
  const [search, setSearch] = useState("");

	useEffect(() => {
		getApi(`reviews?search_value=${search}&sort_by=price_high_to_low&per_page=${perPage}&page=${currentPage}`, setReviews);
  }, [perPage,currentPage,search]);


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
						{ error ? <h3>{error}</h3> : ""}
						{loading ? ( <SimpleLoading/> )
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
						</Fragment>
            )}
          </Table>
          {
          reviews.length > 0 &&
						<div className="d-flex justify-content-end pe-3">
							<Select
								options={options}
								className={""}
								defaultValue={{ label: 10, value: 10 }}
								onChange={(e) => setPerPage(e.value)}
							/>
							<ReactPaginate
								breakLabel="..."
								nextLabel="Next >"
								onPageChange={(e)=>{setCurrentPage(e.selected + 1)}}
								pageRangeDisplayed={per_page}
								pageCount={Math.ceil(last_page)}
								previousLabel="< Previous"
								containerClassName="pagination"
								pageClassName="page__count"
								activeLinkClassName="active"
								forcePage={currentPage-1}
							/>
					</div>
          }
        </section>
      </div>
    </Fragment>
  );
};

export default ProductReviews;
