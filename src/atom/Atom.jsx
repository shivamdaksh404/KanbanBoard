import { atom } from "recoil";

export const tasks = atom({
    key: "tasks",
    default: [],
})