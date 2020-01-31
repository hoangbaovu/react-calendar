const initialState = {
  num: 0
};

const counterRecuders = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        num: state.num + action.step
      };
    case "DECREMENT":
      return {
        ...state,
        num: state.num - action.step
      };
    default:
      return state;
  }
}

export default counterRecuders;