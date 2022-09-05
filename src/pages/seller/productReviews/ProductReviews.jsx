import { useEffect,Fragment } from "react";
import { Table } from "react-bootstrap";
import { setReviews } from "../../../redux/slices/seller/products";
import reviewsStyle from "./productReviews.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";

const ProductReviews = () => {

	const { reviews , loading, error } = useSelector((state) => state.reviewSlice);

	useEffect(() => {
		getApi("productReviews.json", setReviews);
	}, []);

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
            <tbody>
            { reviews.length > 0 &&
							reviews.map((item,key) => {
							return (
              <tr key={key}>
                <td>
                  <small>{item.id}</small>
                </td>
                <td>
                  <small>{item.title}</small>
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
            )}
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default ProductReviews;
