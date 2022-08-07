import React from "react";
import csvStyle from "./downloadCSV.module.css";

const DownloadCSV = () => {
  return (
    <div className={csvStyle.csvContainer}>
      <p>1. Download the skeleton file and fill it with data.</p>
      <p>
        2. You can download the example file to understand how the data must be
        filled.
      </p>
      <p>
        3. Once you have downloaded and filled the skeleton file, upload it in
        the form below and submit.
      </p>
      <p>
        4. After uploading products you need to edit them and set products
        images and choices.
      </p>

      <button className="btn btn-success">Download CSV</button>
    </div>
  );
};

export default DownloadCSV;
