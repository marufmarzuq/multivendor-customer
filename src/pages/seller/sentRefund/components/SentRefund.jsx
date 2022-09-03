import React, { Fragment } from "react";
import { Table } from "react-bootstrap";

import sentRefundStyle from "./sentRefund.module.css";

const SentRefund = () => {
  return (
    <Fragment>
      <div className={`${sentRefundStyle.background}`}>
        <section>
          <h5 className="px-md-4 pt-3 px-3 py-2">Applied Refund Request</h5>
        </section>
        <section className={`px-4 ${sentRefundStyle.tableData}`}>
          <Table borderless responsive>
            <thead>
              <tr>
                <th>
                  <small>#</small>
                </th>
                <th>
                  <small>Date</small>
                </th>
                <th>
                  <small>Order Id</small>
                </th>
                <th>
                  <small>Product</small>
                </th>
                <th className="text-end">
                  <small>Amount</small>
                </th>
                <th className="text-center">
                  <small>Status</small>
                </th>
                <th>Reason</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <small>1</small>
                </td>
                <td>
                  <small>01-08-2022</small>
                </td>
                <td>
                  <small>20220801-23454823</small>
                </td>
                <td>
                  <small>Seller product</small>
                </td>
                <td className="text-end">
                  <small>৳100,000.000</small>
                </td>
                <td className="text-center">
                  <small>
                    <span className={sentRefundStyle.paid}>Paid</span>
                    <span className={sentRefundStyle.paid}>Accepted</span>
                  </small>
                </td>
              </tr>

              <tr>
                <td>
                  <small>1</small>
                </td>
                <td>
                  <small>01-08-2022</small>
                </td>
                <td>
                  <small>20220801-23454823</small>
                </td>
                <td>
                  <small>Seller product</small>
                </td>
                <td className="text-end">
                  <small>৳100,000.000</small>
                </td>
                <td className="text-center">
                  <small>
                    <span className={sentRefundStyle.unpaid}>UnPaid</span>
                    <span className={sentRefundStyle.unpaid}>Rjected</span>
                  </small>
                </td>
                <td> Bad product</td>
              </tr>
            </tbody>
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default SentRefund;
