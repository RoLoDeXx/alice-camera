import React from "react";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

let stash = [
  {
    icon: "home",
    title: "Dashboard",
    link: "#",
  },
  {
    icon: "user",
    title: "People",
    link: "/people",
  },
  {
    icon: "bullhorn",
    title: "Campaigns",
    link: "/camps",
  },
  {
    icon: "file-alt",
    title: "Templates",
    link: "",
  },
  {
    icon: "cog",
    title: "Settings",
    link: "",
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} className="w-100 " alt="site-logo" />
      <div className="container mt-4">
        {stash.map((item) => (
          <div className="sidebar-grid">
            <i className={`fas fa-${item.icon}`}></i>
            <Link to={item.link}> {item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
