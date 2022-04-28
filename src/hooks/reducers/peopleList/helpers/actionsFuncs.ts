import { ActionsFuncs } from "../types";
import { v4 as uuidv4 } from "uuid";

export const add: ActionsFuncs = (st, act) => {
  if (act?.payload?.name) {
    st.push({
      id: uuidv4(),
      name: act.payload.name,
    });
  }
  return st;
};

export const del: ActionsFuncs = (st, act) => {
  if (act?.payload?.id) {
    st.splice(
      st.findIndex((person) => person.id === act.payload?.id),
      1
    );
  }
  return st;
};

export const ordenate: ActionsFuncs = (st) => {
  return st.sort((cur, old) => (cur.name > old.name ? 1 : -1));
};
