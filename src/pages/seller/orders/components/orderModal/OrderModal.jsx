import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./modal.module.css";
import Timeline from "../timeline/Timeline";
import { useState } from "react";
import { markutosSellerApi } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";
import { toast } from "react-toastify";
const paymentOptions = [
  { value: "paid", label: "Paid" },
  { value: "unpaid", label: "UnPaid" },
];
const deliveryOptions = [
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "on_delivery", label: "On Delivery" },
  { value: "delivered", label: "Delivered" },
];
const OrderModal = ({ page, show, setShow, orderId, time }) => {
  const [orderDetails, setOrderDetails] = useState({});
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const updateStatus = () => {
    markutosSellerApi
      .get(
        `orders/order-details/change-status?order_id=${orderId}&payment_status=${paymentStatus}&delivery_status=${deliveryStatus}`,
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    if (page == "order" && orderId) {
      markutosSellerApi
        .get(`orders/order-details?order_id=${orderId}`, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          setOrderDetails(res.data);
          setDeliveryStatus(res.data.order.delivery_status);
          setPaymentStatus(res.data.order.payment_status);
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
                <Select
                  defaultValue={{
                    value: "payment_status",
                    label: "Payment Status",
                  }}
                  onChange={(e) => setPaymentStatus(e.value)}
                  value={paymentOptions.find((option) => {
                    return option.value == paymentStatus;
                  })}
                  options={paymentOptions}
                  placeholder="Payment Status"
                />

                <Select
                  defaultValue={{
                    value: "Delivery_status",
                    label: "Delivery Status",
                  }}
                  options={deliveryOptions}
                  onChange={(e) => setDeliveryStatus(e.value)}
                  value={deliveryOptions.find((option) => {
                    return option.value == deliveryStatus;
                  })}
                  placeholder="Delivery Status"
                />

                <button
                  onClick={updateStatus}
                  className="btn btn-outline-success"
                >
                  {" "}
                  Confirm{" "}
                </button>
              </div>
            ) : (
              ""
            )}
            <div className={modalStyle.orderSummary}>
              <h6>Order Status</h6>

              <div className={modalStyle.orderBody}>
                <Row>
                  <Col xs="5" md="2">
                    <h6>Order ID:</h6>
                    <h6>Customer:</h6>
                    <h6>Email:</h6>
                    <h6>Shipping Address:</h6>
                  </Col>
                  <Col xs="7" md="5">
                    <h5> {orderDetails?.order?.id} </h5>
                    <h5> {orderDetails?.order?.customer_name}</h5>
                    <h5> customer@email.com</h5>
                    <h5>{orderDetails?.order?.shipping_address}</h5>
                  </Col>
                  <Col xs="7" md="2">
                    <h6>Order Date:</h6>
                    <h6>Order Status:</h6>
                    <h6>Total Order amount:</h6>
                    <h6>Shipping Method:</h6>
                    <h6>Payment Method:</h6>
                  </Col>
                  <Col xs="5" md="3">
                    <h5>{orderDetails?.order?.created_at}</h5>
                    <h5> pending </h5>
                    <h5>{orderDetails?.order?.grand_total} </h5>
                    <h5> Flat shipping rate</h5>
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
                          <th>Delivery Type</th>

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

                                <td> {item.quantity} </td>
                                <td> {item.shipping_type} </td>
                                <td> {item.price} </td>
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
                        <h5> ৳1,000.000 </h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h6>Shipping</h6>
                      </Col>
                      <Col>
                        <h5> ৳0.00 </h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h6>Tax</h6>
                      </Col>
                      <Col>
                        <h5> ৳0.00 </h5>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <h6>Coupon</h6>
                      </Col>
                      <Col>
                        <h5> ৳0.00</h5>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <h6>Total</h6>
                      </Col>
                      <Col>
                        <h5> ৳1,000.000 </h5>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrderModal;
