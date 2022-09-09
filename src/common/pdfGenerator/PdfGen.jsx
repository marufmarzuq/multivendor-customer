import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Invoice from "../invoice/Invoice";
import pdfStyle from "./pdfGen.module.css";

const PdfGen = ({ com, setRef }) => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button
            className={`${
              com
                ? `${pdfStyle.bottom} btn btn-primary`
                : `${pdfStyle.right} btn btn-primary`
            }`}
          >
            Print this out!
          </button>
        )}
        content={() => componentRef.current}
      />
      <div className={pdfStyle.hide} ref={componentRef}>
        {com ? com : <Invoice />}
      </div>
    </div>
  );
};

export default PdfGen;
