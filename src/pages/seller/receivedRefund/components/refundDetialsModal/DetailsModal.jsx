import React from "react";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./detailsModal.module.css";

const DetailsModal = ({ show, setShow }) => {
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
              <h6>Refund Details</h6>

              <div className={modalStyle.orderBody}>
                <Row>
                  <Col xs="6" md="3">
                    <h6>Refund Reason from Customer</h6>
                  </Col>
                  <Col xs="6" md="9">
                    <h5>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fugit accusantium ratione, inventore deleniti neque
                      quibusdam dolorem aspernatur porro omnis modi!
                    </h5>
                  </Col>
                </Row>

                <Row>
                  <Col xs="6" md="3">
                    <h6> Reject Reason</h6>{" "}
                  </Col>
                  <Col xs="6" md="9">
                    <h5>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit, dicta.
                    </h5>
                  </Col>
                </Row>

                <Row>
                  <Col xs="6" md="3">
                    <h6> Refund Amount</h6>
                  </Col>
                  <Col xs="6" md="9">
                    <h5>$ 400 </h5>
                  </Col>
                </Row>
              </div>
            </div>
          </section>

          <section>
            <div className="row mt-5">
              <div className="col-12">
                <div className={modalStyle.orderSummary}>
                  <h6>Product Details</h6>

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
                        <tr>
                          <td>1</td>
                          <td>Nokia </td>

                          <td>1</td>

                          <td>৳1,000.000</td>
                        </tr>
                      </tbody>
                    </Table>
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

export default DetailsModal;
