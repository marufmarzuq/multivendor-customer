import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import uploadModalStyle from "./uploadModal.module.css";
import "./uploadFiles.css";
import { uploadedFiles } from "../../../utils/data";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
import {
  AiOutlineInfoCircle,
  AiOutlineDownload,
  AiOutlineDelete,
} from "react-icons/ai";
import { RiFileCopyLine } from "react-icons/ri";
import DragNdrop from "./dragNdrop/DragNdrop";

const OrderModal = ({ show, setShow }) => {
  let [files, setFiles] = useState([]);
  const [view, setView] = useState("select");
  const [currIndex, setCurrIndex] = useState(null);
  const handleOptions = (index) => {
    if (index === currIndex) setCurrIndex(null);
    else setCurrIndex(index);
  };

  const submitFiles = () => {
    setShow(!show);
    console.log(files);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName={uploadModalStyle.orderModalWidth}
        centered
        scrollable={true}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <Button
              variant="outline-success"
              onClick={() => setView("select")}
              className="me-3 mb-2 mb-md-0"
            >
              Select File
            </Button>
            <Button
              className="me-3 mb-2 mb-md-0"
              variant="outline-success"
              onClick={() => setView("upload")}
            >
              <FiUploadCloud />
              <span className="ms-2">Upload New File</span>
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {view == "select" ? (
            <section>
              <div className="upload-files">
                <div className="upload-files-header">
                  <div className="upload-files-title">All Uploaded Files</div>
                  <div className="ufh-right">
                    <input
                      type="text"
                      className="upload-files-search"
                      placeholder="Search files by name"
                    />
                    {/* <div className="upload-new-file-btn">
                      <FiUploadCloud />
                      <span>Upload New File</span>
                    </div> */}
                  </div>
                </div>
                <div className="uploaded-files-container mb-1">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="single-uploaded-file">
                      <div className="file-img-container">
                        <img src={file.img} alt="" />
                      </div>
                      <div className="file-name">{file.name}</div>
                      <div className="file-size">{file.size}</div>
                      <div
                        className="file-options"
                        onClick={() => handleOptions(index)}
                      >
                        <div className="file-options-icon-container">
                          <BsThreeDotsVertical />
                          {currIndex === index && (
                            <div className="file-options-box">
                              <div className="single-file-option">
                                <AiOutlineInfoCircle />
                                <span>Details Info</span>
                              </div>
                              <div className="single-file-option">
                                <AiOutlineDownload />
                                <span>Download</span>
                              </div>
                              <div className="single-file-option">
                                <RiFileCopyLine />
                                <span>Copy Link</span>
                              </div>
                              <div className="single-file-option">
                                <AiOutlineDelete />
                                <span>Delete</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="drag-upload">
              <DragNdrop files={files} setFiles={setFiles} />
            </section>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={submitFiles} variant="outline-success">
            Save File
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderModal;
