import React from "react";

// import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "../components/pdf/all-pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../ShawnMcPheeWebsite.pdf";

import "./Resume.css";

function Resume() {
  return (
    <div className="Resume">
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>
    </div>
  );
}

export default Resume;
