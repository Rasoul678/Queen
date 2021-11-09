import { Dispatch } from "redux";
import { actionType } from "../action-types";

export const setManipulationMode = (mode = "") => {
  return { type: actionType.SET_MANIPULATION_MODE, payload: mode };
};

export const setManipulationItem = (
  item = { type: "", username: "", link: "" }
) => {
  return { type: actionType.SET_MANIPULATION_ITEM, payload: item };
};

export const addNewItem = (item) => {
  return { type: actionType.ADD_ITEM, payload: item };
};

export const editItem = (item) => {
  return { type: actionType.EDIT_ITEM, payload: item };
};

export const deleteItem = (id) => {
  return { type: actionType.DELETE_ITEM, payload: id };
};
