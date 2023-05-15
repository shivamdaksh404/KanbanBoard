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
// export const data = atom({
//   key: "data",
//   default: [],
// });

export const demo = atom({
  key: "demo",
  default: "",
});
export const indexrecoil = atom({
  key: "indexrecoil",
  default: null,
});

export const taskIndex = atom({
  key: "taskIndex",
  default: null,
});

export const dummy = atom({
  key: "dummy",
  default: "",
});
