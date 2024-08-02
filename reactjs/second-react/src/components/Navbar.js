import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <>
      <nav>
        <div className="left">
        <h1 className="logo">{props.tital}</h1>
        </div>
        <div className="right">
          <div className="nav-btn">Home</div>
          <div className="nav-btn">About me</div>
          <div className="nav-btn"> Projects</div>
          <div className="nav-btn">Contact me</div>
        </div>
      </nav>
    </>
  );
}
