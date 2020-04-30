import { combineReducers } from "redux";
import stepsReducer from "./stepsReducer";
import peopleReducer from "./peopleReducer";
export default combineReducers({
  step: stepsReducer,
  peopleList: peopleReducer,
});
