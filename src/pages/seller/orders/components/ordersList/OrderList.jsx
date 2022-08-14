import React, { Fragment } from "react";
import { BsDownload, BsEyeFill } from "react-icons/bs";
import { useState } from "react";
import orderListStyle from "./orderList.module.css";
import PdfModal from "../../../../../common/pdfModal/PdfModal";
import OrderModal from "../orderModal/OrderModal";

const OrderList = () => {
  const [show, setShow] = useState(false);
  const [pdfShow, setPdfShow] = useState(false);
  return (
    <Fragment>
      <div className={`${orderListStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2">Orders</h5>
          <hr />
        </section>

        <section>
          <div
            className={` ${orderListStyle.orderRow} px-0 mx-0 ps-3 mt-4 pt-2 ${orderListStyle.header}`}
          >
            <div>
              <p>#</p>
            </div>
            <div>
              <p>Order Code</p>
            </div>
            <div className={` ${orderListStyle.hide}`}>
              <p>Num. of Products</p>
            </div>
            <div className={` ${orderListStyle.hide}`}>
              <p>Customer</p>
            </div>
            <div className={` ${orderListStyle.hide}`}>
              <p>Amount</p>
            </div>
            <div className={` ${orderListStyle.hide}`}>
              <p>Delivery Status</p>
            </div>
            <div>
              <p> Payment Status</p>
            </div>
            <div>
              <p>Options</p>
            </div>
          </div>
          <hr />
        </section>

        <section>
          <div
            className={` ${orderListStyle.orderRow} px-0 mx-0 ps-3 mt-4 pt-2 `}
          >
            <div>
              <p>1</p>
            </div>
            <div onClick={() => setShow(!show)}>
              <p className={orderListStyle.code}>20210518-44545</p>
            </div>
            <div className={` ${orderListStyle.hide}`}>
              <p>10 </p>
            </div>
            <div className={` ${orderListStyle.hide}`}>
              <p>Mr. Customer </p>
            </div>
            <div className={`${orderListStyle.hide}`}>
              <span> 100 </span>
            </div>
            <div className={`${orderListStyle.hide}`}>
              <span> On delivery </span>
            </div>
            <div>
              <span className={orderListStyle.paid}>Paid</span>
            </div>
            <div>
              <button
                onClick={() => setShow(!show)}
                className={orderListStyle.preview}
              >
                <BsEyeFill />
              </button>
              <button
                onClick={() => setPdfShow(!pdfShow)}
                className={orderListStyle.invoice}
              >
                <BsDownload />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div
            className={` ${orderListStyle.orderRow} px-0 mx-0 ps-3 mt-4 pt-2 `}
          >
            <div>
              <p>2</p>
            </div>
            <div onClick={() => setShow(!show)}>
              <p className={orderListStyle.code}>20210518-44545</p>
            </div>
            <div className={` ${orderListStyle.hide}`}>
              <p>10 </p>
            </div>
            <div className={` ${orderListStyle.hide}`}>
              <p>Mr. Customer </p>
            </div>
            <div className={`${orderListStyle.hide}`}>
              <span> 100 </span>
            </div>
            <div className={`${orderListStyle.hide}`}>
              <span> Pending </span>
            </div>
            <div>
              <span className={orderListStyle.unpaid}>UnPaid</span>
            </div>
            <div>
              <button
                onClick={() => setShow(!show)}
                className={orderListStyle.preview}
              >
                <BsEyeFill />
              </button>
              <button
                onClick={() => setPdfShow(!pdfShow)}
                className={orderListStyle.invoice}
              >
                <BsDownload />
              </button>
            </div>
          </div>
        </section>
        <PdfModal show={pdfShow} setShow={setPdfShow} />
        <OrderModal page="order" show={show} setShow={setShow} />
      </div>
    </Fragment>
  );
};

export default OrderList;
