import React from "react";
import Campaigns from "./Campaigns";
import People from "./People";
import Sidebar from "./Sidebar";
import ActionBar from "./ActionBar";
import { BrowserRouter, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="layout-grid">
        <Sidebar />
        <div className="action-area  border-left">
          <ActionBar />
          <Route path="/camps" component={Campaigns} />
          <Route path="/people" component={People} />
        </div>
      </div>
    </BrowserRouter>
  );
}
