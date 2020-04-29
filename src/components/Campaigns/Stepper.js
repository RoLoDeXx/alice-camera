import React, { Component } from "react";
import { connect } from "react-redux";
import { getStep, setStep } from "../../actions";

class Stepper extends Component {
  componentDidMount() {
    this.props.getStep();
  }

  jumpToStep = (number) => {
    this.props.setStep(number);
  };

  render() {
    return (
      <div>
        <div className="stepper">
          <span
            className="stepper-item complete d-flex align-items-center justify-content-around"
            data-toggle="modal"
            data-target="#campaign-modal"
            onClick={() => {
              this.jumpToStep(1);
            }}
          >
            {this.props.step > 1 ? (
              <span className="active-tick btn">
                <i className="fas fa-check"></i>
              </span>
            ) : (
              <span className="active-circle">1</span>
            )}
            <span>Sequence</span>
          </span>

          {this.props.step >= 2 ? (
            <span
              className="stepper-item complete d-flex align-items-center justify-content-around"
              data-toggle="modal"
              data-target="#campaign-modal"
              onClick={() => {
                this.jumpToStep(2);
              }}
            >
              {this.props.step > 2 ? (
                <span className="active-tick">
                  <i className="fas fa-check"></i>
                </span>
              ) : (
                <span className="active-circle">2</span>
              )}
              <span>Schedule</span>
            </span>
          ) : (
            <span
              className="stepper-item d-flex align-items-center justify-content-around"
              data-toggle="modal"
              data-target="#campaign-modal"
              onClick={() => {
                this.jumpToStep(2);
              }}
            >
              <span className="unactive-circle">2</span> <span>Schedule</span>
            </span>
          )}

          {this.props.step >= 3 ? (
            <span
              className="stepper-item complete d-flex align-items-center justify-content-around"
              data-toggle="modal"
              data-target="#campaign-modal"
              onClick={() => {
                this.jumpToStep(3);
              }}
            >
              {this.props.step > 3 ? (
                <span className="active-tick">
                  <i className="fas fa-check"></i>
                </span>
              ) : (
                <span className="active-circle">3</span>
              )}
              <span>People</span>
            </span>
          ) : (
            <span
              className="stepper-item d-flex align-items-center justify-content-around"
              data-toggle="modal"
              data-target="#campaign-modal"
              onClick={() => {
                this.jumpToStep(3);
              }}
            >
              <span className="unactive-circle">3</span> <span>People</span>
            </span>
          )}
          {this.props.step >= 4 ? (
            <span
              className="stepper-item complete d-flex align-items-center justify-content-around"
              data-toggle="modal"
              data-target="#campaign-modal"
              onClick={() => {
                this.jumpToStep(4);
              }}
            >
              {this.props.step > 4 ? (
                <span className="active-tick">
                  <i className="fas fa-check"></i>
                </span>
              ) : (
                <span className="active-circle">4</span>
              )}
              <span>Settings</span>
            </span>
          ) : (
            <span
              className="stepper-item d-flex align-items-center justify-content-around"
              data-toggle="modal"
              data-target="#campaign-modal"
              onClick={() => {
                this.jumpToStep(4);
              }}
            >
              <span className="unactive-circle">4</span> <span>Settings</span>
            </span>
          )}
          {this.props.step >= 5 ? (
            <span
              className="stepper-item stepper-ender complete d-flex align-items-center justify-content-around"
              data-toggle="modal"
              data-target="#campaign-modal"
              onClick={() => {
                this.jumpToStep(5);
              }}
            >
              {this.props.step > 5 ? (
                <span className="unactive-circle">5</span>
              ) : (
                <span className="active-circle">5</span>
              )}
              <span>Review</span>
            </span>
          ) : (
            <span
              className="stepper-item d-flex align-items-center justify-content-around"
              data-toggle="modal"
              data-target="#campaign-modal"
              onClick={() => {
                this.jumpToStep(5);
              }}
            >
              <span className="unactive-circle">5</span> <span>Review</span>
            </span>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { step: state.step };
};

export default connect(mapStateToProps, { getStep, setStep })(Stepper);
