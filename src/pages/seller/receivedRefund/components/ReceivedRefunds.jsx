import { useEffect, useState, Fragment } from "react";
import { Table } from "react-bootstrap";
import receivedRefundStyle from "./receivedRefund.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setReceivedRefunds } from "../../../../redux/slices/seller/refunds";
import PaginationCom from "../../../../common/pagination/PaginationCom";
import TableLoading from "../../../../common/loading/TableLoading";
import DateRangeSelector from "../../../../common/ui/dateRangeSelector";
import SimpleLoading from "../../../../common/loading/SimpleLoading";

const ReceivedRefunds = () => {
  const { receivedRefunds, last_page, per_page, current_page, loading, error } =
    useSelector((state) => state.receivedRefundsSlice);
  const [perPage, setPerPage] = useState(per_page);
  const [currentPage, setCurrentPage] = useState(current_page);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getApi(
      `refund-requests?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`,
      setReceivedRefunds
    );
  }, [perPage, startDate, endDate, currentPage]);

  return (
    <div>
      <div className={`${receivedRefundStyle.background}`}>
        <section>
          <h5 className="px-md-4 pt-3 px-3 py-2">Received Refund Request</h5>
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
          <section className={`px-4 ${receivedRefundStyle.tableData}`}>
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
                  <th className="text-center">
                    <small>Status</small>
                  </th>
                  <th className="text-center">
                    <small>Approval</small>
                  </th>
                  <th className="text-center">
                    <small>Reject</small>
                  </th>
                </tr>
              </thead>
            </Table>
          </section>
        )}

        {loading && <SimpleLoading />}
        {error ? <h1 className="text-center">{error}</h1> : ""}

        {!loading && receivedRefunds?.length > 0 && !error && (
          <section className={`px-4 ${receivedRefundStyle.tableData}`}>
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
                  <th className="text-center">
                    <small>Status</small>
                  </th>
                  <th className="text-center">
                    <small>Approval</small>
                  </th>
                  <th className="text-center">
                    <small>Reject</small>
                  </th>
                </tr>
              </thead>

              <tbody>
                {receivedRefunds.length > 0 &&
                  receivedRefunds.map((item, key) => {
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
                        <td className="text-center">
                          <small className={receivedRefundStyle.paid}>
                            {item.refund_status}
                          </small>
                        </td>
                        <td className="text-center">
                          <div className="form-check d-flex justify-content-center form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="form-checkv d-flex justify-content-center form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>

            <PaginationCom
              currentItem={receivedRefunds}
              perPage={per_page}
              pageCount={last_page}
              currentPage={currentPage}
              setPerPage={setPerPage}
              setCurrentPage={setCurrentPage}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default ReceivedRefunds;
