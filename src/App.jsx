import React from "react";
import styles from "./App.module.css";
import Board from "./components/board/Board";
import { Grid } from "@mui/material";
import Todo from "./components/todo/Todo";

export default function App() {
  return (
    <div>
      <Board />
    </div>
  );
}
