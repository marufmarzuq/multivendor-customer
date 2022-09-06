import React, { useEffect, useState, Fragment } from "react";
import { BsDownload, BsEyeFill } from "react-icons/bs";
import orderListStyle from "./orderList.module.css";
import PdfModal from "../../../../../common/pdfModal/PdfModal";
import OrderModal from "../orderModal/OrderModal";
import Select from "react-select";
import { useSelector } from "react-redux";
import { getApi } from "../../../../../api/apiCall";
import { setOrders } from "../../../../../redux/slices/seller/orders";
import ReactPaginate from 'react-paginate';

const OrderList = ({ orderData, loading }) => {
	const [show, setShow] 					= useState(false);
	const [pdfShow, setPdfShow] 			= useState(false);
	const itemsPerPage                      = 6;
	const [currentItems, setCurrentItems]  	= useState([]);
	const [pageCount, setPageCount]         = useState(0);
	const [itemOffset, setItemOffset]       = useState(0);
	const [orderSearch, setOrderSearch]     = useState("");

	const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % orderData.length;
        setItemOffset(newOffset);
    };


	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(orderData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(orderData.length / itemsPerPage));
	}, [orderData, itemOffset, setCurrentItems]);

	return (
		<Fragment>
		<div className={`${orderListStyle.background}`}>
			<section>
			<div className="table-top-header d-flex justify-content-between">
        <div className="table-title"><h5 className="px-md-4 px-3 pt-3 py-2">Orders</h5></div>
				<div className="table-filters px-md-4 px-3 pt-3 py-2">
					<input
						type="text"
						className="table-search-input"
						placeholder="Search by customer name"
						value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
					/>
				</div>
			</div>
			</section>

			<section>

			<div
				className={` ${orderListStyle.orderRow} px-0 mx-0 ps-3 mt-3 ${orderListStyle.header}`}
			>
				<div>
				<p>#</p>
				</div>
				<div>
				<p>Order Code</p>
				</div>
				<div className={` ${orderListStyle.hide}`}>
				<p>Num. of Products</p>
				</div>
				<div className={` ${orderListStyle.hide}`}>
				<p>Amount</p>
				</div>
				<div className={` ${orderListStyle.hide}`}>
				<p>Customer</p>
				</div>
				<div className={` text-center ${orderListStyle.hide}`}>
				<p>Delivery Status</p>
				</div>
				<div className="text-center">
				<p> Payment Status</p>
				</div>
				<div className="text-center">
				<p>Options</p>
				</div>
			</div>
			</section>
			{ loading ? <h3>Loading...</h3>
				: (
					<Fragment>
						<section>
						{ currentItems.length > 0 &&
							currentItems.map((item, key) => {
								return (
									item?.customer_name?.toLocaleLowerCase().includes(orderSearch.toLowerCase()) && (
										<div className={` ${orderListStyle.orderRow} px-0 mx-0 ps-3 mt-4 pt-2 `} key={key}>
											<div>
												<p>{item.id}</p>
											</div>
											<div onClick={() => setShow(!show)}>
												<p className={orderListStyle.code}>{item.code}</p>
											</div>
											<div className={` ${orderListStyle.hide}`}>
												<p>{item.num_of_product}</p>
											</div>
											<div className={` ${orderListStyle.hide}`}>
												<p>{item.grand_total} </p>
											</div>
											<div className={`${orderListStyle.hide}`}>
												<span> {item.customer_name} </span>
											</div>
											<div className={`text-center ${orderListStyle.hide}`}>
												<span> {item.delivery_status} </span>
											</div>
											<div className="text-center">
												<span className={orderListStyle.unpaid}>{item.payment_status}</span>
											</div>
											<div className="text-center">
												<button
													onClick={() => setShow(!show)}
													className={orderListStyle.preview}
												>
													<BsEyeFill />
												</button>
												<button
													onClick={() => setPdfShow(!pdfShow)}
													className={orderListStyle.invoice}
												>
													<BsDownload />
												</button>
											</div>
										</div>
									)
								)
							})}
						</section>
					</Fragment>
				)}
			<div className="d-flex justify-content-end pe-3">
				<ReactPaginate
					breakLabel="..."
					nextLabel="Next 🡢"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="🡠 Previous"
					containerClassName="pagination"
					pageClassName="page__count"
					activeLinkClassName="active"
				/>
			</div>
			<PdfModal show={pdfShow} setShow={setPdfShow} />
			<OrderModal page="order" show={show} setShow={setShow} />
		</div>
		</Fragment>
	);
};

export default OrderList;
