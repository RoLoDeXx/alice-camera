export default (step = 1, action) => {
  switch (action.type) {
    case "GET_STEP":
      return step;
    case "SET_STEP":
      return action.payload;
    default:
      return 1;
  }
};
