import React from "react";
import { Table } from "react-bootstrap";
import receivedRefundStyle from "./receivedRefund.module.css";

const ReveivedRefund = () => {
  return (
    <div>
      <div className={`${receivedRefundStyle.background}`}>
        <section>
          <h5 className="px-md-4 pt-3 px-3 py-2">Received Refund Request</h5>
        </section>
        <section className={`px-4 ${receivedRefundStyle.tableData}`}>
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
                {/* <th>Reason</th> */}
                <th className="text-center">
                  <small>Approval</small>
                </th>
                <th className="text-center">
                  <small>Reject</small>
                </th>
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
                  <small className={receivedRefundStyle.paid}>Approved</small>
                </td>
                <td className="text-center">
                  <div className="form-check d-flex justify-content-center form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </td>
                <td className="text-center">
                  <div className="form-checkv d-flex justify-content-center form-switch">
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
                  <small className={receivedRefundStyle.paid}>Approved</small>
                </td>
                <td>
                  <div className="form-check d-flex justify-content-center form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check d-flex justify-content-center form-switch">
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
    </div>
  );
};

export default ReveivedRefund;
