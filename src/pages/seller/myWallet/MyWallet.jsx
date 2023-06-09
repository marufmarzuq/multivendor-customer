import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import walletStyle from "./myWallet.module.css";
import DateRangeSelector from "../../../common/ui/dateRangeSelector";
import PaginationCom from "../../../common/pagination/PaginationCom";
import { API_URL } from "../../services/Api/api";
import authHeader from "../../services/auth-header";
import {priceFormat} from "../../../hooks/helper";
import SimpleLoading from "../../../common/loading/SimpleLoading";

const MyWallet = () => {
  const [balance, setBalance] = useState(0);
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
        `${API_URL}/wallet?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`,
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        setLoading(false);
        setBalance(response?.data?.balance);
        setCurrentItems(response?.data?.histories?.data);
        setCurrentPage(response?.data?.histories?.current_page);
        setPerPage(response?.data?.histories?.per_page);
        setPageCount(response?.data?.histories?.last_page);
      });
  }, [perPage, currentPage, startDate, endDate]);

  return (
    <Fragment>
      <div className={`${walletStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">My Wallet </h5>
          <hr />
        </section>

        <section className={walletStyle.balance}>
          <section>
            <div className={`${walletStyle.dashboard_card} `}>
              <div className="">
                <h1>Wallet Balance</h1>
              </div>
              <div>
                <span>
                  <BsCurrencyDollar />
                </span>
              </div>
              <div>
                <h5>{priceFormat(balance)}</h5>
              </div>
            </div>
          </section>
        </section>

        <section>
          <h3 className="px-md-4 px-3 py-2 pt-3">Wallet recharge history </h3>
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
        <section className={`px-4 ${walletStyle.tableData}`}>
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
                  <small>Payment Method</small>
                </th>
                <th>
                  <small>Approval</small>
                </th>
              </tr>
            </thead>
						{loading && <tbody><tr><td><SimpleLoading /></td></tr></tbody>}
            <tbody>
            {!loading && (
							currentItems.map((item, key) => {
								return (
									<tr key={key}>
										<td>
											<small>{item.id}</small>
										</td>
										<td>
											<small>{item.created_at}</small>
										</td>
										<td>
											<small>{priceFormat(item.seller_earning)}</small>
										</td>
										<td>
											<small>{item.earning_method}</small>
										</td>
										<td>
											<small>{item.approval}</small>
										</td>
									</tr>
								);
							})
            )}
            </tbody>
          </Table>
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
        </section>
      </div>
    </Fragment>
  );
};

export default MyWallet;
