import React, { Fragment, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import sentRefundStyle from "./sentRefund.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setSentRefunds } from "../../../../redux/slices/seller/refunds";
import PaginationCom from "../../../../common/pagination/PaginationCom";
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import DateRangeSelector from "../../../../common/ui/dateRangeSelector";

const SentRefund = () => {
  const { sentRefunds, last_page, per_page, current_page, loading, error } =
    useSelector((state) => state.sentRefundsSlice);
  const [perPage, setPerPage] = useState(per_page);
  const [currentPage, setCurrentPage] = useState(current_page);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getApi(
      `applied-refund-requests?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`,
      setSentRefunds
    );
  }, [perPage, currentPage, startDate, endDate]);

  return (
    <Fragment>
      <div className={`${sentRefundStyle.background}`}>
        <section>
          <h5 className="px-md-4 pt-3 px-3 py-2">Applied Refund Request</h5>
        </section>

        <section>
          <div className="text-end pe-4 ">
            <DateRangeSelector
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
        </section>

        {(loading || error) && (
          <section className={`px-4 ${sentRefundStyle.tableData}`}>
            <Table borderless responsive>
              <thead>
                <tr>
                  <th>
                    <small>#</small>
                  </th>
                  <th>
                    <small>Date</small>
                  </th>
                  <th>
                    <small>Order Id</small>
                  </th>
                  <th>
                    <small>Product</small>
                  </th>
                  <th className="text-end">
                    <small>Amount</small>
                  </th>
                  <th>
                    <small>Reason</small>
                  </th>
                  <th className="text-center">
                    <small>Reject Reason</small>
                  </th>
                </tr>
              </thead>
            </Table>
          </section>
        )}

        {loading && <SimpleLoading />}
        {error ? <h1 className="text-center">{error}</h1> : ""}

        {!loading && sentRefunds?.length > 0 && !error && (
          <section className={`px-4 ${sentRefundStyle.tableData}`}>
            <Table borderless responsive>
              <thead>
                <tr>
                  <th>
                    <small>#</small>
                  </th>
                  <th>
                    <small>Date</small>
                  </th>
                  <th>
                    <small>Order Id</small>
                  </th>
                  <th>
                    <small>Product</small>
                  </th>
                  <th className="text-end">
                    <small>Amount</small>
                  </th>
                  <th>
                    <small>Reason</small>
                  </th>
                  <th className="text-center">
                    <small>Reject Reason</small>
                  </th>
                </tr>
              </thead>

              <tbody>
                <Fragment>
                  {sentRefunds.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <small>{item.id}</small>
                        </td>
                        <td>
                          <small>{item.created_at}</small>
                        </td>
                        <td>
                          <small>{item.order_code}</small>
                        </td>
                        <td>
                          {item.products.length > 0 &&
                            item.products.map((product, i) => {
                              return (
                                <div key={i}>
                                  <small>{product.name}</small>
                                </div>
                              );
                            })}
                        </td>
                        <td className="text-end">
                          <small>{item.refund_amount}</small>
                        </td>
                        <td>{item.reason}</td>
                        <td className="text-center">
                          <small>{item.reject_reason}</small>
                        </td>
                      </tr>
                    );
                  })}
                </Fragment>
              </tbody>
            </Table>

            <PaginationCom
              currentItem={sentRefunds}
              perPage={per_page}
              pageCount={last_page}
              currentPage={currentPage}
              setPerPage={setPerPage}
              setCurrentPage={setCurrentPage}
            />
          </section>
        )}
      </div>
    </Fragment>
  );
};

export default SentRefund;
