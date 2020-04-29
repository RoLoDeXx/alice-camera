export default (step = 1, action) => {
  switch (action.type) {
    case "GET_STEP":
      return step;
    case "SET_STEP":
      return action.payload;
    case "NEXT_STEP":
      return action.payload + 1;
    case "PREV_STEP":
      return action.payload - 1;
    default:
      return 1;
  }
};
