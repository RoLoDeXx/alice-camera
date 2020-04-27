import React from "react";

export default function Layout() {
  return (
    <div>
      <div className="layout-grid">
        <div className="sidebar container-fluid">
          <div className="d-flex justify-content-between align-items-baseline">
            <span>el</span>
            <p>Dashboard</p>
          </div>
        </div>
        <div className="action-area container-fluid">
          <div className="navbar d-flex justify-content-between align-items-center container-fluid">
            <h3>All Campaigns</h3>
            <h3>All Campaigns</h3>
          </div>
          {/* <Route path="/" component={Campaigns} />
            <Route path="/people" component={People} /> */}
        </div>
      </div>
    </div>
  );
}
