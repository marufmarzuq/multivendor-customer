import React, { useState } from "react";
import upCSVstyle from "./uploadCSV.module.css";
import UploadFilesModal from "../../../UploadFiles/UploadFilesModal";

const UploadCSV = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={upCSVstyle.upContainer}>
      <h5>Upload CSV File</h5>
      <div className={`${upCSVstyle.uploadCSVfile} ap-single-content`}>
        <div>
          <p>Add CSV</p>
        </div>
        <div>
          <div onClick={() => setShow(!show)} className="custom-browse">
            <div>Browse</div>
            <div>Choose File</div>
          </div>

          <UploadFilesModal show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};

export default UploadCSV;
