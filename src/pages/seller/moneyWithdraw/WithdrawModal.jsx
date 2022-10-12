import { FocusError } from "focus-formik-error";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import { toast } from "react-toastify";
import { moneyWithdrawSchema } from "../../../schema/moneyWithdrawSchema";
import { markutosSellerApi } from "../../services/Api/api";
import authHeader from "../../services/auth-header";
import modalStyle from "./moneyWithdraw.module.css";

const options = [
  { value: "paypal", label: "Paypal" },
  // { value: "wise", label: "Wise" },
  { value: "bank", label: "Bank" },
  { value: "visa", label: "Visa Card" },
];

const WithdrawModal = ({
  pendingBalance,
  show,
  setShow,
  setWithdrawalReqSent,
  withdrawalReqSent,
}) => {
  const [submiting, setSubmitting] = useState(false);

  const formik = useFormik({
    validationSchema: moneyWithdrawSchema,
    initialValues: {
      pendingBalance: Number(pendingBalance) + 1,
      amount: "",
      payment_method: "",
      bank_name: "",
      branch_name: "",
      routing_number: "",
      swift: "",
      account_holder: "",
      account_number: "",
      // paypalAccountNumber: "",
      email: "",
      card_number: "",
      message: "",
    },

    enableReinitialize: true,
    onSubmit: (values, action) => {
      setSubmitting(true);
      markutosSellerApi
        .post("/send-withdrawal-request", values, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          setShow(!show);
          setSubmitting(false);
          setWithdrawalReqSent(!withdrawalReqSent);
          action.resetForm();
        })
        .catch((err) => {
          setSubmitting(false);
          toast.error(err.message);
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
      dialogClassName={modalStyle.modalWidth}
      centered
      scrollable={true}
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Withdraw Request
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => e.preventDefault()}>
          <FocusError formik={formik} />
          <div className={modalStyle.infoContainer}>
            <div className={modalStyle.inputContainer}>
              <label htmlFor="amount">Amount</label>
              <div>
                <input
                  name="amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  type="number"
                  min={0}
                  id="amount"
                />
                {errors.amount && touched.amount && (
                  <small className="text-danger"> {errors.amount} </small>
                )}
              </div>
            </div>

            <div className={modalStyle.inputContainer}>
              <label htmlFor="payment_method">
                <span>Payment Method</span>
              </label>
              <div>
                <Select
                  id="payment_method"
                  name="payment_method"
                  onBlur={handleBlur}
                  onChange={(e) => setFieldValue("payment_method", e.value)}
                  value={options.find((opt) => {
                    return opt.value === values.payment_method;
                  })}
                  style={{
                    height: "25px",
                  }}
                  options={options}
                  placeholder="Payment Method"
                />

                {errors.payment_method && touched.payment_method && (
                  <small className="text-danger">{errors.payment_method}</small>
                )}
              </div>
            </div>

            {values.payment_method == "bank" && (
              <div>
                <div className={modalStyle.inputContainer}>
                  <label htmlFor="account_number">Account Number</label>
                  <div>
                    <input
                      name="account_number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.account_number}
                      id="account_number"
                      type="number"
                    />
                    {errors.account_number && touched.account_number && (
                      <small className="text-danger">
                        {errors.account_number}
                      </small>
                    )}
                  </div>
                </div>

                <div className={modalStyle.inputContainer}>
                  <label htmlFor="bank_name">Bank Name</label>
                  <div>
                    <input
                      name="bank_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bank_name}
                      type="text"
                      id="bank_name"
                    />

                    {errors.bank_name && touched.bank_name && (
                      <small className="text-danger">{errors.bank_name}</small>
                    )}
                  </div>
                </div>

                <div className={modalStyle.inputContainer}>
                  <label htmlFor="branch_name"> Branch Name</label>
                  <div>
                    <input
                      name="branch_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.branch_name}
                      id="branch_name"
                      type="text"
                    />
                    {errors.branch_name && touched.branch_name && (
                      <small className="text-danger">
                        {errors.branch_name}
                      </small>
                    )}
                  </div>
                </div>

                <div className={modalStyle.inputContainer}>
                  <label htmlFor="routing_number"> Routing Number</label>
                  <div>
                    <input
                      name="routing_number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.routing_number}
                      id="routing_number"
                      type="number"
                    />
                    {errors.routing_number && touched.routing_number && (
                      <small className="text-danger">
                        {errors.routing_number}
                      </small>
                    )}
                  </div>
                </div>

                <div className={modalStyle.inputContainer}>
                  <label htmlFor="swift"> Swift</label>
                  <div>
                    <input
                      name="swift"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.routing_number}
                      id="swift"
                      type="number"
                    />
                    {errors.swift && touched.swift && (
                      <small className="text-danger">{errors.swift}</small>
                    )}
                  </div>
                </div>

                <div className={modalStyle.inputContainer}>
                  <label htmlFor="account_holder">Account Holder Name</label>
                  <div>
                    <input
                      name="account_holder"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.account_holder}
                      id="account_holder"
                      type="text"
                    />

                    {errors.account_holder && touched.account_holder && (
                      <small className="text-danger">
                        {errors.account_holder}
                      </small>
                    )}
                  </div>
                </div>
              </div>
            )}

            {values.payment_method == "paypal" && (
              <div>
                {/* <div className={modalStyle.inputContainer}>
                  <label htmlFor="paypalAccountNumber">
                    {" "}
                    Paypal Account Number
                  </label>
                  <div>
                    <input
                      name="paypalAccountNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.paypalAccountNumber}
                      id="paypalAccountNumber"
                      type="number"
                    />
                    {errors.paypalAccountNumber &&
                      touched.paypalAccountNumber && (
                        <small className="text-danger">
                          {errors.paypalAccountNumber}
                        </small>
                      )}
                  </div>
                </div> */}

                <div className={modalStyle.inputContainer}>
                  <label htmlFor="email">Paypal Account Email</label>
                  <div>
                    <input
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      id="email"
                      type="email"
                    />
                    {errors.email && touched.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>
                </div>
              </div>
            )}

            {values.payment_method == "visa" && (
              <div>
                <div className={modalStyle.inputContainer}>
                  <label htmlFor="card_number"> Visa Card Number</label>
                  <div>
                    <input
                      name="card_number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.card_number}
                      id="card_number"
                      type="number"
                    />
                    {errors.card_number && touched.card_number && (
                      <small className="text-danger">
                        {errors.card_number}
                      </small>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className={modalStyle.inputContainer}>
              <label htmlFor="message"> Message</label>
              <div>
                <textarea
                  rows={5}
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  id="message"
                  type="text"
                />
                {errors.message && touched.message && (
                  <small className="text-danger">{errors.message}</small>
                )}
              </div>
            </div>
          </div>
          <button
            disabled={submiting}
            onClick={handleSubmit}
            type="submit"
            className="btn mb-5 btn-outline-success"
          >
            {submiting ? (
              <div>
                <div
                  className="spinner-border spinner-border-sm me-1"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                Requesting
              </div>
            ) : (
              "Confirm"
            )}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default WithdrawModal;
