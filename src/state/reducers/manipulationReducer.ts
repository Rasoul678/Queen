import produce from "immer";
import { ActionType } from "../action-types";
import { Mode, Action } from "../actions";
import { Item } from "../../types";

interface ManipulationState {
  mode: Mode;
  item: Item;
}

const initialState: ManipulationState = {
  mode: null,
  item: {
    type: null,
    link: "",
    username: "",
  },
};

const manipulationReducer = (
  state: ManipulationState = initialState,
  action: Action
): ManipulationState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionType.SET_MANIPULATION_MODE:
        draft.mode = action.payload;
        break;

      case ActionType.SET_MANIPULATION_ITEM:
        draft.item = action.payload;
        break;

      default:
        break;
    }
  });

export default manipulationReducer;
