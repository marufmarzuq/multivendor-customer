import {useEffect,useState,Fragment} from "react";
import { Table } from "react-bootstrap";
import receivedRefundStyle from "./receivedRefund.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setReceivedRefunds } from "../../../../redux/slices/seller/refunds";
import ReactPaginate from 'react-paginate';
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import Select from "react-select";


const ReceivedRefunds = () => {
	const { receivedRefunds , total , per_page ,loading, error } = useSelector((state) => state.receivedRefundsSlice);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(per_page);
	const [search, setSearch]     = useState(null);

  useEffect(() => {
		// getApi(`refund-requests?search_value=${search}&sort_by=created_at&per_page=${perPage}&page=${currentPage}`, setSentRefunds);
		getApi(`refund-requests?per_page=${perPage}`, setReceivedRefunds);
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
    <div>
      <div className={`${receivedRefundStyle.background}`}>
        <section>
          <h5 className="px-md-4 pt-3 px-3 py-2">Received Refund Request</h5>
					<input
                type="text"
                className="table-search-input"
                placeholder="Search product by name"
              />
        </section>
        <section className={`px-4 ${receivedRefundStyle.tableData}`}>
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
                  <small>Order Id</small>
                </th>
                <th>
                  <small>Product</small>
                </th>
                <th className="text-end">
                  <small>Amount</small>
                </th>
                <th className="text-center">
                  <small>Status</small>
                </th>
                {/* <th>Reason</th> */}
                <th className="text-center">
                  <small>Approval</small>
                </th>
                <th className="text-center">
                  <small>Reject</small>
                </th>
              </tr>
            </thead>
						{ error ? <h1>{error}</h1> : ""}
						{loading ? ( <tbody><tr><td><SimpleLoading/></td></tr></tbody> )
						: (
							<tbody>
							{ receivedRefunds.length > 0 &&
							receivedRefunds.map((item,key) => {
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
									<td className="text-center">
										<small className={receivedRefundStyle.paid}>{item.refund_status}</small>
									</td>
									<td className="text-center">
										<div className="form-check d-flex justify-content-center form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												role="switch"
												id="flexSwitchCheckDefault"
											/>
										</div>
									</td>
									<td className="text-center">
										<div className="form-checkv d-flex justify-content-center form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												role="switch"
												id="flexSwitchCheckDefault"
											/>
										</div>
									</td>
								</tr>
								)
							})}
							</tbody>
            )}
          </Table>
						{
						receivedRefunds.length > 0 &&
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
    </div>
  );
};

export default ReceivedRefunds;
