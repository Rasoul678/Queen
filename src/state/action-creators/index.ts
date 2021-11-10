// import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Item } from "../../types";
import {
  // Action,
  AddItemAction,
  DeleteItemAction,
  EditItemAction,
  SetItemAction,
  SetModeAction,
  Mode,
} from "../actions";

export const setManipulationMode = (mode: Mode): SetModeAction => {
  return { type: ActionType.SET_MANIPULATION_MODE, payload: mode };
};

export const setManipulationItem = (item: Item): SetItemAction => {
  return { type: ActionType.SET_MANIPULATION_ITEM, payload: item };
};

export const addNewItem = (item: Item): AddItemAction => {
  return { type: ActionType.ADD_ITEM, payload: item };
};

export const editItem = (item: Item): EditItemAction => {
  return { type: ActionType.EDIT_ITEM, payload: item };
};

export const deleteItem = (id: string): DeleteItemAction => {
  return { type: ActionType.DELETE_ITEM, payload: id };
};
