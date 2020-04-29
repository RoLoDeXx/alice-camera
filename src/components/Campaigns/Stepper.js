import React, { Component } from "react";

export default class Stepper extends Component {
  constructor() {
    super();
    this.state = {
      gb: 1,
    };
  }

  jumpToStep = (number) => {
    this.setState({
      gb: number,
    });
  };

  render() {
    return (
      <div>
        <div className="stepper">
          <span
            className="stepper-item complete d-flex align-items-center justify-content-around"
            onClick={() => {
              this.jumpToStep(1);
            }}
          >
            {this.state.gb > 1 ? (
              <span className="active-tick">
                <i className="fas fa-check"></i>
              </span>
            ) : (
              <span className="active-circle">1</span>
            )}
            <span>Sequence</span>
          </span>

          {this.state.gb >= 2 ? (
            <span
              className="stepper-item complete d-flex align-items-center justify-content-around"
              onClick={() => {
                this.jumpToStep(2);
              }}
            >
              {this.state.gb > 2 ? (
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
              onClick={() => {
                this.jumpToStep(2);
              }}
            >
              <span className="unactive-circle">2</span> <span>Schedule</span>
            </span>
          )}

          {this.state.gb >= 3 ? (
            <span
              className="stepper-item complete d-flex align-items-center justify-content-around"
              onClick={() => {
                this.jumpToStep(3);
              }}
            >
              {this.state.gb > 3 ? (
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
              onClick={() => {
                this.jumpToStep(3);
              }}
            >
              <span className="unactive-circle">3</span> <span>People</span>
            </span>
          )}
          {this.state.gb >= 4 ? (
            <span
              className="stepper-item complete d-flex align-items-center justify-content-around"
              onClick={() => {
                this.jumpToStep(4);
              }}
            >
              {this.state.gb > 4 ? (
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
              onClick={() => {
                this.jumpToStep(4);
              }}
            >
              <span className="unactive-circle">4</span> <span>Settings</span>
            </span>
          )}
          {this.state.gb >= 5 ? (
            <span
              className="stepper-item stepper-ender complete d-flex align-items-center justify-content-around"
              onClick={() => {
                this.jumpToStep(5);
              }}
            >
              {this.state.gb > 5 ? (
                <span className="unactive-circle">5</span>
              ) : (
                <span className="active-circle">5</span>
              )}
              <span>Review</span>
            </span>
          ) : (
            <span
              className="stepper-item d-flex align-items-center justify-content-around"
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
