import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./modal.module.css";
import "./supportModal.css";
import { useState } from "react";
import customerAuthHeader from "../../../../../services/customer-auth-header";
import { markutosFrontendApi } from "../../../../../services/Api/api";

import Conversations from "./components/Conversations";
import Reply from "./components/Reply";

const SupportModal = ({ page, show, setShow, ticketId }) => {
  const [supportDetails, setSupportDetails] = useState("");

  useEffect(() => {
    if (page == "support" && ticketId) {
      markutosFrontendApi
        .get(`/dashboard/support-conversation?ticket_code=${ticketId}`, {
          headers: {
            Authorization: customerAuthHeader(),
          },
        })
        .then((res) => {
          setSupportDetails(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [ticketId]);

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
            Ticket Id: {ticketId}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Reply ticket={supportDetails?.ticket} />
            {/* Conversations */}
            <Conversations
              replies={supportDetails?.replies}
              ticketId={ticketId}
              createdAt={supportDetails?.ticket?.created_at}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SupportModal;
