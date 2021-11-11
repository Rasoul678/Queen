import { Dispatch } from "redux";
import axios from "axios";
import { ActionType } from "../action-types";
import { Item } from "../../types";
import { Action, SetItemAction, SetModeAction, Mode } from "../actions";

export const setManipulationMode = (mode: Mode): SetModeAction => {
  return { type: ActionType.SET_MANIPULATION_MODE, payload: mode };
};

export const setManipulationItem = (item: Item): SetItemAction => {
  return { type: ActionType.SET_MANIPULATION_ITEM, payload: item };
};

export const addNewItem = (item: Item) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.post("/api/socials", item);
      dispatch({ type: ActionType.ADD_ITEM, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editItem = (item: Item) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.put(`/api/socials/${item.id}`, item);
      dispatch({ type: ActionType.EDIT_ITEM, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteItem = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await axios.delete(`/api/socials/${id}`);
      dispatch({ type: ActionType.DELETE_ITEM, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getItems = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get("/api/socials");
      dispatch({ type: ActionType.GET_ITEMS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};
