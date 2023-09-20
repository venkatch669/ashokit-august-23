import React from "react";
import myImage from "../Images/logo.png";
function Header() {
  return (
    <div>
      <section className="header">
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container">
            <div className="logo-img">
              <a className="navbar-brand">
                <img src={myImage} alt="My Image" />
              </a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link">Term Insurance</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Investment Plans</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">My Account</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <button className="btn btn-md">Sign In</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
