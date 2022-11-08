import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./modal.module.css";
import { useState } from "react";
import customerAuthHeader from "../../../../../services/customer-auth-header";
import { markutosFrontendApi } from "../../../../../services/Api/api";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { AiOutlineUser } from "react-icons/ai";

const SupportModal = ({ page, show, setShow, ticketId }) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
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
			setSupportDetails(res.data.data);
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
		  <div
      className="single-widget"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
    >
      <div className="widget-title">
        {"subject"} (#{ticketId})
      </div>
      <div className="widget-container">
			<div className="support-replay-profile">
				<div className="srp-img">
					<AiOutlineUser />
				</div>
				<span>Replay</span>
				</div>
				<div className="prod-desc-container">
				<Editor
					editorState={editorState}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onEditorStateChange={(value) => setEditorState(value)}
				/>
				</div>
				<div className="btns-container" style={{ height: "40px" }}>

				<span>Send Replay</span>
				</div>
				<div className="widget-title" style={{ margin: "0 0 20px" }}>
				Conversations
				</div>
				<div className="support-ticket-conversation-container">
				<div className="stc-user-container">
					<div className="support-replay-profile">
					<div className="stc-user-img">
						<AiOutlineUser />
					</div>
					<div className="stc-info">
						<span>Jhon Doe</span>
						<span className="stc-date">Today, 12/09/2022 - 11:45 AM</span>
					</div>
					</div>
				</div>
				<div className="stc-message">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
					quibusdam illum repellat optio, sit modi suscipit et vel eaque.
					Atque fugiat maiores perferendis? Distinctio culpa et veniam ea
					molestiae odio?
				</div>
				<div className="stc-admin-container">
					<div className="support-replay-profile">
					<div className="stc-info admin">
						<span>You</span>
						<span className="stc-date">Today, 12/09/2022 - 9:45 AM</span>
					</div>
					<div className="stc-user-img">
						<AiOutlineUser />
					</div>
					</div>
				</div>
				<div className="stc-message">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
					quibusdam illum repellat optio, sit modi suscipit et vel eaque.
					Atque fugiat maiores perferendis? Distinctio culpa et veniam ea
					molestiae odio?
				</div>
				</div>
				<div className="support-ticket-creating-date">
				Ticket #{ticketId} has been created at {"create date"}
				</div>
				</div>
			</div>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SupportModal;