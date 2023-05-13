import React, { useState } from "react";
import inputBox from "./InputBox.module.css";
import { Button } from "@mui/material";

export default function InputBox({ onSaveText }) {
  const [savedText, setSavedText] = useState(""); // New state to store the saved text
  const [draftText, setDraftText] = useState(""); // New state to store the draft text
  const [isEditing, setIsEditing] = useState(true); // New state to track edit mode
  
  const handleSave = () => {
    if (draftText.trim() !== "") {
      setIsEditing(false); // Disable edit mode after saving
      onSaveText(draftText.trim()); // Pass the trimmed draft text to the parent component
      setSavedText(draftText.trim()); // Update the saved text state with the draft text
    }
  };

  const handleClick = () => {
    if (!isEditing) {
      setIsEditing(true); // Enable edit mode if not editing
      setDraftText(savedText); // Set the draft text to the saved text
    }
  };

  const handleInputChange = (event) => {
    setDraftText(event.target.value); // Update the draft text state as the input value changes
  };

  return (
    <div className={inputBox.mainDiv}>
      {isEditing ? ( // Render input box if in edit mode
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
        // Render saved text or default paragraph if not in edit mode
        <div className={inputBox.savedText} onClick={handleClick}>
          {savedText.trim() !== "" ? savedText : "Add a more detailed description..."}
        </div>
      )}
    </div>
  );
}