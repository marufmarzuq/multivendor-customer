import React, { Fragment,useEffect } from "react";
import { Table } from "react-bootstrap";
import sentRefundStyle from "./sentRefund.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setSentRefunds } from "../../../../redux/slices/seller/refunds";

const SentRefund = () => {
  const { sentRefunds , loading, error } = useSelector((state) => state.sentRefundsSlice);

  useEffect(() => {
    getApi("sentRefunds.json", setSentRefunds);
    // getApi("v1/seller/sent-refunds/search=''", setSentRefunds);
  }, []);
console.log(sentRefunds);
  return (
    <Fragment>
      <div className={`${sentRefundStyle.background}`}>
        <section>
          <h5 className="px-md-4 pt-3 px-3 py-2">Applied Refund Request</h5>
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
						{loading ? ( <tbody><tr><td>Loading</td></tr></tbody> )
						: (
							<tbody>
								{ sentRefunds.length > 0 &&
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
												{ item.product_name.length > 0 &&
															item.product_name.map((product,i) => {
															return (
																<div key={i}>
																	<small>{product}</small>
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
								})}
							</tbody>
            )}
          </Table>
        </section>
      </div>
    </Fragment>
  );
};

export default SentRefund;
