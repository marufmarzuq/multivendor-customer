import { useEffect, Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import withdrawStyle from "./moneyWithdraw.module.css";
import WithdrawModal from "./WithdrawModal";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import { setMoneyWithdraw } from "../../../redux/slices/seller/payments";
import DateRangeSelector from "../../../common/ui/dateRangeSelector";
import SimpleLoading from "../../../common/loading/SimpleLoading";
import PaginationCom from "../../../common/pagination/PaginationCom";
import {priceFormat} from "../../../hooks/helper";

const MoneyWithDraw = () => {
  const [show, setShow] = useState(false);
  const { moneyWithdraw, pendingBalance, per_page, last_page, loading, error } =
    useSelector((state) => state.moneyWithdrawSlice);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(per_page);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getApi(
      `withdrawal-requests?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`,
      setMoneyWithdraw
    );
  }, [perPage, currentPage, startDate, endDate]);

  return (
    <Fragment>
      <div className={`${withdrawStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Money Withdraw </h5>
          <hr />
        </section>

        <section className={withdrawStyle.balance}>
          <section>
            <div className={`${withdrawStyle.dashboard_card} `}>
              <div className="">
                <h1>Pending Balance</h1>
              </div>

              <div>
                <span>
                  <BsCurrencyDollar />
                </span>
              </div>
              <div>
                <h5>{priceFormat(pendingBalance)}</h5>
              </div>
            </div>
          </section>
          <div>
            <button onClick={() => setShow(!show)} className="btn btn-success">
              Send Withdraw Request
            </button>
          </div>

          <WithdrawModal show={show} setShow={setShow} />
        </section>

        <section>
          <h3 className="px-md-4 px-3 py-2 pt-3">Withdraw Request history </h3>
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
          <section className={`px-4 ${withdrawStyle.tableData}`}>
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
                  <th>
                    <small> Status </small>
                  </th>
                  <th>
                    <small>Message</small>
                  </th>
                </tr>
              </thead>
            </Table>
          </section>
        )}

        {loading && <SimpleLoading />}
        {error ? <h1 className="text-center">{error}</h1> : ""}
          <section className={`px-4 ${withdrawStyle.tableData}`}>
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
                  <th>
                    <small> Status </small>
                  </th>
                  <th>
                    <small>Message</small>
                  </th>
                </tr>
              </thead>

              <tbody>
								{ loading && <tr><td><SimpleLoading/></td></tr>}
                { moneyWithdraw.length > 0 && moneyWithdraw.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>
                        <small>{item.id}</small>
                      </td>
                      <td>
                        <small>{item.created_at}</small>
                      </td>
                      <td>
                        <small>{priceFormat(item.amount)}</small>
                      </td>
                      <td>
                        <small className={withdrawStyle.paid}>
                          {" "}
                          {item.status}{" "}
                        </small>
                      </td>
                      <td>
                        <small> {item.message} </small>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
						{moneyWithdraw.length > 0 &&
							<PaginationCom
								currentItem={moneyWithdraw}
								perPage={perPage}
								pageCount={last_page}
								currentPage={currentPage}
								setPerPage={setPerPage}
								setCurrentPage={setCurrentPage}
							/>
						}
          </section>

      </div>
    </Fragment>
  );
};

export default MoneyWithDraw;
