import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "./components/board/Board";
import PopUp from "./components/popup/PopUp";

export default function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Board />} /> */}
        <Route path="/" element={<Board />} />
        <Route path="/popup/:listId/:taskId" element={<PopUp />} />
      </Routes>
    </>
  );
}
