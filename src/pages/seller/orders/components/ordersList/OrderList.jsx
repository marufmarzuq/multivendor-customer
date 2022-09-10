import React, { useEffect, Fragment } from "react";
import axios from 'axios';
import { BsDownload, BsEyeFill } from "react-icons/bs";
import { useState } from "react";
import orderListStyle from "./orderList.module.css";
import PdfModal from "../../../../../common/pdfModal/PdfModal";
import OrderModal from "../orderModal/OrderModal";
import ReactPaginate from 'react-paginate';
import SimpleLoading from "../../../../../common/loading/SimpleLoading";
import { API_URL } from "../../../services/Api/api";
import authHeader from "../../../services/auth-header";
import { useDebounce } from "../../../../../hooks/useDebounce";
import Select from "react-select";

const OrderList = () => {
  const [show, setShow] 					= useState(false);
  const [pdfShow, setPdfShow] 			= useState(false);
  const [currentItems, setCurrentItems]  	= useState([]);
	const [pageCount, setPageCount]         = useState(0);
	const [search, setSearch]         = useState("");
	const [loading, setLoading] 			= useState(false);
	const debouncedSearchTerm         = useDebounce(search, 500);
	const [perPage, setPerPage]       = useState(10);
	const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
		setLoading(true);
		axios.get(`${API_URL}/orders?search_value=${search}&sort_payment=&sort_delivery=&per_page=${perPage}&page=${currentPage}`, {
			headers: {
			"Authorization": authHeader(),
			}
		}).then((response) => {
			setLoading(false);
			setCurrentItems(response?.data?.data);
			setCurrentPage(response?.data?.current_page);
			setPerPage(response?.data?.per_page);
			setPageCount(response?.data?.last_page);
		})
    }, [perPage,currentPage,search]);

	const options = [
		{ value: '5', label: '5' },
		{ value: '10', label: '10' },
		{ value: '15', label: '15' },
		{ value: '20', label: '20' }
	]

	useEffect(() => {
        if (debouncedSearchTerm) {
            setSearch(debouncedSearchTerm);
        } else {
            setCurrentItems([]);
        }
    }, [debouncedSearchTerm]);

	return (
		<Fragment>
		<div className={`${orderListStyle.background}`}>
			<section>
				<div className="table-top-header d-flex justify-content-between">
					<div className="table-title"><h5 className="px-md-4 px-3 pt-3 py-2">Orders</h5></div>
					<div className="table-filters px-md-4 px-3 pt-3 py-2 tableFilters">
						<input
							type="text"
							className="table-search-input"
							placeholder="Search by Order Code"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
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
			{ loading ? <SimpleLoading />
				: (
					<Fragment>
						<section>
						{ currentItems.length > 0 ? (
							currentItems.map((item, key) => {
								return (
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
							}))
							: 
							<p className="text-center">There is no item</p>
						}
						</section>
					</Fragment>
				)}
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
					marginPagesDisplayed={2}
					onPageChange={(e)=>{setCurrentPage(e.selected + 1)}}
					pageRangeDisplayed={perPage}
					pageCount={Math.ceil(pageCount)}
					previousLabel="< Previous"
					containerClassName="pagination"
					pageClassName="page__count"
					activeLinkClassName="active"
					forcePage={currentPage-1}
				/>
			</div>
			<PdfModal show={pdfShow} setShow={setPdfShow} />
			<OrderModal page="order" show={show} setShow={setShow} />
		</div>
		</Fragment>
	);
};

export default OrderList;
