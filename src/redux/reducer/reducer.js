let initialState = {
  count: 0,
  img: "/images/normal.png",
  ani: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload.num,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 10,
      };
    default: {
      return { ...state };
    }
  }
}

export default reducer;
