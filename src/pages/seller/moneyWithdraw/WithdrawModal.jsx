import React from "react";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import modalStyle from "./moneyWithdraw.module.css";

const options = [
  { value: "Paypal", label: "Paypal" },
  { value: "wise", label: "Wise" },
  { value: "bank", label: "Bank" },
  { value: "visa", label: "Visa Card" },
];

const WithdrawModal = ({ show, setShow }) => {
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
        <div className={modalStyle.infoContainer}>
          <label htmlFor="name">Amount</label>
          <input type="number" min={0} id="name" />
          <label htmlFor="product__Brand">
            <span>Payment Method</span>
          </label>
          <Select
            style={{
              height: "25px",
            }}
            options={options}
            placeholder="Payment Method"
          />
        </div>
        <button className="btn mb-5 btn-outline-success">Confirm</button>
      </Modal.Body>
    </Modal>
  );
};

export default WithdrawModal;
