import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Board from "./components/board/Board";
import PopUp from "./components/popup/PopUp";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/popup/:listId/:taskId" element={<PopUp />} />
      </Routes>
    </>
  );
}