import React, { useEffect, useState, Fragment } from "react";
import { Table } from "react-bootstrap";
import commissionStyle from "./commissionStyle.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import { setCommissionHis } from "../../../redux/slices/seller/payments";
import DateRangeSelector from "../../../common/ui/dateRangeSelector";
import SimpleLoading from "../../../common/loading/SimpleLoading";
import PaginationCom from "../../../common/pagination/PaginationCom";
import {priceFormat} from "../../../hooks/helper";

const CommissionHistory = () => {
  const { commissionHis, loading, per_page, last_page, error } = useSelector(
    (state) => state.commissionHisSlice
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(per_page);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getApi(
      `commission-histories?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`,
      setCommissionHis
    );
  }, [perPage, currentPage, startDate, endDate]);

  return (
    <Fragment>
      <div className={`${commissionStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Commission History</h5>
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
          <section className={`px-4 ${commissionStyle.tableData}`}>
            <Table borderless responsive>
              <thead>
                <tr>
                  <th>
                    <small>#</small>
                  </th>
                  <th>
                    <small>Order Code</small>
                  </th>
                  <th>
                    <small>Admin Commission</small>
                  </th>
                  <th>
                    <small>Seller Earning</small>
                  </th>
                  <th>
                    <small>Created At</small>
                  </th>
                </tr>
              </thead>
            </Table>
          </section>
        )}
        {loading && <SimpleLoading />}
        {error ? <h1 className="text-center">{error}</h1> : ""}

        {!loading && !error > 0 && (
          <section className={`px-4 ${commissionStyle.tableData}`}>
            <Table borderless responsive>
              <thead>
                <tr>
                  <th>
                    <small>#</small>
                  </th>
                  <th>
                    <small>Order Code</small>
                  </th>
                  <th>
                    <small>Admin Commission</small>
                  </th>
                  <th>
                    <small>Seller Earning</small>
                  </th>
                  <th>
                    <small>Created At</small>
                  </th>
                </tr>
              </thead>

              <tbody>
                {commissionHis.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>
                        <small>{item.id}</small>
                      </td>
                      <td>
                        <small>{item.order_code}</small>
                      </td>
                      <td>
                        <small>{item.admin_commission}</small>
                      </td>
                      <td>
                        <small>{priceFormat(item.seller_earning)}</small>
                      </td>
                      <td>
                        <small>{item.created_at}</small>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {commissionHis.length > 0 && (
              <PaginationCom
                currentItem={commissionHis}
                perPage={per_page}
                pageCount={last_page}
                currentPage={currentPage}
                setPerPage={setPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </section>
        )}
      </div>
    </Fragment>
  );
};

export default CommissionHistory;
