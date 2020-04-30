import React, { Component } from "react";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      active: "",
    };
  }

  addColor = () => {};

  render() {
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

    return (
      <div className="sidebar">
        <img src={logo} className="w-100 " alt="site-logo" />
        <div className="container mt-4 d-flex flex-column justify-content-between">
          <div>
            {stash.map((item) => (
              <div className="sidebar-grid" key={item.title}>
                <i className={`fas fa-${item.icon}`}></i>
                <Link to={item.link}> {item.title}</Link>
              </div>
            ))}
          </div>
          <div className="sidebar-grid border-top">
            <i className={`fas fa-user-circle`}></i>
            <Link to="#"> Profile</Link>
          </div>
        </div>
      </div>
    );
  }
}
