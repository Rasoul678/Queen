import produce from "immer";
import { actionType } from "../action-types";

const initialState = {
  mode: "",
  item: {
    type: "",
    link: "",
    username: "",
  },
};

const manipulationReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_MANIPULATION_MODE:
      state.mode = action.payload;
      return state;

    case actionType.SET_MANIPULATION_ITEM:
      state.item = action.payload;
      return state;

    default:
      return state;
  }
});

export default manipulationReducer;
