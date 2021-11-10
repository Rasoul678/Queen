import { ActionType } from "../action-types";
import { Item } from "../../types";

export type Mode = "edit" | "new" | null;

export interface SetModeAction {
  type: ActionType.SET_MANIPULATION_MODE;
  payload: Mode;
}

export interface SetItemAction {
  type: ActionType.SET_MANIPULATION_ITEM;
  payload: Item;
}

export interface AddItemAction {
  type: ActionType.ADD_ITEM;
  payload: Item;
}

export interface EditItemAction {
  type: ActionType.EDIT_ITEM;
  payload: Item;
}

export interface DeleteItemAction {
  type: ActionType.DELETE_ITEM;
  payload: string;
}

export type Action =
  | SetModeAction
  | SetItemAction
  | AddItemAction
  | EditItemAction
  | DeleteItemAction;
