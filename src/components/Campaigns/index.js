import React, { Component } from "react";
import Stepper from "./Stepper";
import ActionBar from "../ActionBar";
export default class index extends Component {
  render() {
    return (
      <div>
        <ActionBar title="All Campaigns" />
        <Stepper></Stepper>
      </div>
    );
  }
}
