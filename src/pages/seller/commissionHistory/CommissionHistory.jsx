import React, { useEffect, Fragment } from "react";
import { Table } from "react-bootstrap";
import commissionStyle from "./commissionStyle.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import { setCommissionHis } from "../../../redux/slices/seller/payments";
const CommissionHistory = () => {
	const { commissionHis ,loading, error } = useSelector((state) => state.commissionHisSlice);
  useEffect(() => {
    getApi("commissionHistory.json", setCommissionHis);
  }, []);

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
							<tbody>
						{ commissionHis.length > 0 &&
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
							})}
							</tbody>
            )}
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default CommissionHistory;
