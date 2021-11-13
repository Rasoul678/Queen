import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Item } from "../../types";

interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [],
};

const itemsReducer = (
  state: ItemsState = initialState,
  action: Action
): ItemsState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionType.ADD_ITEM:
        draft.items.push(action.payload);
        break;

      case ActionType.EDIT_ITEM:
        draft.items = draft.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        break;

      case ActionType.DELETE_ITEM:
        draft.items = draft.items.filter((item) => item.id !== action.payload);
        break;

      case ActionType.GET_ITEMS:
        draft.items = action.payload;
        break;

      default:
        break;
    }
  });


export default itemsReducer;
