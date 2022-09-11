import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import paymentHisStyle from "./paymentHis.module.css";
import DateRangeSelector from "../../../common/ui/dateRangeSelector";
import { API_URL } from "../../services/Api/api";
import authHeader from "../../services/auth-header";
import TableLoading from "../../../common/loading/TableLoading";
import PaginationCom from "../../../common/pagination/PaginationCom";

const PaymentHistory = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${API_URL}/payment-histories?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`,
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
        setPerPage(response?.data?.per_page);
        setPageCount(response?.data?.last_page);
      });
  }, [perPage, currentPage, startDate, endDate]);

  return (
    <Fragment>
      <div className={`${paymentHisStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Payment History</h5>
          <div>
            <DateRangeSelector
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
        </section>

        <section className={`px-4 ${paymentHisStyle.tableData}`}>
          {(loading || currentItems.length <= 0) && (
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
                    <small>Amount</small>
                  </th>
                  <th className="text-center">
                    <small>Payment Method</small>
                  </th>
                </tr>
              </thead>
            </Table>
          )}

          {!loading && currentItems.length > 0 ? (
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
                    <small>Amount</small>
                  </th>
                  <th className="text-center">
                    <small>Payment Method</small>
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentItems.length > 0 && (
                  <Fragment>
                    {currentItems.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>
                            <small>{item.id}</small>
                          </td>
                          <td>
                            <small>{item.created_at}</small>
                          </td>
                          <td>
                            <small>{item.amount}</small>
                          </td>
                          <td className="text-center">
                            <small>{item.payment_method}</small>
                          </td>
                        </tr>
                      );
                    })}
                  </Fragment>
                )}
              </tbody>
            </Table>
          ) : (
            <TableLoading />
          )}

          {!loading && (
            <PaginationCom
              currentItem={currentItems}
              perPage={perPage}
              pageCount={pageCount}
              currentPage={currentPage}
              setPerPage={setPerPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default PaymentHistory;
