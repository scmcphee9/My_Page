import React from "react";
import { Link } from "react-router-dom";
import GitHubImage from "../../pages/assets/images/GitHub-Mark-32px.png";
import LinkedInImage from "../../pages/assets/images/LI-In-Bug.png";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Shawn McPhee
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactme"
              className={
                window.location.pathname === "/contactme"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={
                window.location.pathname === "/resume"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://github.com/scmcphee9" target="_blank">
              <img src={GitHubImage} alt="github icon" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/shawn-mcphee-4a92731ab/"
              target="_blank"
            >
              <img
                src={LinkedInImage}
                alt="LinkIn icon"
                style={{ height: "32px", width: "32px", margin: "3px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
