import React, { useEffect, useState , Fragment } from "react";
import axios from 'axios';
import { Table } from "react-bootstrap";
import paymentHisStyle from "./paymentHis.module.css";
import Select from "react-select";
import DateRangeSelector from "../../../common/ui/dateRangeSelector";
import ReactPaginate from 'react-paginate';
import { API_URL } from "../../services/Api/api";
import authHeader from "../../services/auth-header";
import TableLoading from "../../../common/loading/TableLoading";

const PaymentHistory = () => {
  const [currentItems, setCurrentItems]  	= useState([]);
	const [pageCount, setPageCount]         = useState(1);
	const [loading, setLoading] 			= useState(false);
	const [perPage, setPerPage]       = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios.get(`${API_URL}/payment-histories?date_from=${''}&date_to=${''}&per_page=${perPage}&page=${currentPage}`, {
			headers: {
			"Authorization": authHeader(),
			}
		}).then((response) => {
			setLoading(false);
			setCurrentItems(response?.data?.data);
			setCurrentPage(response?.data?.current_page);
			setPerPage(response?.data?.per_page);
			setPageCount(response?.data?.last_page);
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
      <div className={`${paymentHisStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Payment History</h5>
					<div>
						<DateRangeSelector startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
          </div>
        </section>

        <section className={`px-4 ${paymentHisStyle.tableData}`}>
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
              </tr>
            </thead>
						{loading ? ( <TableLoading/> )
						: (
							<tbody>
								{ currentItems.length > 0 &&
								<Fragment>
								{
									currentItems.map((item,key) => {
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
													<small>{item.payment_method}</small>
												</td>
											</tr>
										)
									})
								}
								</Fragment>
								}
							</tbody>
            )}
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

export default PaymentHistory;
