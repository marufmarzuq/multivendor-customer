import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./modal.module.css";
import Timeline from "../timeline/Timeline";
import { useState } from "react";
import { priceFormat } from "../../../../../../hooks/helper";
import PdfModal from "../../../../../../common/pdfModal/PdfModal";
import { printDiv } from "../../../../../../common/print/printDiv";
import customerAuthHeader from "../../../../../services/customer-auth-header";
import { markutosFrontendApi } from "../../../../../services/Api/api";

const orderOptions = [
  { value: "confirmed", label: "Confirmed" },
  { value: "processing", label: "Processing" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "pending_payment", label: "Pending Payment" },
  { value: "failed", label: "Failed" },
  { value: "draft", label: "Draft" },
];

const OrderModal = ({ page, show, setShow, orderId, time }) => {
  const [orderDetails, setOrderDetails] = useState({});
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [pdfShow, setPdfShow] = useState(false);


  useEffect(() => {
    if (page == "order" && orderId) {
      markutosFrontendApi
        .get(`dashboard/my-orders/details?order_id=${orderId}`, {
          headers: {
            Authorization: customerAuthHeader(),
          },
        })
        .then((res) => {
          setOrderDetails(res.data);
          setDeliveryStatus(res.data.order.delivery_status);
          setOrderStatus(res.data.order.order_status);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [orderId, time]);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName={modalStyle.orderModalWidth}
        centered
        scrollable={true}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Order Id: {orderDetails?.order?.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <Timeline />
            {page == "order" ? (
              <div className={modalStyle.statusDropdown}>
                <div>
                  <label>Order Status</label>
                  {orderStatus}
                </div>
								<div>
                  <label>Delivery Status</label>
                  {deliveryStatus}
                </div>
                <button
                  onClick={() => printDiv("print_area")}
                  className="btn btn-outline-success"
                >
                  Print Invoice
                </button>
                <PdfModal show={pdfShow} setShow={setPdfShow} />
              </div>
            ) : (
              ""
            )}
          </section>
          <div id="print_area">
            <section>
              <div className={modalStyle.orderSummary}>
                <h6>Order Status</h6>

                <div className={modalStyle.orderBody}>
                  <Row>
                    <Col xs="5" md="2">
                      <h6>Order ID:</h6>
                      <h6>Customer:</h6>
                      <h6>Email:</h6>
                    </Col>
                    <Col xs="7" md="5">
                      <h5>{orderDetails?.order?.id} </h5>
                      <h5>{orderDetails?.order?.customer_name}</h5>
                      <h5>{orderDetails?.order?.customer_email}</h5>
                    </Col>
										<h6>Shipping Address:</h6>
										<Col xs="5" md="2">
                      <h6>Name:</h6>
                      <h6>Address:</h6>
                      <h6>Phone:</h6>
                      <h6>Email:</h6>
                    </Col>
										<Col xs="7" md="5">
                      <h5>{orderDetails?.order?.shipping_address?.name}</h5>
                      <h5>{orderDetails?.order?.shipping_address?.address}</h5>
                      <h5>{orderDetails?.order?.shipping_address?.phone}</h5>
                      <h5>{orderDetails?.order?.shipping_address?.email}</h5>
                    </Col>
                    <Col xs="7" md="2">
                      <h6>Order Date:</h6>
                      <h6>Order Status:</h6>
                      <h6>Total Order amount:</h6>
                      <h6>Shipping Type:</h6>
                      <h6>Shipping Method:</h6>
                      <h6>Payment Method:</h6>
                    </Col>
                    <Col xs="5" md="3">
                      <h5>{orderDetails?.order?.created_at}</h5>
                      <h5> {orderDetails?.order?.order_status} </h5>
                      <h5>{orderDetails?.order?.grand_total} </h5>
                      <h5>{orderDetails?.order?.shipping_type}</h5>
                      <h5>{orderDetails?.order?.shipping_method}</h5>
                      <h5>{orderDetails?.order?.payment_type}</h5>
                    </Col>
                  </Row>
                </div>
              </div>
            </section>
            <section>
              <div className="row mt-5">
                <div className="col-12 col-md-9">
                  <div className={modalStyle.orderSummary}>
                    <h6>Order Details</h6>

                    <div className={modalStyle.orderBody}>
                      <Table borderless responsive>
                        <thead>
                          <tr className="mb-5">
                            <th>#</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderDetails?.order_details?.length > 0 &&
                            orderDetails.order_details.map((item) => {
                              return (
                                <tr key={item.id}>
                                  <td> {item.id} </td>
                                  <td>{item.product_name} </td>
                                  <td>{item.quantity} </td>
                                  <td>{item.price} </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0">
                  <div className={modalStyle.orderSummary}>
                    <h6>Order Ammount</h6>

                    <div className={modalStyle.orderBody}>
                      <Row>
                        <Col>
                          <h6>Subtotal</h6>
                        </Col>
                        <Col>
                          <h5> {priceFormat(orderDetails?.sub_total)}</h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h6>Shipping</h6>
                        </Col>
                        <Col>
                          <h5> {priceFormat(orderDetails?.shipping)} </h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h6>Tax</h6>
                        </Col>
                        <Col>
                          <h5> {priceFormat(orderDetails?.tax)} </h5>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <h6>Coupon</h6>
                        </Col>
                        <Col>
                          <h5> {priceFormat(orderDetails?.tax)} </h5>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <h6>Total</h6>
                        </Col>
                        <Col>
                          <h5> {priceFormat(orderDetails?.total)} </h5>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrderModal;
