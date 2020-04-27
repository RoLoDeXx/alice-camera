import React from "react";
import logo from "../assets/images/logo.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar ">
      <img src={logo} className="w-100 " alt="site-logo" />
      <div className="container-fluid d-flex justify-content-between align-items-baseline">
        <span>el</span>
        <p>Dashboard</p>
      </div>
    </div>
  );
}

const sideBarList = (font, title, route = "#") => {};
