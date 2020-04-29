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

export const nextStep = (num) => {
  return {
    type: "NEXT_STEP",
    payload: num,
  };
};

export const prevStep = (num) => {
  return {
    type: "PREV_STEP",
    payload: num,
  };
};
