import React from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Board from "./components/board/Board";
import PopUp from "./components/popup/PopUp";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/popup/:listId/:taskId" element={<PopUpWrapper />} />
      </Routes>
    </>
  );
}

function PopUpWrapper() {
  const { listId, taskId } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return <PopUp listId={listId} taskId={taskId} onGoBack={handleGoBack} />;
}
