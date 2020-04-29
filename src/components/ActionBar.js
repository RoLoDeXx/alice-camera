import React, { Component } from "react";
import Modal from "./Campaigns/CreateCampModal";
export default class ActionBar extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="navbar d-flex justify-content-between align-items-center container-fluid">
        <h3>All Campaigns</h3>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#campaign-modal"
        >
          <span className="fas fa-plus"></span> Create Campaign
        </button>

        <Modal></Modal>
      </div>
    );
  }
}
