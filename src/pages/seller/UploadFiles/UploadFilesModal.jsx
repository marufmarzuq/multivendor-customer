import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import uploadModalStyle from "./uploadModal.module.css";
import "./uploadFiles.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
import {
  AiOutlineInfoCircle,
  AiOutlineDownload,
  AiOutlineDelete,
} from "react-icons/ai";
import DragNdrop from "./dragNdrop/DragNdrop";
import { markutosSellerApi } from "../../services/Api/api";
import authHeader from "../../services/auth-header";
import { toast } from "react-toastify";

const OrderModal = ({
  show,
  setShow,
  values,
  imageFor,
  format,
  setFieldValue,
}) => {
  let [files, setFiles] = useState([]);
  let [selectedGallery, setSellectedGallery] = useState([]);
  const [view, setView] = useState("select");
  const [currIndex, setCurrIndex] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [fetchingfile, setFetchingFile] = useState(false);
  const handleOptions = (index) => {
    if (index === currIndex) setCurrIndex(null);
    else setCurrIndex(index);
  };

  const submitFiles = () => {
    if (files.length > 0) {
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("files[]", files[i]);
      }

      setUploading(true);
      markutosSellerApi
        .post("/uploads/new-file-upload", formData, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          getFiles();
          toast.success(res.data.message);
          // console.log(res.data);
          setUploading(false);
          setFiles([]);
          setView("select");
          // setShow(!show);
        })
        .catch((err) => {
          // console.log(err.message);
          toast.error(err.message);
          setUploading(false);
          // setShow(!show);
        });
    } else {
      if (format == "pdf") {
        setFieldValue(imageFor, files[0]?.name);
      } else if (format == "array") {
        setFieldValue(imageFor, [
          ...selectedGallery,
          ...files.map((item) => item?.name),
        ]);
      } else {
        setFieldValue(
          imageFor,
          selectedGallery.length > 0 ? selectedGallery[0] || files[0]?.name : ""
        );
      }

      setShow(!show);
      setSellectedGallery([]);
      setFiles([]);
    }
  };

  const selectFile = (file) => {
    if (selectedGallery.includes(file.file_original_name)) {
      const afterRemoved = selectedGallery.filter((item) => {
        return item != file.file_original_name;
      });

      setSellectedGallery(afterRemoved);
    } else {
      setSellectedGallery((state) => {
        return [...state, file.file_original_name];
      });
    }

    // setShow(!show);
  };

  const getFiles = () => {
    setFetchingFile(true);
    markutosSellerApi
      .get("/uploads?search_value=&per_page=40", {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        setUploadedFiles(res.data.data);
        setFetchingFile(false);
      })
      .catch((err) => {
        console.log(err.message);
        setFetchingFile(false);
      });
  };

  const deleteFile = (id) => {
    markutosSellerApi
      .get(`/uploads/delete-file?file_id=${id}`, {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        getFiles();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    getFiles();
  }, []);

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
                {/* {fetchingfile ? (
                  <SimpleLoading />
                ) : ( */}
                <div className="uploaded-files-container mb-1">
                  {uploadedFiles.map((file, index) => (
                    <div
                      style={{ cursor: "pointer" }}
                      name="shopLogo"
                      id="shopLogo"
                      onClick={() => selectFile(file)}
                      key={index}
                      className={`single-uploaded-file ${
                        selectedGallery.includes(file.file_original_name) &&
                        uploadModalStyle.selected
                      }`}
                    >
                      <div className="file-img-container">
                        <img src={file.file_url} alt="" />
                      </div>
                      {/* <div className="file-name">{file.name}</div>
                    <div className="file-size">{file.size}</div> */}
                      <div
                        className="file-options"
                        onClick={() => handleOptions(index)}
                      >
                        <div className="file-options-icon-container">
                          <BsThreeDotsVertical />
                          {currIndex === index && (
                            <div className="file-options-box">
                              {/* <div className="single-file-option">
                              <AiOutlineInfoCircle />
                              <span>Details Info</span>
                            </div> */}
                              {/* <div className="single-file-option">
                              <AiOutlineDownload />
                              <span>Download</span>
                            </div>
                            <div className="single-file-option">
                              <RiFileCopyLine />
                              <span>Copy Link</span>
                            </div> */}
                              <div
                                onClick={() => deleteFile(file.id)}
                                className="single-file-option"
                              >
                                <AiOutlineDelete />
                                <span>Delete</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* <div className="file-options-icon-container">
                        {currIndex === index && (
                          <div className="file-options-box">
                            <div className="single-file-option">
                              <small>Name: {file.file_original_name}</small>
                              <small>size: {file.file_size} KB</small>

                              <small>
                                Uploaded By:
                                {file.uploaded_by}
                              </small>
                            </div>
                          </div>
                        )}
                      </div> */}
                      </div>
                    </div>
                  ))}
                </div>
                {/* )} */}
              </div>
            </section>
          ) : (
            <section className="drag-upload">
              <DragNdrop files={files} setFiles={setFiles} />
            </section>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            disabled={uploading}
            onClick={submitFiles}
            variant="outline-success"
          >
            {uploading ? (
              <div>
                <div
                  className="spinner-border spinner-border-sm me-1"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                Uploading
              </div>
            ) : (
              "  Save File"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderModal;
