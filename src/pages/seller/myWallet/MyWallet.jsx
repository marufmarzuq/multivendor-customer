import React, { useEffect, useState , Fragment } from "react";
import axios from 'axios';
import { Table } from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import walletStyle from "./myWallet.module.css";
import Select from "react-select";
import DateRangeSelector from "../../../common/ui/dateRangeSelector";
import ReactPaginate from 'react-paginate';
import { API_URL } from "../../services/Api/api";
import authHeader from "../../services/auth-header";

const MyWallet = () => {
  const [balance, setBalance]  	= useState(0);
  const [currentItems, setCurrentItems]  	= useState([]);
	const [pageCount, setPageCount]         = useState(1);
	const [loading, setLoading] 			= useState(false);
	const [perPage, setPerPage]       = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios.get(`${API_URL}/wallet?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`, {
			headers: {
			"Authorization": authHeader(),
			}
		}).then((response) => {
			setLoading(false);
			setBalance(response?.data?.balance);
			setCurrentItems(response?.data?.histories?.data);
			setCurrentPage(response?.data?.histories?.current_page);
			setPerPage(response?.data?.histories?.per_page);
			setPageCount(response?.data?.histories?.last_page);
		})
    }, [perPage,currentPage,startDate,endDate]);

	const options = [
		{ value: '5', label: '5' },
		{ value: '10', label: '10' },
		{ value: '15', label: '15' },
		{ value: '20', label: '20' }
	]
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
                <h5>${balance}</h5>
              </div>
            </div>
          </section>
        </section>

        <section>
          <h3 className="px-md-4 px-3 py-2 pt-3">Wallet recharge history </h3>
					<div>
						<DateRangeSelector />
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

            <tbody>
              <tr>
                <td>
                  <small>1</small>
                </td>
                <td>
                  <small>01-08-2022</small>
                </td>
                <td>
                  <small> 20000.00 </small>
                </td>
                <td>
                  <small> Card </small>
                </td>
                <td>
                  <small> Pending </small>
                </td>
              </tr>
            </tbody>
          </Table>
          {
          currentItems.length > 0 &&
						<div className="d-flex justify-content-end pe-3">
							<Select
								options={options}
								className={""}
								defaultValue={{ label: 10, value: 10 }}
								onChange={(e) => setPerPage(e.value)}
							/>
							<ReactPaginate
								breakLabel="..."
								nextLabel="Next >"
								marginPagesDisplayed={2}
								onPageChange={(e)=>{setCurrentPage(e.selected + 1)}}
								pageRangeDisplayed={perPage}
								pageCount={Math.ceil(pageCount)}
								previousLabel="< Previous"
								containerClassName="pagination"
								pageClassName="page__count"
								activeLinkClassName="active"
								forcePage={currentPage-1}
							/>
						</div>
          }
        </section>
      </div>
    </Fragment>
  );
};

export default MyWallet;
