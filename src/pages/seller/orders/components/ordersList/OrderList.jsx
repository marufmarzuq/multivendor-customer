import React, { useEffect, Fragment } from "react";
import axios from "axios";
import { BsDownload, BsEyeFill } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Table } from "react-bootstrap";
import { useState } from "react";
import orderListStyle from "./orderList.module.css";
import PdfModal from "../../../../../common/pdfModal/PdfModal";
import OrderModal from "../orderModal/OrderModal";
import DateRangeSelector from "../../../../../common/ui/dateRangeSelector";
import SimpleLoading from "../../../../../common/loading/SimpleLoading";
import PaginationCom from "../../../../../common/pagination/PaginationCom";
import { API_URL } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";
import { useDebounce } from "../../../../../hooks/useDebounce";
import Select from "react-select";
import { priceFormat } from "../../../../../hooks/helper";

const OrderList = () => {
  const [show, setShow] = useState(false);
  const [pdfShow, setPdfShow] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(search, 500);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [getOrderStatus, setOrderStatus] = useState("");
  const [getDeliveryStatus, setDeliveryStatus] = useState("");
  const [currentOrderId, setCurrentOrderId] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${API_URL}/orders?search_value=${search}&sort_order_status=${getOrderStatus}&sort_delivery=${getDeliveryStatus}&date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`,
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        setLoading(false);
        setCurrentItems(response?.data?.data);
        setCurrentPage(response?.data?.current_page);
        setPageCount(response?.data?.last_page);
      });
  }, [
    currentPage,
    perPage,
    search,
    getOrderStatus,
    getDeliveryStatus,
    startDate,
    endDate,
  ]);

  const orderOptions = [
    { value: "confirmed", label: "Confirmed" },
    { value: "processing", label: "Processing" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
    { value: "pending_payment", label: "Pending Payment" },
    { value: "failed", label: "Failed" },
    { value: "draft", label: "Draft" },
  ];

  const deliveryStatus = [
    { value: "Pending", label: "Pending" },
    { value: "Confirmed", label: "Confirmed" },
    { value: "Delivered", label: "Delivered" },
    { value: "On delivery", label: "On delivery" },
    { value: "Canceled", label: "Canceled" },
  ];

  const modalOpen = (id) => {
    setCurrentOrderId(id);
    setShow(!show);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearch(debouncedSearchTerm);
    } else {
      setCurrentItems([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <Fragment>
      <div className={`${orderListStyle.background}`}>
        <section>
          <div className="table-top-header d-flex justify-content-between">
            <div className="table-title">
              <h5 className="px-md-4 px-3 pt-3 py-2">Orders</h5>
            </div>
          </div>
        </section>

        <section>
          {/* <div
            className={`table-filters px-md-4 px-3 pt-3 py-2 tableFilters ${orderListStyle.filterContainer} `}
          > */}

          <div
            className={` px-md-4 px-3 pt-3 table-filters ${orderListStyle.filterContainer}`}
          >
            <Select
              options={orderOptions}
              className="me-0 me-md-3 mb-1 mb-md-0"
              placeholder={"Sort by Order Status"}
              onChange={(e) => setOrderStatus(e.value)}
            />
            <Select
              options={deliveryStatus}
              className="me-0 me-md-3 mb-1 mb-md-0"
              placeholder={"Sort by Delivery Status"}
              onChange={(e) => setDeliveryStatus(e.value)}
            />
            <input
              type="text"
              className={`table-search-input`}
              placeholder="Search by Order Code"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div>
              <DateRangeSelector
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </div>
          </div>
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
              <p> Order Status</p>
            </div>
            <div className="text-center">
              <p>Options</p>
            </div>
          </div>
        </section>
        {loading ? (
          <SimpleLoading />
        ) : (
          <Fragment>
            <section>
              {currentItems.length > 0 ? (
                currentItems.map((item, key) => {
                  return (
                    <div
                      className={` ${orderListStyle.orderRow} px-0 mx-0 ps-3 mt-4 pt-2 `}
                      key={key}
                    >
                      <div className="action-column">{item.id}</div>
                      <div onClick={() => modalOpen(item.id)}>
                        <p className={orderListStyle.code}>{item.code}</p>
                      </div>
                      <div className={` ${orderListStyle.hide}`}>
                        <p>{item.num_of_product}</p>
                      </div>
                      <div className={` ${orderListStyle.hide}`}>
                        <p>{priceFormat(item.grand_total)} </p>
                      </div>
                      <div className={`${orderListStyle.hide}`}>
                        <span> {item.customer_name} </span>
                      </div>
                      <div className={`text-center ${orderListStyle.hide}`}>
                        <span> {item.delivery_status} </span>
                      </div>
                      <div className="text-center">
                        <span className={orderListStyle.unpaid}>
                          {item.order_status}
                        </span>
                      </div>
                      <div className="text-center">
                        <button
                          onClick={() => modalOpen(item.id)}
                          className={orderListStyle.preview}
                        >
                          <BsEyeFill />
                        </button>
                        {/* <button
                          onClick={() => setPdfShow(!pdfShow)}
                          className={orderListStyle.invoice}
                        >
                          <BsDownload />
                        </button> */}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center">There is no item</p>
              )}
            </section>
          </Fragment>
        )}

        {currentItems.length > 0 && (
          <PaginationCom
            currentItem={currentItems}
            perPage={perPage}
            pageCount={pageCount}
            currentPage={currentPage}
            setPerPage={setPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        <PdfModal show={pdfShow} setShow={setPdfShow} />
        <OrderModal
          orderId={currentOrderId}
          page="order"
          show={show}
          setShow={setShow}
          time={new Date()}
        />
      </div>
    </Fragment>
  );
};

export default OrderList;
