import React from "react";
import { Table } from "react-bootstrap";
import orderStyle from "./userOrder.module.css";
import { AiOutlineDelete } from "react-icons/ai";
const UserOrder = () => {
  return (
    <div>
      <h4>Orders</h4>
      <section className={` ${orderStyle.tableData}`}>
        <table>
          <thead>
            <tr>
              <th>
                <small>ID Number</small>
              </th>
              <th>
                <small>Date</small>
              </th>
              <th>
                <small>Total</small>
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
                <small>1484445417445121</small>
              </td>
              <td>
                <small>01-08-2022</small>
              </td>
              <td>
                <small> $200 </small>
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

export default UserOrder;
