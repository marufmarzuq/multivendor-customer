import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import withdrawStyle from "./moneyWithdraw.module.css";
const MoneyWithDraw = () => {
  return (
    <Fragment>
      <div className={`${withdrawStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Money Withdraw </h5>
          <hr />
        </section>

        <section className={withdrawStyle.balance}>
          <h4>Pending Balance : ৳-50,000.000</h4>
          <button className="btn btn-success"> Send Withdraw Request</button>
        </section>

        <section>
          <h3 className="px-md-4 px-3 py-2 pt-3">Withdraw Request history </h3>
          <hr />
        </section>

        <section className={`px-4 ${withdrawStyle.tableData}`}>
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
                  <small> Status </small>
                </th>
                <th>
                  <small>Message</small>
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
                  <small> 20000.00 </small>
                </td>
                <td>
                  <small className={withdrawStyle.paid}> Approved </small>
                </td>
                <td>
                  <small> please approve </small>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default MoneyWithDraw;
