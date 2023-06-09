import React from "react";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./pdfModal.module.css";
import PdfGen from "../pdfGenerator/PdfGen";

const PdfModal = ({ com, show, setShow }) => {
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
          <PdfGen com={com} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PdfModal;
