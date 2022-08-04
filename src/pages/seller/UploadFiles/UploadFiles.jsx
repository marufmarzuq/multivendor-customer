import React, { useState } from "react";

import { uploadedFiles } from "../../utils/data";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
import {
  AiOutlineInfoCircle,
  AiOutlineDownload,
  AiOutlineDelete,
} from "react-icons/ai";
import { RiFileCopyLine } from "react-icons/ri";
import "./uploadFiles.css";

const UploadFiles = () => {
  const [currIndex, setCurrIndex] = useState(null);
  const handleOptions = (index) => {
    if (index === currIndex) setCurrIndex(null);
    else setCurrIndex(index);
  };
  return (
    <div className="upload-files">
      <div className="upload-files-header">
        <div className="upload-files-title">All Uploaded Files</div>
        <div className="ufh-right">
          <input
            type="text"
            className="upload-files-search"
            placeholder="Search files by name"
          />
          <div className="upload-new-file-btn">
            <FiUploadCloud />
            <span>Upload New File</span>
          </div>
        </div>
      </div>
      <div className="uploaded-files-container">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="single-uploaded-file">
            <div className="file-img-container">
              <img src={file.img} alt="" />
            </div>
            <div className="file-name">{file.name}</div>
            <div className="file-size">{file.size}</div>
            <div className="file-options" onClick={() => handleOptions(index)}>
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
  );
};

export default UploadFiles;
