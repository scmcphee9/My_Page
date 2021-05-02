import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "./assets/images/Shawn McPhee Website.pdf";
import "./Resume.css";

const url =
  "https://drive.google.com/file/d/1s4PLRLRTepvnY-Mb5Gt9ouUv0LtN6mEH/view";

function Resume() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }
  // function onResumeClick() {
  //   window.open(pdf);
  // }
  // const { pdf } = props;

  return (
    <iframe
      className="resume"
      src="https://docs.google.com/gview?url=https://github.com/scmcphee9/resume/raw/main/ShawnMcPheeWebsite.pdf&embedded=true"
      // style="width: 100%; height: 100%"
      // frameborder="0"
    ></iframe>
    // <a onClick={onResumeClick}>Resume</a>
    // <div>
    //   <a
    //     href={require("./assets/images/Shawn McPhee Website.pdf")}
    //     target="_blank"
    //   ></a>
    // </div>
    // <div>
    //   <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
    //     <Page pageNumber={pageNumber} />
    //   </Document>
    //   <p>
    //     Page {pageNumber} of {numPages}
    //   </p>
    // </div>
  );
}

export default Resume;
