import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./pdfModal.module.css";
import PdfGen from "../pdfGenerator/PdfGen";

const PdfModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName={modalStyle.PdfModalWidth}
        centered
        scrollable={true}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PdfGen />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PdfModal;
