import React, { Fragment, useEffect,useState } from "react";
import axios from 'axios';
import dashboardStyle from "./dashboard.module.css";
import { BsCurrencyDollar, BsShop } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineShop } from "react-icons/ai";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { Table } from "react-bootstrap";
import SaleHistory from "./SaleHistory";
import { API_URL } from "../../../services/Api/api";
import authHeader from "../../../services/auth-header";
import SimpleLoading from "../../../../common/loading/SimpleLoading";

const DashboardCom = () => {
	const [allData, setData] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios.get(`${API_URL}/dashboard`, {
			headers: {
			"Authorization": authHeader(),
			}
		}).then((response) => {
			setLoading(false);
			setData(response?.data);
		})
	}, []);

	function dashboard_data(allData) {
		return (
			<Fragment>
			<section>
				<div className="row px-0">
					<div className="col">
						<h1 className={`mb-4 ${dashboardStyle.header_title}`}>
							Dashboard
						</h1>
					</div>
				</div>
			</section>
			<section>
				<div className={`row px-0 `}>
					<div className="col-md-3">
						<div className={`${dashboardStyle.dashboard_card} `}>
							<div className="col">
								<h1>Total Revenue</h1>
								<small> ( Last 30 Days ) </small>
							</div>

							<div>
								<span>
									<BsCurrencyDollar />
								</span>
							</div>
							<div>
								<h5>${allData.total_revenue}</h5>
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className={`${dashboardStyle.dashboard_card} `}>
							<div className="col">
								<h1>Total Order</h1>
								<small> ( Last 30 Days ) </small>
							</div>

							<div>
								<span>
									<AiOutlineShoppingCart />
								</span>
							</div>
							<div>
								<h5> {allData.total_order} </h5>
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className={`${dashboardStyle.dashboard_card} `}>
							<div className="col">
								<h1>Todays Revenue</h1>
							</div>

							<div>
								<span>
									<BsCurrencyDollar />
								</span>
							</div>
							<div>
								<h5>${allData.todays_revenue}</h5>
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className={`${dashboardStyle.dashboard_card} `}>
							<div className="col">
								<h1>Todays Refund</h1>
							</div>

							<div>
								<span>
									<HiOutlineReceiptRefund />
								</span>
							</div>
							<div>
								<h5>${allData.todays_refund}</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="row">
					<div className="col">
						<SaleHistory />
					</div>
				</div>
			</section>
			<section>
				<div className={` ${dashboardStyle.tables}`}>
					<div className={dashboardStyle.table}>
						<h3 className={` mb-3 ${dashboardStyle.tableHeader}`}>
							Recent Orders
						</h3>
						<div>
							<Table hover borderless responsive>
								<thead>
									<tr>
										<th>
											<small> Tracking Number</small>
										</th>
										<th>
											<small> Total </small>
										</th>
										<th>
											<small> Order Date </small>
										</th>
										<th>
											<small> Status</small>
										</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>
											<small>20220801</small>
										</td>
										<td>
											<small> 20 </small>
										</td>
										<td>
											<small> 2022-08-01 23:46:29</small>
										</td>
										<td>
											<small> Pending</small>
										</td>
									</tr>
									<tr>
										<td>
											<small>20220801</small>
										</td>
										<td>
											<small> 20 </small>
										</td>
										<td>
											<small> 2022-08-01 23:46:29</small>
										</td>
										<td>
											<small> Pending</small>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
					<div className={dashboardStyle.table}>
						<h3 className={` mb-3 ${dashboardStyle.tableHeader}`}>
							Recent Withdrawals
						</h3>
						<div>
							<Table hover borderless responsive>
								<thead>
									<tr>
										<th>
											<small> Amount </small>
										</th>
										<th>
											<small> Status </small>
										</th>
										<th>
											<small> Created</small>
										</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>
											<small> 2000 </small>
										</td>
										<td>
											<small> Pending</small>
										</td>
										<td>
											<small> 2022-08-01 23:46:29</small>
										</td>
									</tr>
									<tr>
										<td>
											<small> 2000 </small>
										</td>
										<td>
											<small> Pending</small>
										</td>
										<td>
											<small> 2022-08-01 23:46:29</small>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="row mt-3">
					<div className="col">
						<div className={dashboardStyle.table}>
							<h3 className={` mb-3 ${dashboardStyle.tableHeader}`}>
								Popular Products
							</h3>
							<div>
								<Table hover borderless responsive>
									<thead>
										<tr>
											<th>
												<small> ID </small>
											</th>
											<th>
												<small> Name </small>
											</th>
											<th>
												<small> Group </small>
											</th>

											<th>
												<small> Price/Unit</small>
											</th>
											<th>
												<small> Quantity</small>
											</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>
												<small> 101 </small>
											</td>
											<td>
												<small> Mobile phone </small>
											</td>
											<td>
												<small> Electronics</small>
											</td>

											<td>
												<small>$ 250</small>
											</td>
											<td>
												<small>10</small>
											</td>
										</tr>
										<tr>
											<td>
												<small> 101 </small>
											</td>
											<td>
												<small> Mobile phone </small>
											</td>
											<td>
												<small> Electronics</small>
											</td>

											<td>
												<small>$ 250</small>
											</td>
											<td>
												<small>10</small>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
					</div>
				</div>
			</section>
			</Fragment>
		)
	}

  return (
    <Fragment>
      <div className="px-4 py-2">
			{ loading ? <SimpleLoading/>
				:(
				<Fragment>
				{
				typeof allData !=="undefined"  &&
						dashboard_data(allData)
				}
				</Fragment>
			)}
      </div>
    </Fragment>
	);
};

export default DashboardCom;
