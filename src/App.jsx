import React from "react";
import styles from "./App.module.css";
import Board from "./components/board/Board";

import { Routes, Route } from "react-router-dom";
import PopUp from "./components/popup/PopUp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Board />} />
      <Route path="/popup" element={<PopUp />} />
    </Routes>
  );
}