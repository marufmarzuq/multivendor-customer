import React, { useState } from "react";
import upCSVstyle from "./uploadCSV.module.css";
import UploadFilesModal from "../../../UploadFiles/UploadFilesModal";
import { toast } from "react-toastify";
import { markutosSellerApi } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";

const UploadCSV = () => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState({});
  const [uplading, setUploading] = useState(false);
  const handleCsvUpload = () => {
    if (!file?.name) {
      toast.error("Please select a csv file", {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    } else {
      const formData = new FormData();
      formData.append("file", file);
      setUploading(true);
      markutosSellerApi
        .post("/products/bulk-upload/post", formData, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          toast.success(res.data, {
            autoClose: 2000,
          });
          setUploading(false);
          // setFile({});
        })
        .catch((err) => {
          toast.error(err.message);
          setUploading(false);
        });
    }
  };
  return (
    <div className={upCSVstyle.upContainer}>
      <h5>Upload CSV File</h5>
      <div className={`${upCSVstyle.uploadCSVfile} ap-single-content`}>
        <div>
          <p>Add CSV</p>
        </div>
        <div>
          <div
            // onClick={() => setShow(!show)}
            className={`custom-browse ${upCSVstyle.csvFileInputContainer}`}
          >
            <div>Browse</div>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              className={upCSVstyle.csvFileInput}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              type="file"
            />
            <div> {file.name ? file.name : "Choose File"} </div>
          </div>

          {/* <UploadFilesModal show={show} setShow={setShow} /> */}
        </div>
      </div>
      <div className={upCSVstyle.submitbutton}>
        <button
          disabled={uplading}
          onClick={handleCsvUpload}
          className="btn btn-success"
        >
          {uplading ? (
            <div>
              <div
                className="spinner-border spinner-border-sm me-1"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              Uploading CSV
            </div>
          ) : (
            "Upload CSV"
          )}
        </button>
      </div>
    </div>
  );
};

export default UploadCSV;
