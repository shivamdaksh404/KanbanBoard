import React, { useState } from "react";
import inputBox from "./InputBox.module.css";
import { Button } from "@mui/material";

export default function InputBox({ onSaveText }) {
  const [savedText, setSavedText] = useState(""); 
  const [draftText, setDraftText] = useState(""); 
  const [isEditing, setIsEditing] = useState(true); 
  
  const handleSave = () => {
    if (draftText.trim() !== "") {
      setIsEditing(false); 
      onSaveText(draftText.trim()); 
      setSavedText(draftText.trim()); 
    }
  };

  const handleClick = () => {
    if (!isEditing) {
      setIsEditing(true); 
      setDraftText(savedText); 
    }
  };

  const handleInputChange = (event) => {
    setDraftText(event.target.value); 
  };

  return (
    <div className={inputBox.mainDiv}>
      {isEditing ? ( 
        <form>
          <input
            type="text"
            className={inputBox.inputTag}
            value={draftText}
            onChange={handleInputChange}
          />
          <div>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        </form>
      ) : (
        
        <div className={inputBox.savedText} onClick={handleClick}>
          {savedText.trim() !== "" ? savedText : "Add a more detailed description..."}
        </div>
      )}
    </div>
  );
}