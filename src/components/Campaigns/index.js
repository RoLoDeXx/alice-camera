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
    return (
      <div>
        <ActionBar title="All Campaigns" show={true} />
        <Stepper></Stepper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  step: state.step,
});

export default connect(mapStateToProps, { getStep })(index);
