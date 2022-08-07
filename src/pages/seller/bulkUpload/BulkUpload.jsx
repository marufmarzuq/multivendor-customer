import React from "react";
import bulkUploadStyle from "./bulkUpload.module.css";
import DownloadCategory from "./components/downloadCategory/DownloadCategory";
import DownloadCSV from "./components/downloadCSV/DownloadCSV";
import UploadCSV from "./components/uploadCSV/UploadCSV";

const BulkUpload = () => {
  return (
    <div className={bulkUploadStyle.spacing}>
      <h5 className="mb-4">Bulk Products Upload</h5>
      <DownloadCSV />
      <DownloadCategory />
      <UploadCSV />
    </div>
  );
};

export default BulkUpload;
