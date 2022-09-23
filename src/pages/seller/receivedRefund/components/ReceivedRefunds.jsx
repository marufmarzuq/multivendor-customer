import { useEffect, useState, Fragment } from "react";
import { Table } from "react-bootstrap";
import receivedRefundStyle from "./receivedRefund.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setReceivedRefunds } from "../../../../redux/slices/seller/refunds";
import PaginationCom from "../../../../common/pagination/PaginationCom";
import TableLoading from "../../../../common/loading/TableLoading";
import DateRangeSelector from "../../../../common/ui/dateRangeSelector";
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import DetailsModal from "./refundDetialsModal/DetailsModal";
import {priceFormat} from "../../../../hooks/helper";

const ReceivedRefunds = () => {
  const { receivedRefunds, last_page, per_page, current_page, loading, error } =
    useSelector((state) => state.receivedRefundsSlice);
  const [perPage, setPerPage] = useState(per_page);
  const [currentPage, setCurrentPage] = useState(current_page);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getApi(
      `refund-requests?date_from=${startDate}&date_to=${endDate}&per_page=${perPage}&page=${currentPage}`,
      setReceivedRefunds
    );
  }, [perPage, startDate, endDate, currentPage]);

  return (
    <div>
      <div className={`${receivedRefundStyle.background}`}>
        <section>
          <h5 className="px-md-4 pt-3 px-3 py-2">Received Refund Request</h5>
        </section>

        <section>
          <div className="text-end pe-4 ">
            <DateRangeSelector
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
        </section>

        {loading && <SimpleLoading />}
        {error ? <h1 className="text-center">{error}</h1> : ""}

        {!loading && receivedRefunds?.length > 0 && !error && (
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
                  <th className="text-center">
                    <small>Admin Approval</small>
                  </th>
                  <th className="text-center">
                    <small>Seller Approval</small>
                  </th>
                </tr>
              </thead>

              <tbody>
                {receivedRefunds.length > 0 &&
                  receivedRefunds.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <small>{item.id}</small>
                        </td>
                        <td>
                          <small>{item.created_at}</small>
                        </td>
                        <td
                          className={receivedRefundStyle.modalOpen}
                          onClick={() => setShow(!show)}
                        >
                          <small>{item.order_code}</small>
                        </td>
                        <td>
                          {item.products.length > 0 &&
                            item.products.map((product, i) => {
                              return (
                                <div key={i}>
                                  <small>{product.name}</small>
                                </div>
                              );
                            })}
                        </td>
                        <td className="text-end">
													<small>{priceFormat(item.refund_amount)}</small>
                        </td>
                        <td className="text-center">
                          <small className={receivedRefundStyle.paid}>
                            {item.refund_status}
                          </small>
                        </td>
                        <td className="text-center">
													{item.admin_approval}
                        </td>
                        <td className="text-center">
                          {item.seller_approval}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
            <DetailsModal show={show} setShow={setShow} />
            <PaginationCom
              currentItem={receivedRefunds}
              perPage={per_page}
              pageCount={last_page}
              currentPage={currentPage}
              setPerPage={setPerPage}
              setCurrentPage={setCurrentPage}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default ReceivedRefunds;
