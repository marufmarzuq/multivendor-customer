import React, { Fragment } from "react";
import sentRefundStyle from "./sentRefund.module.css";

const SentRefund = () => {
  return (
    <Fragment>
      <div className={`${sentRefundStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2">Applied Refund Request</h5>
          <hr />
        </section>

        <section>
          <div
            className={`row px-0 mx-0 ps-3 mt-4 pt-2 ${sentRefundStyle.header}`}
          >
            <div className={`col-4 col-lg-2 ${sentRefundStyle.hide}`}>
              <p>#</p>
            </div>
            <div className={`col-4 col-lg-2 ${sentRefundStyle.hide}`}>
              <p>Date</p>
            </div>
            <div className="col-4 col-lg-2">
              <p>Order Id</p>
            </div>
            <div className={`col-4 col-lg-2 ${sentRefundStyle.hide}`}>
              <p>Product</p>
            </div>
            <div className={`col-4 col-lg-2 `}>
              <p> Amount</p>
            </div>
            <div className="col-4 col-lg-2">
              <p>Status</p>
            </div>
          </div>
          <hr />
        </section>

        <section>
          <div className="row px-0 mx-0 ps-3 mt-4 pt-2">
            <div className="col-4 col-lg-2">
              <p>01</p>
            </div>
            <div className={`col-4 col-lg-2 ${sentRefundStyle.hide}`}>
              <p>18-05-2022 </p>
            </div>
            <div className="col-4 col-lg-2">
              <p> 8796324569 </p>
            </div>
            <div className={`col-4 col-lg-2 ${sentRefundStyle.hide}`}>
              <p className={sentRefundStyle.code}>20210515454</p>
            </div>
            <div className={`col-4 col-lg-2 ${sentRefundStyle.hide}`}>
              <p>৳6,000</p>
            </div>
            <div className="col-4 col-lg-2">
              <span className={sentRefundStyle.paid}>Paid</span>
            </div>
          </div>
        </section>

        <section>
          <div className="row px-0 mx-0 ps-3 mt-4 pt-2">
            <div className="col-4 col-lg-2">
              <p>02</p>
            </div>
            <div className={`col-4 col-lg-2 ${sentRefundStyle.hide}`}>
              <p>18-05-2022 </p>
            </div>
            <div className="col-4 col-lg-2">
              <p> 6863489545 </p>
            </div>
            <div className={`col-4 col-lg-2 ${sentRefundStyle.hide}`}>
              <p className={sentRefundStyle.code}>45454545464</p>
            </div>
            <div className={`col-4 col-lg-2 ${sentRefundStyle.hide}`}>
              <p>৳11,256</p>
            </div>
            <div className="col-4 col-lg-2">
              <span className={sentRefundStyle.unpaid}>UnPaid</span>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default SentRefund;
