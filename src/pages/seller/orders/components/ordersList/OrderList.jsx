import React, { useEffect, Fragment } from "react";
import { BsDownload, BsEyeFill } from "react-icons/bs";
import { useState } from "react";
import orderListStyle from "./orderList.module.css";
import PdfModal from "../../../../../common/pdfModal/PdfModal";
import OrderModal from "../orderModal/OrderModal";
import { useSelector } from "react-redux";
import { getApi } from "../../../../../api/apiCall";
import { setOrders } from "../../../../../redux/slices/seller/orders";
import TablePagination from "../../../../../common/tablePagination/TablePagination";

const OrderList = () => {
  const { orders, loading, error } = useSelector((state) => state.orderSlice);
  const [show, setShow] = useState(false);
  const [pdfShow, setPdfShow] = useState(false);

  useEffect(() => {
    getApi("orders.json", setOrders);
    // getApi("v1/seller/orders/search=''", setOrders);
  }, []);
  console.log(orders);
  return (
    <Fragment>
      <div className={`${orderListStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 pt-3 py-2">Orders</h5>
        </section>

        <section>
          <div
            className={` ${orderListStyle.orderRow} px-0 mx-0 ps-3 mt-3 ${orderListStyle.header}`}
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
              <p>Amount</p>
            </div>
            <div className={` ${orderListStyle.hide}`}>
              <p>Customer</p>
            </div>
            <div className={` text-center ${orderListStyle.hide}`}>
              <p>Delivery Status</p>
            </div>
            <div className="text-center">
              <p> Payment Status</p>
            </div>
            <div className="text-center">
              <p>Options</p>
            </div>
          </div>
        </section>

        {error ? <h1>{error}</h1> : ""}
        {loading ? (
          <h3>Loading</h3>
        ) : (
          <Fragment>
            <section>
              {orders.length > 0 &&
                orders.map((item, key) => {
                  return (
                    <div
                      className={` ${orderListStyle.orderRow} px-0 mx-0 ps-3 mt-4 pt-2 `}
                      key={key}
                    >
                      <div>
                        <p>{item.id}</p>
                      </div>
                      <div onClick={() => setShow(!show)}>
                        <p className={orderListStyle.code}>{item.orderCode}</p>
                      </div>
                      <div className={` ${orderListStyle.hide}`}>
                        <p>{item.totalProducts} </p>
                      </div>
                      <div className={` ${orderListStyle.hide}`}>
                        <p>{item.amount} </p>
                      </div>
                      <div className={`${orderListStyle.hide}`}>
                        <span> {item.orderDate} </span>
                      </div>
                      <div className={`text-center ${orderListStyle.hide}`}>
                        <span> {item.deliveryStatus} </span>
                      </div>
                      <div className="text-center">
                        <span className={orderListStyle.unpaid}>
                          {item.paymentStatus}
                        </span>
                      </div>
                      <div className="text-center">
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
                  );
                })}
            </section>
            <TablePagination />
          </Fragment>
        )}
        <PdfModal show={pdfShow} setShow={setPdfShow} />
        <OrderModal page="order" show={show} setShow={setShow} />
      </div>
    </Fragment>
  );
};

export default OrderList;
