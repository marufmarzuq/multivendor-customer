import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import customerStyle from "./cusomers.module.css";
const Customers = () => {
  return (
    <Fragment>
      <div className={`${customerStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Customers</h5>
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
                  <small>Name</small>
                </th>
                <th>
                  <small>Email</small>
                </th>
                <th>
                  <small> Total Orders</small>
                </th>
                <th>
                  <small> Total Reviews</small>
                </th>
                <th>
                  <small> Total Refunds</small>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <small>1</small>
                </td>
                <td>
                  <small> Mr. Cusotomer</small>
                </td>
                <td>
                  <small> customer@email.com </small>
                </td>
                <td>
                  <small> 10 </small>
                </td>
                <td>
                  <small> 5 </small>
                </td>
                <td>
                  <small> 3 </small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>2</small>
                </td>
                <td>
                  <small> Mr. Cusotomer</small>
                </td>
                <td>
                  <small> customer@email.com </small>
                </td>
                <td>
                  <small> 15 </small>
                </td>
                <td>
                  <small> 13 </small>
                </td>
                <td>
                  <small> 2</small>
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
