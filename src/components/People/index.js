import React from "react";
import Modal from "./PeopleFilterModal";
import ActionBar from "../ActionBar";
import PeopleList from "./PeopleList";
export default function index() {
  return (
    <div className="h-100 bg-darker">
      <ActionBar title="People" show={false}></ActionBar>
      <div className="border-top bg-white">
        <PeopleList />
        <Modal></Modal>
      </div>
    </div>
  );
}
