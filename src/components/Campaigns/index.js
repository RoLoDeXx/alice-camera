import Stepper from "./Stepper";
import ActionBar from "../ActionBar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getStep } from "../../actions";
export class index extends Component {
  componentDidMount() {
    this.props.getStep();
  }
  render() {
    console.log(this.props.step);

    return (
      <div>
        <ActionBar title="All Campaigns" />
        <Stepper></Stepper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  step: state.step,
});

export default connect(mapStateToProps, { getStep })(index);
