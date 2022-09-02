import React from "react";
import { Table } from "react-bootstrap";
import orderStyle from "./orderReturns.module.css";
import { AiOutlineDelete } from "react-icons/ai";
const UserOrderReturns = () => {
  return (
    <div>
      <h4>Order Return Requests</h4>
      <section className={` ${orderStyle.tableData}`}>
        <table>
          <thead>
            <tr>
              <th>
                <small>ID Number</small>
              </th>
              <th>
                <small> Order ID Number</small>
              </th>
              <th className="text-center">
                <small>Items Count</small>
              </th>
              <th>
                <small>Date</small>
              </th>
              <th>
                <small> Status</small>
              </th>
              <th className="text-center">
                <small>Actions</small>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <small>1484-4454174</small>
              </td>
              <td>
                <small>4545-411544454</small>
              </td>
              <td className="text-center">
                <small> 5 </small>
              </td>
              <td>
                <small>01-08-2022</small>
              </td>
              <td>
                <small className="text-danger"> Pending </small>
              </td>
              <td className="text-center">
                <small>
                  <button className="btn">
                    <AiOutlineDelete />
                  </button>
                </small>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UserOrderReturns;
