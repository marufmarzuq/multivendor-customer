import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./modal.module.css";

const OrderModal = ({ show, setShow }) => {
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
            <div className={modalStyle.orderSummary}>
              <h6>Order Summary</h6>

              <div className={modalStyle.orderBody}>
                <Row>
                  <Col xs="5" md="2">
                    <h6>Order Code:</h6>
                    <h6>Customer:</h6>
                    <h6>Email:</h6>
                    <h6>Shipping Address:</h6>
                  </Col>
                  <Col xs="7" md="5">
                    <p> 20210518-23373084</p>
                    <p> Mr. Customer</p>
                    <p> customer@example.com</p>
                    <p>
                      {" "}
                      House# Gazi Bari,Village: Luterchar, Post Office:
                      Luterchar, Post Office: Luterchar, Post Office: Luterchar,
                      Post Office: Luterchar Post Office: Luterchar, Meghna,
                      3516, Bangladesh
                    </p>
                  </Col>
                  <Col xs="7" md="2">
                    <h6>Order Date:</h6>
                    <h6>Order Status:</h6>
                    <h6>Total Order amount:</h6>
                    <h6>Shipping Method:</h6>
                    <h6>Payment method:</h6>
                  </Col>
                  <Col xs="5" md="3">
                    <p>18-05-2021 23:37 PM</p>
                    <p> pending </p>
                    <p> ৳1,000.000 </p>
                    <p> Flat shipping rate</p>
                    <p> Cash on delivery</p>
                  </Col>
                </Row>
              </div>
            </div>

            <h4 className="p-5">Coming soon .... </h4>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrderModal;
