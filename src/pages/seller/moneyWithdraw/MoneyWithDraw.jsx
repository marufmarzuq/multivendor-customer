import { useEffect , Fragment , useState } from "react";
import { Table } from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import withdrawStyle from "./moneyWithdraw.module.css";
import WithdrawModal from "./WithdrawModal";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import { setMoneyWithdraw } from "../../../redux/slices/seller/payments";
import ReactPaginate from 'react-paginate';

const MoneyWithDraw = () => {
  const [show, setShow] = useState(false);
	const { moneyWithdraw , pendingBalance, total , per_page ,loading,error } = useSelector((state) => state.moneyWithdrawSlice);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(per_page);
	const [search, setSearch]     = useState(null);
  useEffect(() => {
    // getApi("moneyWithdraw.json", setMoneyWithdraw);
		getApi(`withdrawal-requests?per_page=${perPage}&page=${currentPage}`, setMoneyWithdraw);
		// getApi(`payment-histories?search_value=${search}&sort_by=price_high_to_low&per_page=${perPage}&page=${currentPage}`, setMoneyWithdraw);
  }, []);
	const handlePageClick = (event) => {
		setCurrentPage(event.selected+1)
	};
	const options = [
		{ value: '5', label: '5' },
		{ value: '10', label: '10' },
		{ value: '15', label: '15' },
		{ value: '20', label: '20' }
	]
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
                <h5>{pendingBalance}</h5>
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
						{ error ? <h1>{error}</h1> : ""}
						{loading ? ( <tbody><tr><td>Loading</td></tr></tbody> )
						: (
            <Fragment>
						{ moneyWithdraw.length > 0 &&
							<tbody>
							{
							moneyWithdraw.map((item,key) => {
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
									<td>
										<small className={withdrawStyle.paid}> {item.status} </small>
									</td>
									<td>
										<small> {item.message} </small>
									</td>
								</tr>
								)
							})}
							</tbody>
						}
            </Fragment>
            )}
          </Table>
          { moneyWithdraw.length > 0 &&
						<div className="d-flex justify-content-end pe-3">
							<ReactPaginate
								breakLabel="..."
								nextLabel="Next >"
								onPageChange={handlePageClick}
								pageRangeDisplayed={per_page}
								pageCount={total}
								previousLabel="< Previous"
								containerClassName="pagination"
								pageClassName="page__count"
								activeLinkClassName="active"
							/>
						</div>
					}
        </section>
      </div>
    </Fragment>
  );
};

export default MoneyWithDraw;
