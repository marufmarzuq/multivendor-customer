import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import reviewsStyle from "./productReviews.module.css";
const ProductReviews = () => {
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

            <tbody>
              <tr>
                <td>
                  <small>1</small>
                </td>
                <td>
                  <small>20220801-23454823</small>
                </td>
                <td>
                  <small>Mr. Cusomer </small>
                </td>
                <td>
                  <small>4.5</small>
                </td>
                <td>
                  <small> Test Comment</small>
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <small>2</small>
                </td>
                <td>
                  <small>20220801-23454823</small>
                </td>
                <td>
                  <small>Mr. Cusomer </small>
                </td>
                <td>
                  <small>4.5</small>
                </td>
                <td>
                  <small> Test Comment</small>
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default ProductReviews;
