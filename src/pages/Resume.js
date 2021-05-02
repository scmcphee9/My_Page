import React, { useState } from "react";
import "./Resume.css";
// import { Document, Page } from "react-pdf";

//use react-pdf, when I have time to work on this

function Resume() {
  return (
    <iframe
      className="resume"
      src="https://docs.google.com/gview?url=https://github.com/scmcphee9/resume/raw/main/ShawnMcPheeWebsite.pdf&embedded=true"
    ></iframe>
  );
}

export default Resume;
