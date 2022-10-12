import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./detailsModal.module.css";
import Select from "react-select";
import { useState } from "react";
import { markutosSellerApi } from "../../../../../services/Api/api";
import authHeader from "../../../../../services/auth-header";
import { toast } from "react-toastify";

const options = [
  { value: "pending", label: "Pending" },
  // { value: "wise", label: "Wise" },
  { value: "approved", label: "Approve" },
  { value: "rejected", label: "Reject" },
];

const DetailsModal = ({
  show,
  setShow,
  refund,
  date,
  statusUpdate,
  setStatusUpdate,
}) => {
  const [refundStatus, setRefundStatus] = useState("");
  const [submiting, setSubmitting] = useState(false);

  const handleRefund = () => {
    setSubmitting(true);
    if (refundStatus == "approved") {
      markutosSellerApi
        .get(`/refund-requests/approve?request_id=${refund?.id}`, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          setStatusUpdate(!statusUpdate);
          setSubmitting(false);
          setShow(!show);
        })
        .catch((err) => {
          toast.error(err.message);
          setSubmitting(false);
        });
    } else if (refundStatus == "rejected") {
      markutosSellerApi
        .get(`/refund-requests/reject?request_id=${refund?.id}`, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          setStatusUpdate(!statusUpdate);
          setSubmitting(false);
          setShow(!show);
        })
        .catch((err) => {
          toast.error(err.message);
          setSubmitting(false);
        });
    } else {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    setRefundStatus(refund.refund_status);
  }, [date]);

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
            Order Id: {refund?.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <div className={modalStyle.orderSummary}>
              <div className={modalStyle.topBar}>
                <h6>Refund Details</h6>

                <div className={modalStyle.approveButtonsContainer}>
                  <Select
                    isDisabled={refund.refund_status !== "pending"}
                    style={{
                      height: "25px",
                    }}
                    value={options.find((option) => {
                      return option.value == refundStatus;
                    })}
                    onChange={(e) => setRefundStatus(e.value)}
                    options={options}
                    placeholder="Approval"
                  />

                  <button
                    onClick={handleRefund}
                    disabled={
                      refund?.refund_status !== "pending" ||
                      submiting ||
                      refundStatus == "pending"
                    }
                    type="button"
                    className="btn btn-outline-success"
                  >
                    {submiting ? (
                      <div>
                        <div
                          className="spinner-border spinner-border-sm me-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Updating
                      </div>
                    ) : (
                      "Confirm"
                    )}
                  </button>
                </div>
              </div>

              <div className={modalStyle.orderBody}>
                <Row>
                  <Col xs="6" md="3">
                    <h6>Refund Reason from Customer</h6>
                  </Col>
                  <Col xs="6" md="9">
                    <h5>{refund?.reason}</h5>
                  </Col>
                </Row>

                <Row>
                  <Col xs="6" md="3">
                    <h6> Reject Reason</h6>{" "}
                  </Col>
                  <Col xs="6" md="9">
                    <h5>{refund?.reject_reason}</h5>
                  </Col>
                </Row>

                <Row>
                  <Col xs="6" md="3">
                    <h6> Refund Amount</h6>
                  </Col>
                  <Col xs="6" md="9">
                    <h5>$ {refund?.refund_amount} </h5>
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
                          {/* <th>#</th> */}
                          <th>Product</th>

                          {/* <th>Quantity</th> */}
                          {/* <th>Price</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {refund?.products?.map((product) => {
                          return (
                            <tr key={product.name}>
                              {/* <td>1</td> */}
                              <td>{product?.name} </td>

                              {/* <td>1</td> */}

                              {/* <td>৳1,000.000</td> */}
                            </tr>
                          );
                        })}
                        {/* <tr>
                          <td>1</td>
                          <td>Nokia </td>

                          <td>1</td>

                          <td>৳1,000.000</td>
                        </tr> */}
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
