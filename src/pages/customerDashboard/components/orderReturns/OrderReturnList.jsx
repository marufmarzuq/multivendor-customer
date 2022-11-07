import {useState,useEffect} from "react";
import orderStyle from "../orders/userOrder.module.css";
import "react-loading-skeleton/dist/skeleton.css";
import { markutosFrontendApi } from "../../../services/Api/api";
import customerAuthHeader from "../../../services/customer-auth-header";
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import { priceFormat } from "../../../../hooks/helper";
import FrontendPagination from "../../../../common/pagination/frontend/FrontendPagination";

const OrderReturnList = () => {
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`dashboard/my-return-requests?per_page=10&page=${currentPage}`,
      	{
			headers: {
				Authorization: customerAuthHeader(),
			},
		}
      )
      .then((response) => {
        setLoading(false);
		setCurrentItems(response?.data.data);
		setLoading(false);
        setCurrentPage(response?.data?.current_page);
        setPageCount(response?.data?.last_page);
		});
	}, [currentPage]);

  return (
    <div>
      <h4>Order Return List</h4>
      <section className={` ${orderStyle.tableData}`}>
        <table>
          <thead>
            <tr>
				<th><small>Seller Name</small></th>
				<th><small>OrderID</small></th>
				<th><small>Date</small> </th>
				<th><small>Refund Amount</small></th>
				<th><small>Refund Reason</small></th>
				<th><small> Status</small></th>
				<th className="text-center"><small>Actions</small></th>
            </tr>
          </thead>

          <tbody>
          {
          loading ? (<tr className="w-100"><td className="w-100"><SimpleLoading /></td></tr>) :
			(
				(
					currentItems.map((item,index)=>{
					return(
						<tr key={index}>
						<td><small>{item.seller_name}</small></td>
						<td><small>{item.order_id}</small></td>
						<td><small>{item.created_at}</small></td>
						<td><small>{priceFormat(item.refund_amount)}</small></td>
						<td><small>{item.reason}</small></td>
						<td>
							<div> Admin Approval : {item.admin_approval == "0" ? "No" : "Yes"} </div>
							<div> Seller Approval : {item.seller_approval == "0" ? "No" : "Yes"} </div>
						</td>
					</tr>
					)
					})
				)
			)
          }
          </tbody>
        </table>
				{currentItems.length > 0 && (
					<FrontendPagination
						currentItem={currentItems}
						perPage={10}
						pageCount={pageCount}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
      </section>
    </div>
  );
};

export default OrderReturnList;
