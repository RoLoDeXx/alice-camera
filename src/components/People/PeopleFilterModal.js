import React from "react";

export default function PeopleFilterModal() {
  return (
    <div
      className="modal fade"
      id="people-modal"
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
          <div className="modal-body campaign-modal px-5 mb-5">
            <h3 className="text-center mb-4">Filter</h3>
            <p className="text-tiny text-muted">Property</p>
            <div className="form-group d-flex align-items-center justify-content-between people-filter">
              <span>
                <input
                  type="date"
                  className="border-top-0 border-right-0 border-left-0"
                  name="added-on"
                />

                <input
                  type="date"
                  className="border-top-0 border-right-0 border-left-0 ml-2 "
                  name="less-than"
                />

                <input
                  type="text"
                  className="border-top-0 border-right-0 border-left-0 ml-2"
                  defaultValue={0}
                />
                <span>Days ago</span>
              </span>
              <i className="fas fa-trash-alt"></i>
            </div>
            <div className="my-4">
              <i className="fas fa-plus-circle"></i>
              <span className="text-tiny text-muted ml-2">Add Property</span>
            </div>
            <div className="d-flex mt-5 d-flex flex-row-reverse">
              <button className="import-cont-btn">Apply</button>
              <button className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
