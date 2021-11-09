import produce from "immer";
import { actionType } from "../action-types";

const initialState = {
  items: [],
};

const itemsReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM:
      state.items.push({ ...action.payload, id: randomId() });
      return state;

    case actionType.EDIT_ITEM:
      const { id } = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          return action.payload;
        }
        return item;
      });
      return state;

    case actionType.DELETE_ITEM:
      state.items =  state.items.filter((item) => item.id !== action.payload);
      return state;

    default:
      return state;
  }
});

const randomId = () => {
  return Math.random().toString(36).substring(2, 5);
};

export default itemsReducer;
