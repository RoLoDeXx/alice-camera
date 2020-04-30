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
      oppurtuniy: true,
      blacklisted: true,
    },
    {
      name: "Sam Valen",
      email: "svalen@abc.com",
      oppurtuniy: true,
      blacklisted: false,
    },
    {
      name: "Emmit Hudson",
      email: "emmit@abc.com",
      oppurtuniy: false,
      blacklisted: false,
    },
    {
      name: "Vaibhav Bansal",
      email: "Vaibhavbn@abc.com",
      oppurtuniy: true,
      blacklisted: false,
    },
    {
      name: "Emiliy Stake",
      email: "emstake@abc.com",
      oppurtuniy: true,
      blacklisted: false,
    },
  ];
  return {
    type: "GET_PEOPLE",
    payload: people,
  };
};
