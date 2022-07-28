import React, { Fragment } from "react";
import purchaseStyle from "./purchaseHis.module.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { BsArrowDown, BsDownload, BsEyeFill } from "react-icons/bs";

import { useState } from "react";
import OrderModal from "../orderModal/OrderModal";

const PurchseHis = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className={`${purchaseStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2">Purchase History</h5>
          <hr />
        </section>

        <section>
          <div
            className={`row px-0 mx-0 ps-3 mt-4 pt-2 ${purchaseStyle.header}`}
          >
            <div className="col-4 col-lg-2">
              <p>Code</p>
            </div>
            <div className={`col-4 col-lg-2 ${purchaseStyle.hide}`}>
              <p>Date</p>
            </div>
            <div className="col-4 col-lg-2">
              <p>Amount</p>
            </div>
            <div className={`col-4 col-lg-2 ${purchaseStyle.hide}`}>
              <p>Delivery Status</p>
            </div>
            <div className={`col-4 col-lg-2 ${purchaseStyle.hide}`}>
              <p> Payment Status</p>
            </div>
            <div className="col-4 col-lg-2">
              <p>Options</p>
            </div>
          </div>
          <hr />
        </section>

        <section>
          <div className="row px-0 mx-0 ps-3 mt-4 pt-2">
            <div className="col-4 col-lg-2" onClick={() => setShow(!show)}>
              <p className={purchaseStyle.code}>20210518-44545</p>
            </div>
            <div className="col-4 col-lg-2">
              <p>18-05-2021 </p>
            </div>
            <div className="col-4 col-lg-2">
              <p> ৳1,000.000 </p>
            </div>
            <div className="col-4 col-lg-2">
              <span> On delivery</span>
            </div>
            <div className="col-4 col-lg-2">
              <span className={purchaseStyle.paid}>Paid</span>
            </div>
            <div className="col-4 col-lg-2">
              <button className={purchaseStyle.del}>
                <RiDeleteBin2Line />
              </button>
              <button className={purchaseStyle.preview}>
                <BsEyeFill />
              </button>
              <button className={purchaseStyle.invoice}>
                <BsDownload />
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="row px-0 mx-0 ps-3 mt-4 pt-2">
            <div className="col-4 col-lg-2" onClick={() => setShow(!show)}>
              <p className={purchaseStyle.code}>20210518-44545</p>
            </div>
            <div className="col-4 col-lg-2">
              <p>18-05-2021 </p>
            </div>
            <div className="col-4 col-lg-2">
              <p> ৳1,2000.000 </p>
            </div>
            <div className="col-4 col-lg-2">
              <span>Pending</span>
            </div>
            <div className="col-4 col-lg-2">
              <span className={purchaseStyle.unpaid}>UnPaid</span>
            </div>
            <div className="col-4 col-lg-2">
              <button className={purchaseStyle.del}>
                <RiDeleteBin2Line />
              </button>
              <button className={purchaseStyle.preview}>
                <BsEyeFill />
              </button>
              <button className={purchaseStyle.invoice}>
                <BsDownload />
              </button>
            </div>
          </div>
        </section>

        <OrderModal show={show} setShow={setShow} />
      </div>
    </Fragment>
  );
};

export default PurchseHis;
