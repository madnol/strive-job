import { createStore, combineReducers } from "redux";
import favouriteReducer from "./favourite/reducer";
import colorReducer from "./color/reducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  color: colorReducer,
});
const store = createStore(rootReducer);

export default store;
