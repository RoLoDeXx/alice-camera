export const getStep = () => {
  return {
    type: "GET_STEP",
    payload: null,
  };
};

export const setStep = (num) => {
  return {
    type: "SET_STEP",
    payload: num,
  };
};
