import { DECREASE_NUMBER, INCREASE_NUMBER, SET_NUMBER } from "./constants";

const favouriteReducer = (state = { favourite: 1 }, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREASE_NUMBER:
      return { favourite: state.favourite + state.favourite };

    case DECREASE_NUMBER:
      return { favourite: state.favourite / 2 };

    case SET_NUMBER:
      return { favourite: payload.favourite };
    default:
      return state;
  }
};

export default favouriteReducer;
