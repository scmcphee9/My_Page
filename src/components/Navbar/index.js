import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar id="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand" to="/">
        Shawn McPhee
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
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
              <Link
                to="/GitHub"
                target="_blank"
                rel="noreferrer"
                className={
                  window.location.href === "/GitHub"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                GitHub
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/LinkedIn"
                target="_blank"
                rel="noreferrer"
                className={
                  window.location.href === "/LinkedIn"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
