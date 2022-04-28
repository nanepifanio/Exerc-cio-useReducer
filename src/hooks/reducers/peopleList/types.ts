export type reducerState = {
  id: string;
  name: string;
};

export type reducerAction = {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  };
};

export type ActionsFuncs = (
  st: reducerState[],
  act?: reducerAction
) => reducerState[];
