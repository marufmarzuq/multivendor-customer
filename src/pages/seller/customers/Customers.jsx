import React from "react";
import { Table } from "react-bootstrap";
import customerStyle from "./cusomers.module.css";
const Customers = () => {
  return (
    <Fragment>
      <div className={`${customerStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Payment History</h5>
          <hr />
        </section>

        <section className={`px-4 ${customerStyle.tableData}`}>
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

export default Customers;
