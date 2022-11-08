import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import modalStyle from "./modal.module.css";
import { useState } from "react";
import customerAuthHeader from "../../../../../services/customer-auth-header";
import { markutosFrontendApi } from "../../../../../services/Api/api";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { AiOutlineUser } from "react-icons/ai";
import Conversations from "./Conversations";

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
					{/* Conversations */}
					<Conversations replies={supportDetails?.replies} ticketId={ticketId} createdAt={supportDetails?.ticket?.created_at}/>
				</div>
			</div>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SupportModal;