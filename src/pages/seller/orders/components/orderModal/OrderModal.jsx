import React from "react";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./modal.module.css";
import Timeline from "../timeline/Timeline";
const options = [
  { value: "payment_status", label: "Payment Status" },
  { value: "paid", label: "Paid" },
  { value: "unpaid", label: "UnPaid" },
];
const options2 = [
  { value: "Delivery_status", label: "Delivery Status" },
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "on_delivery", label: "On Delivery" },
  { value: "delivered", label: "Delivered" },
];
const OrderModal = ({ page, show, setShow }) => {
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
            Order Id: 22454548751
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <Timeline />
            {page == "order" ? (
              <div className={modalStyle.statusDropdown}>
                <Select options={options} placeholder="Payment Status" />

                <Select options={options2} placeholder="Delivery Status" />

                <button className="btn btn-outline-success"> Confirm </button>
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
                    <h5> 20210518-23373084</h5>
                    <h5> Mr. Customer</h5>
                    <h5> customer@email.com</h5>
                    <h5>
                      House# Gazi Bari,Village: Luterchar, Post Office:
                      Luterchar, Post Office: Luterchar, Post Office: Luterchar,
                      Post Office: Luterchar Post Office: Luterchar, Meghna,
                      3516, Bangladesh
                    </h5>
                  </Col>
                  <Col xs="7" md="2">
                    <h6>Order Date:</h6>
                    <h6>Order Status:</h6>
                    <h6>Total Order amount:</h6>
                    <h6>Shipping Method:</h6>
                    <h6>Payment Method:</h6>
                  </Col>
                  <Col xs="5" md="3">
                    <h5>18-05-2021 23:37 PM</h5>
                    <h5> pending </h5>
                    <h5> ৳1,000.000 </h5>
                    <h5> Flat shipping rate</h5>
                    <h5> Cash on delivery</h5>
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
                          <th>Variation</th>
                          <th>Quantity</th>
                          <th>Delivery Type</th>

                          <th>Price</th>
                          <th>Refund</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Nokia </td>
                          <td>var one</td>
                          <td>1</td>
                          <td>Home Delivery</td>
                          <td>৳1,000.000</td>
                          <td> N/A</td>
                        </tr>
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
