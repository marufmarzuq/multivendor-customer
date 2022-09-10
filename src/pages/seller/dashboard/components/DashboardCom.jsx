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

	var defaultData = {
		"card_items": {
			"total_revenue": 181.8,
			"total_order": 1,
			"todays_revenue": 0,
			"todays_refund": 0
		},
		"recent_orders": [
			{
				"id": 17,
				"code": "S6IQEOVE6AO7BI",
				"delivery_status": "delivered",
				"created_at": "2022-09-04 11:17:59",
				"num_of_product": 1
			}
		],
		"recent_withdrawals": [
			{
				"id": 2,
				"amount": 50,
				"status": "pending",
				"created_at": "2022-09-05 14:10:07"
			},
			{
				"id": 1,
				"amount": 50,
				"status": "paid",
				"created_at": "2022-09-04 14:10:07"
			}
		],
		"popular_products": [
			{
				"id": 256,
				"name": "Nam a adipisci praesentium eum",
				"slug": "nam-a-adipisci-praesentium-eum-f3pef",
				"category": "nemo qui",
				"subcategory": "debitis repudiandae",
				"subsubcategory": "voluptates recusandae",
				"unit_price": 259,
				"current_stock": 441
			},
			{
				"id": 512,
				"name": "Aut possimus sed ipsum aspernatur",
				"slug": "aut-possimus-sed-ipsum-aspernatur-wqr8s",
				"category": "aperiam nesciunt",
				"subcategory": "qui accusantium",
				"subsubcategory": "qui rerum",
				"unit_price": 107,
				"current_stock": 199
			},
			{
				"id": 773,
				"name": "Et nam fuga qui voluptatem",
				"slug": "et-nam-fuga-qui-voluptatem-xve2o",
				"category": "aperiam nesciunt",
				"subcategory": "possimus ab",
				"subsubcategory": "est deleniti",
				"unit_price": 168,
				"current_stock": 213
			},
			{
				"id": 518,
				"name": "Dolorem libero sit quia dicta",
				"slug": "dolorem-libero-sit-quia-dicta-rbhtg",
				"category": "quae voluptas",
				"subcategory": "quas et",
				"subsubcategory": "non tenetur",
				"unit_price": 110,
				"current_stock": 152
			},
			{
				"id": 519,
				"name": "Tempore debitis facilis ea quia",
				"slug": "tempore-debitis-facilis-ea-quia-idf6w",
				"category": "consequatur rerum",
				"subcategory": "impedit ut",
				"subsubcategory": "nihil adipisci",
				"unit_price": 149,
				"current_stock": 194
			},
			{
				"id": 13,
				"name": "Dolorum qui optio quas voluptas",
				"slug": "dolorum-qui-optio-quas-voluptas-yyntz",
				"category": "omnis animi",
				"subcategory": "sed facere",
				"subsubcategory": "qui et",
				"unit_price": 412,
				"current_stock": 392
			},
			{
				"id": 269,
				"name": "Dignissimos totam culpa quasi ipsa",
				"slug": "dignissimos-totam-culpa-quasi-ipsa-tdtag",
				"category": "nemo qui",
				"subcategory": "velit temporibus",
				"subsubcategory": "ut iusto",
				"unit_price": 426,
				"current_stock": 404
			}
		],
		"sales_history": {
			"January": 0,
			"February": 0,
			"March": 0,
			"April": 0,
			"May": 0,
			"June": 0,
			"July": 0,
			"August": 0,
			"September": 1,
			"October": 0,
			"November": 0,
			"December": 0
		}
	}

	const [allData, setData] = useState(defaultData);
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
console.log(allData);
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
								<h5>${allData.card_items.total_revenue}</h5>
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
								<h5> {allData.card_items.total_order} </h5>
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
								<h5>${allData.card_items.todays_revenue}</h5>
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
								<h5>${allData.card_items.todays_refund}</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* 2nd block */}
			<section>
				<div className="row">
					<div className="col">
						<SaleHistory data={allData.sales_history}/>
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
								{ allData.recent_orders.length > 0 && (
									allData.recent_orders.map((item, key) => {
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
									) }
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
								{ allData.recent_withdrawals.length > 0 && (
									allData.recent_withdrawals.map((item, key) => {
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
