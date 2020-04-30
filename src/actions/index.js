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

export const getPeopleList = () => {
  let people = [
    {
      name: "John Doe",
      email: "john@abc.com",
    },
    {
      name: "Sam Valen",
      email: "svalen@abc.com",
    },
    {
      name: "Emmit Hudson",
      email: "emmit@abc.com",
    },
    {
      name: "Vaibhav Bansal",
      email: "Vaibhavbn@abc.com",
    },
    {
      name: "Emiliy Stake",
      email: "emstake@abc.com",
    },
  ];
  return {
    type: "GET_PEOPLE",
    payload: people,
  };
};
