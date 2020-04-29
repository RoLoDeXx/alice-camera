import React, { Component } from "react";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";

export default class CreateCampModal extends Component {
  constructor() {
    super();
    this.state = { gb: 4 };
  }

  nextStep = async () => {
    await this.setState((prev) => ({ gb: prev.gb + 1 }));
    console.log(this.state.gb);
  };

  render() {
    return (
      <div
        className="modal fade"
        id="campaign-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close d-flex flex-row-reverse"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span className="pt-4 pr-4" aria-hidden="true">
                &times;
              </span>
            </button>
            {this.state.gb === 1 && (
              <div className="modal-body campaign-modal pb-5 mb-5">
                <h3 className="text-center mb-4">Create a Campaign</h3>

                <div className="d-flex justify-content-around align-items-center">
                  <div className="card">
                    <div
                      className="card-body text-center"
                      onClick={this.nextStep}
                    >
                      <i className="far fa-file-alt fa-5x active-color"></i>
                      <h5 className="card-title mt-4 mb-4 active-color">
                        From Template
                      </h5>
                      <p className="card-text text-muted px-5 tiny-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div
                      className="card-body text-center"
                      onClick={this.nextStep}
                    >
                      <i className="far fa-edit fa-5x active-color"></i>
                      <h5 className="card-title mt-4 mb-4 active-color">
                        From Scratch
                      </h5>
                      <p className="card-text text-muted px-5 tiny-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.gb === 2 && (
              <div className="modal-body campaign-modal px-4 pb-4">
                <h3 className="text-center mb-4 border-bottom pb-4">
                  Choose a Template
                </h3>

                <div className="row col-sm-4 border-right shadow-temp">
                  <button
                    type="button"
                    className="btn shadow my-1 w-100 text-left"
                    data-toggle="button"
                    aria-pressed="false"
                    onClick={this.nextStep}
                  >
                    template #
                  </button>
                  <button
                    type="button"
                    className="btn shadow my-1 w-100 text-left"
                    data-toggle="button"
                    aria-pressed="false"
                    onClick={this.nextStep}
                  >
                    template #
                  </button>
                  <button
                    type="button"
                    className="btn shadow my-1 w-100 text-left"
                    data-toggle="button"
                    aria-pressed="false"
                    onClick={this.nextStep}
                  >
                    template #
                  </button>
                  <button
                    type="button"
                    className="btn shadow my-1 w-100 text-left"
                    data-toggle="button"
                    aria-pressed="false"
                    onClick={this.nextStep}
                  >
                    template #
                  </button>
                  <button
                    type="button"
                    className="btn shadow my-1 w-100 text-left"
                    data-toggle="button"
                    aria-pressed="false"
                    onClick={this.nextStep}
                  >
                    template #
                  </button>
                  <button
                    type="button"
                    className="btn shadow my-1 w-100 text-left"
                    data-toggle="button"
                    aria-pressed="false"
                    onClick={this.nextStep}
                  >
                    template #
                  </button>
                  <button
                    type="button"
                    className="btn shadow my-1 w-100 text-left"
                    data-toggle="button"
                    aria-pressed="false"
                    onClick={this.nextStep}
                  >
                    template #
                  </button>
                  <button
                    type="button"
                    className="btn shadow my-1 w-100 text-left"
                    data-toggle="button"
                    aria-pressed="false"
                    onClick={this.nextStep}
                  >
                    template #
                  </button>
                </div>
              </div>
            )}

            {this.state.gb === 3 && (
              <div className="modal-body campaign-modal">
                <h3 className="text-center mb-4 pb-4">Import People</h3>

                <div className="import-grid">
                  <div className="">Choose File</div>
                  <div className="">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                  <div className="">Map Attributes</div>
                  <div className="">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                  <div className="">Review and Import</div>
                </div>
                <div className="my-5">
                  <h4 className="text-center text-muted">Upload a .csv file</h4>
                  <p className="tiny-text text-muted text-center">
                    please upload a Prospects CSV file
                  </p>
                  <label className="input-btn-label">
                    <input
                      type="file"
                      name="csv-input"
                      className="file-input-btn d-none"
                    />
                    + Select a .csv file
                  </label>
                </div>
                <div className="d-flex flex-row-reverse">
                  <button
                    className="import-cont-btn my-4 mr-4"
                    onClick={this.nextStep}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {this.state.gb === 4 && (
              <div className="modal-body campaign-modal">
                <h3 className="text-center pb-2">Add Prospects</h3>

                <div className="my-3 border-top">
                  <div className="mt-4 px-5">
                    <div className="form-row">
                      <div className="col-sm-6 px-2 mb-3">
                        <label>First Name</label>
                        <input type="text" className="form-control pr-1" />
                      </div>
                      <div className="col-sm-6 px-2 mb-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control pl-1" />
                      </div>

                      <div className="col-sm-6 px-2 mb-3">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control pr-1"
                          required
                        />
                      </div>
                      <div className="col-sm-6 px-2 mb-3">
                        <label>Phone</label>
                        <span className="d-flex">
                          <ReactFlagsSelect
                            defaultCountry="US"
                            showSelectedLabel={false}
                            className="flag-dd p-0"
                          />
                          <input
                            type="text"
                            className="form-control pl-1 form-mobile-input"
                          />
                        </span>
                      </div>

                      <div className="col-sm-6 px-2 mb-3">
                        <label>First Name</label>
                        <input type="text" className="form-control pr-1" />
                      </div>
                      <div className="col-sm-6 px-2 mb-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control pl-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row-reverse">
                  <button
                    className="import-cont-btn my-4 mr-4"
                    onClick={this.nextStep}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
