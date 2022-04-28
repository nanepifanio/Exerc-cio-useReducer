import { useReducer } from "react";

type reducerState = {
  count: number;
};

type reducerAction = {
  type: string;
};

const initialState: reducerState = { count: 0 };

const reducer = (state: reducerState, action: reducerAction) => {
  switch (action.type) {
    case "ADD":
      // retornando direto uma copia de state e já fazendo a ação de alterar o count
      return { ...state, count: state.count + 1 };

    // alterando somente o valor de count
    // state.count++
    // break;
    case "DEL":
      if (state.count) {
        return { ...state, count: state.count - 1 };
      }
    default:
      return initialState;
  }
  // Caso altere somente o valor de count
  // return state;
};

export const useContagem = () => {
  return useReducer(reducer, initialState);
};
