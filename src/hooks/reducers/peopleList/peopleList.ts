import { useReducer } from "react";
import * as act from "./helpers/actionsFuncs";
import { reducerAction, reducerState } from "./types";

const initialState: reducerState[] = [];

const reducer = (state: reducerState[], action: reducerAction) => {
  const newState = [...state];
  switch (action.type) {
    case "ADD":
      return act.add(newState, action);
    case "DEL":
      return act.del(newState, action);
    default:
      return act.ordenate(newState);
  }
};

export const usePeopleList = () => {
  return useReducer(reducer, initialState);
};
