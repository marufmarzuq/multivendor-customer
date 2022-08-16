import React, { Fragment, useEffect } from "react";
import dashboardStyle from "./dashboard.module.css";

import { BsCurrencyDollar, BsShop } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineShop } from "react-icons/ai";
import { Table } from "react-bootstrap";
import SaleHistory from "./SaleHistory";

const DashboardCom = () => {
  return (
    <Fragment>
      <div className="px-4 py-2">
        <section>
          <div className="row px-0">
            <div className="col">
              <h1 className={`mb-4 ${dashboardStyle.header_title}`}>
                Dashboard
              </h1>
            </div>
          </div>
        </section>

        <section>
          <div className="row px-0">
            <div className="col-md-3">
              <div className={`${dashboardStyle.dashboard_card} `}>
                <div className="col">
                  <h1>Total Revenue</h1>
                  <small> ( Last 30 Days ) </small>
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
            </div>

            <div className="col-md-3">
              <div className={`${dashboardStyle.dashboard_card} `}>
                <div className="col">
                  <h1>Total Order</h1>
                  <small> ( Last 30 Days ) </small>
                </div>

                <div>
                  <span>
                    <AiOutlineShoppingCart />
                  </span>
                </div>
                <div>
                  <h5> 0 </h5>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className={`${dashboardStyle.dashboard_card} `}>
                <div className="col">
                  <h1>Todays Revenue</h1>
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
            </div>

            <div className="col-md-3">
              <div className={`${dashboardStyle.dashboard_card} `}>
                <div className="col">
                  <h1>Total Shops</h1>
                </div>

                <div>
                  <span>
                    <AiOutlineShop />
                  </span>
                </div>
                <div>
                  <h5> 10</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col">
              <SaleHistory />
            </div>
          </div>
        </section>
        <section>
          <div className={` ${dashboardStyle.tables}`}>
            <div className={dashboardStyle.table}>
              <h3 className={dashboardStyle.tableHeader}>Recent Orders</h3>
              <div>
                <Table hover borderless responsive>
                  <thead>
                    <tr>
                      <th>
                        <small> Tracking Number</small>
                      </th>
                      <th>
                        <small> Total </small>
                      </th>
                      <th>
                        <small> Order Date </small>
                      </th>
                      <th>
                        <small> Status</small>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <small>20220801</small>
                      </td>
                      <td>
                        <small> 20 </small>
                      </td>
                      <td>
                        <small> 2022-08-01 23:46:29</small>
                      </td>
                      <td>
                        <small> Pending</small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <small>20220801</small>
                      </td>
                      <td>
                        <small> 20 </small>
                      </td>
                      <td>
                        <small> 2022-08-01 23:46:29</small>
                      </td>
                      <td>
                        <small> Pending</small>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className={dashboardStyle.table}>
              <h3 className={dashboardStyle.tableHeader}>Recent Withdrawals</h3>
              <div>
                <Table hover borderless responsive>
                  <thead>
                    <tr>
                      <th>
                        <small> Shop Name</small>
                      </th>
                      <th>
                        <small> Amount </small>
                      </th>
                      <th>
                        <small> Status </small>
                      </th>
                      <th>
                        <small> Created</small>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <small>shop one</small>
                      </td>
                      <td>
                        <small> 2000 </small>
                      </td>
                      <td>
                        <small> Pending</small>
                      </td>
                      <td>
                        <small> 2022-08-01 23:46:29</small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <small>shop two</small>
                      </td>
                      <td>
                        <small> 2000 </small>
                      </td>
                      <td>
                        <small> Pending</small>
                      </td>
                      <td>
                        <small> 2022-08-01 23:46:29</small>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row mt-3">
            <div className="col">
              <div className={dashboardStyle.table}>
                <h3 className={dashboardStyle.tableHeader}>Popular Products</h3>
                <div>
                  <Table hover borderless responsive>
                    <thead>
                      <tr>
                        <th>
                          <small> ID </small>
                        </th>
                        <th>
                          <small> Name </small>
                        </th>
                        <th>
                          <small> Group </small>
                        </th>
                        <th>
                          <small> Shop</small>
                        </th>
                        <th>
                          <small> Price/Unit</small>
                        </th>
                        <th>
                          <small> Quantity</small>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <small> 101 </small>
                        </td>
                        <td>
                          <small> Mobile phone </small>
                        </td>
                        <td>
                          <small> Electronics</small>
                        </td>
                        <td>
                          <small>Shop one</small>
                        </td>
                        <td>
                          <small>$ 250</small>
                        </td>
                        <td>
                          <small>10</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <small> 101 </small>
                        </td>
                        <td>
                          <small> Mobile phone </small>
                        </td>
                        <td>
                          <small> Electronics</small>
                        </td>
                        <td>
                          <small>Shop one</small>
                        </td>
                        <td>
                          <small>$ 250</small>
                        </td>
                        <td>
                          <small>10</small>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default DashboardCom;
