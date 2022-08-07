import React from "react";
import downloadCatStyle from "./downloadCategory.module.css";

const DownloadCategory = () => {
  return (
    <div className={downloadCatStyle.catContainer}>
      <p>1. Category and Brand should be in numerical id.</p>
      <p>2. You can download the pdf to get Category and Brand id.</p>
      <button className="btn  btn-success"> Download Category</button>
      <button className="btn btn-success"> Download Brand</button>
    </div>
  );
};

export default DownloadCategory;
