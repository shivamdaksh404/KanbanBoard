import { atom } from "recoil";

//Task list is getting added from this (ADDCARD.jsx)
export const tasks = atom({
  key: "tasks",
  default: [],
});

//Main CardData (mainList fro eg:-todo)
const storedLists = JSON.parse(localStorage.getItem("Lists"));
export const data = atom({
  key: "data",
  default: storedLists || [],
});

//card taskname (list tasks)
export const demo = atom({
  key: "demo",
  default: "",
});

//get particular list id (for eg:-todolist ,progress list) from card
export const ListId = atom({
  key: "ListId",
  default: null,
});

// set from card to know which task has been clicked
export const taskIndex = atom({
  key: "taskIndex",
  default: null,
});

//used to set description only in popup
export const dummy = atom({
  key: "dummy",
  default: "",
});
