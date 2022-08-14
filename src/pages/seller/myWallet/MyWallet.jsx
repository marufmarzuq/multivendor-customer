import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import walletStyle from "./myWallet.module.css";

const MyWallet = () => {
  return (
    <Fragment>
      <div className={`${walletStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">My Wallet </h5>
          <hr />
        </section>

        <section className={walletStyle.balance}>
          <h4>Wallet Balance : ৳-30,000.000</h4>
          <button className="btn btn-success"> Recharge Wallet</button>
        </section>

        <section>
          <h3 className="px-md-4 px-3 py-2 pt-3">Wallet recharge history </h3>
          <hr />
        </section>

        <section className={`px-4 ${walletStyle.tableData}`}>
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
                <th>
                  <small>Approval</small>
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
                  <small> Card </small>
                </td>
                <td>
                  <small> Pending </small>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default MyWallet;
