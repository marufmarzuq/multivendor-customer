import React, { useEffect, useState, Fragment } from "react";
import { Table } from "react-bootstrap";
import commissionStyle from "./commissionStyle.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import { setCommissionHis } from "../../../redux/slices/seller/payments";
import ReactPaginate from 'react-paginate';

const CommissionHistory = () => {
	const { commissionHis ,loading,total,per_page, error } = useSelector((state) => state.commissionHisSlice);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(per_page);
	const [search, setSearch]     = useState(null);
  useEffect(() => {
    // getApi("commissionHistory.json", setCommissionHis);
    getApi("commission-histories", setCommissionHis);
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
      <div className={`${commissionStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Commission History</h5>
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
						{loading ? ( <tbody><tr><td>Loading</td></tr></tbody> )
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

export default CommissionHistory;
