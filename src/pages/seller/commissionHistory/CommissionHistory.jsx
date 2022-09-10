import React, { useEffect, useState, Fragment } from "react";
import { Table } from "react-bootstrap";
import commissionStyle from "./commissionStyle.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import { setCommissionHis } from "../../../redux/slices/seller/payments";
import ReactPaginate from 'react-paginate';
import DateRangeSelector from "../../../common/ui/dateRangeSelector";
import SimpleLoading from "../../../common/loading/SimpleLoading";
import Select from "react-select";

const CommissionHistory = () => {
	const { commissionHis ,loading,total,per_page, error } = useSelector((state) => state.commissionHisSlice);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(per_page);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

  useEffect(() => {
		getApi(`commission-histories?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`, setCommissionHis);
  }, [perPage,currentPage,startDate,endDate]);

	const options = [
		{ value: '5', label: '5' },
		{ value: '10', label: '10' },
		{ value: '15', label: '15' },
		{ value: '20', label: '20' }
	]
  return (
    <Fragment>
      <div className={`${commissionStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Commission History</h5>
          <div>
						<DateRangeSelector startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
          </div>
        </section>

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
						{ error ? <h1>{error}</h1> : ""}
						{loading ? ( <tbody><tr><td><SimpleLoading/></td></tr></tbody> )
						: (
						commissionHis.length > 0 &&
							<tbody>
								{
								commissionHis.map((item,key) => {
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
												<small>{item.seller_earning}</small>
											</td>
											<td>
												<small>{item.created_at}</small>
											</td>
										</tr>
									)
									})
								}
							</tbody>
            )}
          </Table>
          { commissionHis.length > 0 &&
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
									onPageChange={(e)=>setCurrentPage(e.selected+1)}
									pageRangeDisplayed={per_page}
									pageCount={Math.ceil(total) }
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

export default CommissionHistory;
