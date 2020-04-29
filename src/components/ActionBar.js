import React, { Component } from "react";
import Modal from "./Campaigns/CreateCampModal";
import { connect } from "react-redux";
import { getStep, nextStep, prevStep } from "../actions/index";
export class ActionBar extends Component {
  render() {
    return (
      <div className="navbar d-flex justify-content-between align-items-center container-fluid">
        <h3>{this.props.title}</h3>
        {this.props.show && this.props.step === 1 && (
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#campaign-modal"
          >
            <span className="fas fa-plus"></span> Create Campaign
          </button>
        )}

        {this.props.step > 1 && (
          <div className="routing-btns">
            <button
              className="mr-4 back-btn btn"
              onClick={() => {
                this.props.prevStep(this.props.step);
              }}
            >
              Back
            </button>
            <button
              className="mr-4 skip-btn btn"
              onClick={() => {
                this.props.nextStep(this.props.step);
              }}
            >
              Skip
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.nextStep(this.props.step);
              }}
            >
              Next
            </button>
          </div>
        )}

        <Modal></Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  step: state.step,
});

export default connect(mapStateToProps, { getStep, nextStep, prevStep })(
  ActionBar
);
