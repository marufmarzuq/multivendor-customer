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
import { useFormik } from "formik";
import { FocusError } from "focus-formik-error";
import * as yup from "yup";

const options = [
  { value: "Pending", label: "Pending" },
  { value: "Approve", label: "Approve" },
  { value: "Reject", label: "Reject" },
];

const DetailsModal = ({
  show,
  setShow,
  refund,
  date,
  statusUpdate,
  setStatusUpdate,
  setReload,
}) => {
  const [status, setStatus] = useState( refund?.refund_status || "Pending" );
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    seller_note: yup.string().required("Seller note is required"),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      seller_note: refund?.seller_note || "",
      seller_approval: refund?.seller_approval || "Pending",
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      if (refund) {
        values.request_id = refund.id;
      }
      setLoading(true);
      markutosSellerApi
        .post(`/refund-requests/change-status`, values, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          setReload((pre) => !pre);
          setLoading(false);
          toast.success(res.data.message);
          setShow(false);
          
        })
        .catch((e) => {
          setLoading(false);
          toast.error(e.message);
        });
    },
  });

  const {
    values,
    setErrors,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;

  return (
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
          <form  onSubmit={(e) => e.preventDefault()}>
				    <FocusError formik={formik} />
            <section>
              <div className={modalStyle.orderSummary}>
                <div className={modalStyle.topBar}>
                  <h6>Refund Details</h6>

                  <div className={modalStyle.approveButtonsContainer}>
                    <Select
                      style={{
                        height: "25px",
                      }}
                      value={options.find((option) => {
                        return option.value == status ;
                      })}
                      onChange={(e) => setStatus(e.value) + setFieldValue("seller_approval",e.value)}
                      options={options}
                      placeholder="Seller Approval"
                    />

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      type="submit"
                      className="btn btn-outline-success"
                    >
                      {loading ? (
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
                      <h6> Refund Amount</h6>
                    </Col>
                    <Col xs="6" md="9">
                      <h5>$ {refund?.refund_amount} </h5>
                    </Col>
                  </Row>
                  <Row>
                      <Col xs="6" md="3">
                        <h6> Seller Notes : </h6>{" "}
                      </Col>
                      <Col xs="6" md="9">
                        <textarea
                          value={values.seller_note}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="seller_note"
                          cols="30"
                          rows="3"
                        ></textarea>
                        {errors.seller_note && touched.seller_note && (
                          <small className="text-danger"> {errors.seller_note} </small>
                        )}
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
          </form>
        </Modal.Body>
      </Modal>
  );
};

export default DetailsModal;
