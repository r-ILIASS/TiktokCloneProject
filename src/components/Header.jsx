import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={mainLogo} alt="mainLogo" />
        </div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to="/upload">
            <FontAwesomeIcon icon={faDownload} className="upload" />
          </Link>
          <img src={mainLogo} alt="" className="personal" />
        </div>
      </div>
    </div>
  );
}
