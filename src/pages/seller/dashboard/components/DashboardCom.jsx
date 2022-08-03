import React, { Fragment } from "react";
import dashboardStyle from "./dashboard.module.css";

import { wave1, wave2, wave3, verified } from "../../../../assets/index";
import { Link } from "react-router-dom";

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
              <div
                className={`${dashboardStyle.dashboard_card} ${dashboardStyle.dashboard_card_1}`}
              >
                <h1>1</h1>
                <p>Products</p>
                <img src={wave1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div
                className={`${dashboardStyle.dashboard_card} ${dashboardStyle.dashboard_card_2}`}
              >
                <h1>0</h1>
                <p>Total Sale</p>
                <img src={wave2} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div
                className={`${dashboardStyle.dashboard_card} ${dashboardStyle.dashboard_card_3}`}
              >
                <h1>৳ 100000</h1>
                <p>Total Earnings</p>
                <img src={wave3} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div
                className={`${dashboardStyle.dashboard_card} ${dashboardStyle.dashboard_card_1}`}
              >
                <h1>0</h1>
                <p>Successful orders</p>
                <img src={wave1} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row mt-4  ">
            <div className={`col-sm-7 `}>
              <div className={`p-4 ${dashboardStyle.orders}`}>
                <h6>Orders</h6>

                <div className={`row px-0 ${dashboardStyle.orders_part}`}>
                  <div className="col-10">
                    <p>Total orders:</p>
                  </div>
                  <div className="col-2">
                    <p>8</p>
                  </div>
                </div>

                <div className={`row px-0 ${dashboardStyle.orders_part}`}>
                  <div className="col-10">
                    <p>Pending orders:</p>
                  </div>
                  <div className="col-2">
                    <p>6</p>
                  </div>
                </div>

                <div className={`row px-0 ${dashboardStyle.orders_part}`}>
                  <div className="col-10">
                    <p>Canceled orders:</p>
                  </div>
                  <div className="col-2">
                    <p>0</p>
                  </div>
                </div>

                <div className={`row px-0 ${dashboardStyle.orders_part}`}>
                  <div className="col-10">
                    <p>Successful orders:</p>
                  </div>
                  <div className="col-2">
                    <p>2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-sm-5 mt-3 mt-md-5 mt-xxl-4`}>
              <div className={` p-4 ${dashboardStyle.verified}`}>
                <img src={verified} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row px-0 mt-3">
            <div className="col-sm-8">
              <div className={dashboardStyle.products}>
                <h6>Products</h6>

                <div className="row mt-4 px-0">
                  <div className="col-6">
                    <h5>Category</h5>
                  </div>

                  <div className="col-6">
                    <h5>Product</h5>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-6">
                    <p>Baby</p>
                  </div>
                  <div className="col-6">
                    <p>1</p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Link to="products/add-products" className="btn btn-primary">
                    Add New Product
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mt-3 mt-md-0">
              <div className={`${dashboardStyle.shop}`}>
                <h6>Shop</h6>
                <p>Manage & organize your shop</p>

                <button className="btn btn-primary mt-3">Go to setting</button>
              </div>
              <div
                className={`
                mt-3 
              ${dashboardStyle.payment}`}
              >
                <h6>Payment</h6>
                <p>Configure your payment method</p>

                <button className="btn btn-primary mt-3">Configure Now</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default DashboardCom;
