import { atom } from "recoil";

const storedLists = JSON.parse(localStorage.getItem("List"));

export const storess = atom({
  key: "storess",
  default: storedLists || [],
});
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
export const descriptionState = atom({
  key: "descriptionState",
  default: "",
});

export const newTasknameState = atom({
  key: "newTasknameState",
  default: "",
});

export const srcState = atom({
  key: "srcState",
  default: "",
});

export const desState = atom({
  key: "desState",
  default: "",
});

export const srcDragIdState = atom({
  key: "srcDragIdState",
  default: "",
});

export const desDragIdState = atom({
  key: "desDragIdState",
  default: "",
});

export const timetag = atom({
  key: "timetag",
  default: "",
});
