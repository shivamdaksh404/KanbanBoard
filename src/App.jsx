import React from "react";
import styles from "./App.module.css";
import Board from "./components/board/Board";

import { Routes, Route } from "react-router-dom";
import PopUp from "./components/popup/PopUp";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Home from './components/Home/Home'
export default function App() {
  return (
   <>
    <Routes>
      {/* <Route path="/" element={<Board />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/popup" element={<PopUp />} />
    </Routes>
   </> 
  );
}
