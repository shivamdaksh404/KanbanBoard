import { atom } from "recoil";

export const tasks = atom({

  key: "tasks",
  default: [],
});

const storedLists = JSON.parse(localStorage.getItem("Lists"));

export const data = atom({
  key: "data",
  default: storedLists || [],
});

export const toggleState = atom({
  key: "toggleState",
  default: false,
});

