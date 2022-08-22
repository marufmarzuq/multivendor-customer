import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import paymentHisStyle from "./paymentHis.module.css";
const PaymentHistory = () => {
  return (
    <Fragment>
      <div className={`${paymentHisStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Payment History</h5>
        </section>

        <section className={`px-4 ${paymentHisStyle.tableData}`}>
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
                  <small>Amount</small>
                </th>
                <th>
                  <small>Payment Method</small>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <small>1</small>
                </td>
                <td>
                  <small> 17-05-2021</small>
                </td>
                <td>
                  <small> ৳10,000.000 </small>
                </td>
                <td>
                  <small> Cash</small>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default PaymentHistory;
