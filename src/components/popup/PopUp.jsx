import React, { useState } from "react";
import popup from "./PopUp.module.css";

import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useNavigate } from "react-router-dom";
import InputBox from "./InputBox";
import Comments from "./Comments";

export default function PopUp() {
  const navigate = useNavigate();

  // New state to track whether to show saved text or input box
  const [showText, setShowText] = useState(false);

  // New state to store the saved text
  const [savedText, setSavedText] = useState("");

  const handleSaveText = (text) => {
    setSavedText(text);
    setShowText(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
      
    }
  };

  const storedLists = JSON.parse(localStorage.getItem("List"));
  console.log(storedLists)

  
  return (
    <>
      <div className={popup.mainDiv}>
        <div className={popup.title}>
          <h2 className={popup.head}>
            <span>📻</span>{" "}
            <span
              contentEditable
              suppressContentEditableWarning
              onKeyDown={handleKeyDown}
            >
              {" "}
              Cook Food{" "}
              
            </span>
          </h2>
          <span onClick={() => navigate("/")}>❌</span>
        </div>
        <span className={popup.para}>
          in list{" "}
          <span
            contentEditable
            suppressContentEditableWarning
            onKeyDown={handleKeyDown}
          >
            {" "}
            To Do{" "}
          </span>
        </span>
        <div className={popup.des}>
          <MenuIcon sx={{ marginRight: "1rem" }} /> <h4>Description</h4>
        </div>
        {!showText ? (
          // Render input box if showText is false
          <p className={popup.paraTwo} onClick={() => setShowText(true)}>
            Add a more detailed description...
          </p>
        ) : (
          <InputBox onSaveText={handleSaveText} /> // Pass onSaveText prop to InputBox component
        )}
        <div className={popup.des}>
          <ReceiptLongIcon sx={{ marginRight: "1rem" }} /> <h4>Activity</h4>
        </div>
        <span className={popup.username}>PR</span>
        <input
          className={popup.secondInputBox}
          placeholder="Write a comment..."
        />
        <Button>Save</Button>
        <br /> <br />
        <Comments />
      </div>
    </>
  );
}