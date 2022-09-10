import React, { Fragment,useEffect,useState } from "react";
import { Table } from "react-bootstrap";
import sentRefundStyle from "./sentRefund.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setSentRefunds } from "../../../../redux/slices/seller/refunds";
import ReactPaginate from 'react-paginate';
import TableLoading from "../../../../common/loading/TableLoading";
import Select from "react-select";
import DateRangeSelector from "../../../../common/ui/dateRangeSelector";

const SentRefund = () => {
  const { sentRefunds, last_page, per_page, current_page , loading, error  } = useSelector((state) => state.sentRefundsSlice);
  const [perPage, setPerPage] = useState(per_page);
	const [currentPage, setCurrentPage] = useState(current_page);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

  useEffect(() => {
		getApi(`applied-refund-requests?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`, setSentRefunds);
  }, [perPage,currentPage,startDate,endDate]);

	const options = [
		{ value: '5', label: '5' },
		{ value: '10', label: '10' },
		{ value: '15', label: '15' },
		{ value: '20', label: '20' }
	]

  return (
    <Fragment>
      <div className={`${sentRefundStyle.background}`}>
        <section>
          <h5 className="px-md-4 pt-3 px-3 py-2">Applied Refund Request</h5>
					<div>
						<DateRangeSelector startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
          </div>
        </section>
        <section className={`px-4 ${sentRefundStyle.tableData}`}>
          <Table borderless responsive>
            <thead>
              <tr>
                <th><small>#</small></th>
                <th><small>Date</small></th>
                <th><small>Order Id</small></th>
                <th><small>Product</small></th>
                <th className="text-end"><small>Amount</small></th>
                <th><small>Reason</small></th>
								<th className="text-center"><small>Reject Reason</small></th>
              </tr>
            </thead>
						{ error ? <h1>{error}</h1> : ""}
						{loading ? ( <TableLoading/> )
						: (
							<tbody>
								{ sentRefunds.length > 0 &&
								<Fragment>
								{
									sentRefunds.map((item,key) => {
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
												{ item.products.length > 0 &&
															item.products.map((product,i) => {
															return (
																<div key={i}>
																	<small>{product.name}</small>
																</div>
															)
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
										)
									})
								}
								</Fragment>
								}
							</tbody>
            )}
          </Table>
          {
          sentRefunds.length > 0 &&
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
								onPageChange={(e)=>{setCurrentPage(e.selected + 1)}}
								pageRangeDisplayed={per_page}
								pageCount={Math.ceil(last_page)}
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

export default SentRefund;
