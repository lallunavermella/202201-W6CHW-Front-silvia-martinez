import { combineReducers } from "redux";
import robotsReducer from "./robotsReducers";

const rootReducer = combineReducers({
  robots: robotsReducer,
});

export default rootReducer;
