import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  count: 0,
};
const reducer = (state = initialState, action) => {
  // console.log("action:", action);
  // console.log("state:", state);
  switch (action.type) {
    case "INCREAMENT":
      return {
        count: state.count + 1,
      };
    case "DECREAMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const combineReducer = combineReducers({
  counter: reducer,
});
export const store = createStore(combineReducer, composeWithDevTools());
