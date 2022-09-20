import React, { useState, useEffect } from "react";
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
	const [allData, setAllData] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios.get(`${API_URL}/dashboard`, {
			headers: {
			"Authorization": authHeader(),
			}
		}).then((response) => {
			setLoading(false);
			setAllData(response?.data);
		})
	}, []);
  return (
      <div className="px-4 py-2">
			<section>
				<div className="row px-0">
					<div className="col">
						<h1 className={`mb-4 ${dashboardStyle.header_title}`}>
							Dashboard
						</h1>
					</div>
				</div>
			</section>
			{/* 1st block */}
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
								{loading ? <SimpleLoading /> : <h5>{allData?.card_items.total_revenue}</h5>}
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
							{loading ? <SimpleLoading /> : <h5> {allData?.card_items?.total_order} </h5>}
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
								<h5>{allData?.card_items?.todays_revenue}</h5>
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
								<h5>{allData?.card_items?.todays_refund}</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* 2nd block */}
			<section>
				<div className="row">
					<div className="col">
						<SaleHistory data={allData?.sales_history}/>
					</div>
				</div>
			</section>
			{/* 3rd block */}
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
											<small> Delivery Status</small>
										</th>
									</tr>
								</thead>
								<tbody>
									{ allData?.recent_orders?.length > 0 && (
									allData?.recent_orders?.map((item, key) => {
											return (
												<tr key={key}>
													<td>
														<small>{item.code}</small>
													</td>
													<td>
														<small> {item.code} </small>
													</td>
													<td>
														<small> {item.created_at} </small>
													</td>
													<td>
														<small> {item.delivery_status}</small>
													</td>
												</tr>
											)
										})
									)}
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
								{ allData?.recent_withdrawals?.length > 0 && (
									allData?.recent_withdrawals?.map((item, key) => {
										return (
											<tr key={key}>
												<td>
													<small>{item.amount}</small>
												</td>
												<td>
													<small> {item.status} </small>
												</td>
												<td>
													<small> {item.created_at} </small>
												</td>
											</tr>
										)
									})
									) }
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
									{ allData?.popular_products?.length > 0 && (
									allData?.popular_products?.map((item, key) => {
											return (
												<tr key={key}>
													<td>
														<small>{item.id}</small>
													</td>
													<td>
														<small> {item.name} </small>
													</td>
													<td>
														<small> {item.category} </small>
													</td>
													<td>
														<small> {item.unit_price}</small>
													</td>
													<td>
														<small> {item.current_stock}</small>
													</td>
												</tr>
											)
										})
									)}
									</tbody>
								</Table>
							</div>
						</div>
					</div>
				</div>
			</section>
      </div>
	);
};

export default DashboardCom;
