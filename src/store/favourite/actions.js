import { DECREASE_NUMBER, INCREASE_NUMBER, SET_NUMBER } from "./constants";

export const increaseFavourite = () => ({ type: INCREASE_NUMBER });
export const decreaseFavourite = () => ({ type: DECREASE_NUMBER });
export const setFavourite = favourite => ({
  type: SET_NUMBER,
  payload: { favourite },
});
