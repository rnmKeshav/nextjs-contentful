import { combineReducers } from "redux";
import semPageReducer from "./modules/sem/ducks/reducer";

const rootReducer = combineReducers({
  semPage: semPageReducer
});

export default rootReducer;