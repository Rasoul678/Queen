import { combineReducers } from "redux";
import manipulationReducer from "./manipulationReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
  manipulation: manipulationReducer,
  items: itemsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
