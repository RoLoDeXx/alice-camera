import React, { Component } from "react";
import { connect } from "react-redux";
import { getPeopleList } from "../../actions";

export class PeopleList extends Component {
  componentDidMount() {
    this.props.getPeopleList();
  }

  generateList = () => {
    return this.props.mails.map((mail) => (
      <div className="form-group border-bottom mt-3 d-flex justify-content-between pt-1 pb-2">
        <span className="d-flex align-items-baseline container-fluid w-75">
          <input type="checkbox" className="ml-1" />
          <p className="ml-3 mail-name">{mail.name}</p>
          <p className="ml-5 text-muted">{mail.email}</p>
        </span>
        <span className="d-flex justify-content-around w-25 text-muted">
          <i className="fas fa-bullhorn"></i>
          <i className="fas fa-envelope-open-text"></i>
          <i className="far fa-eye ml-5"></i>
          <i className="fas fa-pencil-alt"></i>
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="form-group px-4 d-flex align-items-center my-3 justify-content-between">
            <span className="d-flex align-items-center">
              <input type="checkbox" className="form-check-input" value="" />
              <button
                className="form-control w-25 ml-3"
                id="usr"
                data-toggle="modal"
                data-target="#people-modal"
              >
                Filters
              </button>
              <input
                type="text"
                className="form-control w-50 ml-3"
                id="usr"
                placeholder="Search"
              />
            </span>
            <span className="d-flex align-items-center">
              <span className="text-muted tiny-text">
                {`1-${this.props.mails.length} of ${this.props.mails.length}`}
              </span>
              <i className="ml-3 text-muted far fa-caret-square-left fa-2x"></i>
              <i className="text-muted far fa-caret-square-right fa-2x"></i>
              <button className="import-cont-btn ml-5">+ Add People</button>
            </span>
          </div>
        </div>
        <div className="filter-group"></div>
        <div className="mail-group border-top">
          <div className="item-types d-flex">
            <div className="item text-cente border-right active-item">
              <p>5</p>
              <p>All</p>
            </div>
            <div className="item text-center border-right">
              <p>4</p>
              <p>Oppurtunities</p>
            </div>
            <div className="item text-center border-right">
              <p>5</p>
              <p>Blacklist</p>
            </div>
          </div>
        </div>
        <div className="list-items border-top bg-darker">
          {this.generateList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { mails: state.peopleList };
};

export default connect(mapStateToProps, { getPeopleList })(PeopleList);
