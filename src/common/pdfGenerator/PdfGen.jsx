import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Invoice from "../invoice/Invoice";
import pdfStyle from "./pdfGen.module.css";

const PdfGen = ({ setRef }) => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className={`${pdfStyle.right} btn btn-outline-primary`}>
            Print this out!
          </button>
        )}
        content={() => componentRef.current}
      />
      <div className={pdfStyle.hide} ref={componentRef}>
        <Invoice />
      </div>
    </div>
  );
};

export default PdfGen;
