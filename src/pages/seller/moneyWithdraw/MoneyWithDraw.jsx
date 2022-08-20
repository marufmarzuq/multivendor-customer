import React, { Fragment } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import withdrawStyle from "./moneyWithdraw.module.css";
import WithdrawModal from "./WithdrawModal";
const MoneyWithDraw = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className={`${withdrawStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Money Withdraw </h5>
          <hr />
        </section>

        <section className={withdrawStyle.balance}>
          <section>
            <div className={`${withdrawStyle.dashboard_card} `}>
              <div className="">
                <h1>Pending Balance</h1>
              </div>

              <div>
                <span>
                  <BsCurrencyDollar />
                </span>
              </div>
              <div>
                <h5>$0.00</h5>
              </div>
            </div>
          </section>
          <div>
            <button onClick={() => setShow(!show)} className="btn btn-success">
              Send Withdraw Request
            </button>
          </div>

          <WithdrawModal show={show} setShow={setShow} />
        </section>

        <section>
          <h3 className="px-md-4 px-3 py-2 pt-3">Withdraw Request history </h3>
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
