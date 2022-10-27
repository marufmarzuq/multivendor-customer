import {useState,useEffect} from "react";
import orderStyle from "./userOrder.module.css";
import { BsEyeFill } from "react-icons/bs";
import "react-loading-skeleton/dist/skeleton.css";
import { markutosFrontendApi } from "../../../services/Api/api";
import customerAuthHeader from "../../../services/customer-auth-header";
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import { priceFormat } from "../../../../hooks/helper";
import FrontendPagination from "../../../../common/pagination/frontend/FrontendPagination";
import OrderModal from "./components/orderModal/OrderModal";

const UserOrder = () => {
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
	const [currentOrderId, setCurrentOrderId] = useState(null);
  const [show, setShow] = useState(false);

  const modalOpen = (id) => {
    setCurrentOrderId(id);
    setShow(!show);
  };

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`dashboard/my-orders?per_page=10&page=${currentPage}`,
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
      <h4>Orders</h4>
      <section className={` ${orderStyle.tableData}`}>
        <table>
          <thead>
            <tr>
              <th>
                <small>ID Number</small>
              </th>
              <th>
                <small>Date</small>
              </th>
              <th>
                <small>Total</small>
              </th>
              <th>
                <small> Status</small>
              </th>
              <th className="text-center">
                <small>Actions</small>
              </th>
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
									<td><small>{item.code}</small></td>
									<td><small>{item.created_at}</small></td>
									<td><small>{priceFormat(item.grand_total)}</small></td>
									<td><small className={item.order_status == "pending" ?"text-danger" : "text-success"}> {item.order_status} </small></td>
									<td className="text-center">
										<small>
											<button className={orderStyle.preview}
												onClick={() => modalOpen(item.id)}
											>
                        <BsEyeFill />
											</button>
										</small>
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
				<OrderModal
          orderId={currentOrderId}
          page="order"
          show={show}
          setShow={setShow}
          time={new Date()}
        />
      </section>
    </div>
  );
};

export default UserOrder;
