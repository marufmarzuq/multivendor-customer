import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import commissionStyle from "./commissionStyle.module.css";
const CommissonHistory = () => {
  return (
    <Fragment>
      <div className={`${commissionStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Commission History</h5>
        </section>

        <section className={`px-4 ${commissionStyle.tableData}`}>
          <Table borderless responsive>
            <thead>
              <tr>
                <th>
                  <small>#</small>
                </th>
                <th>
                  <small>Order Code</small>
                </th>
                <th>
                  <small>Admin Commission</small>
                </th>
                <th>
                  <small>Seller Earning</small>
                </th>
                <th>
                  <small>Created At</small>
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
                  <small> 20000.00 </small>
                </td>
                <td>
                  <small>80000.00</small>
                </td>
                <td>
                  <small> 2022-08-01 23:46:29</small>
                </td>
              </tr>

              <tr>
                <td>
                  <small>1</small>
                </td>
                <td>
                  <small>20220801-23454823</small>
                </td>
                <td>
                  <small> 20000.00 </small>
                </td>
                <td>
                  <small>80000.00</small>
                </td>
                <td>
                  <small> 2022-08-01 23:46:29</small>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default CommissonHistory;
