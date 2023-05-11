import { Button, Icon, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRecoilState } from "recoil";
import { tasks } from "../../atom/Atom";
import style from "./AddCard.module.css";

export default function AddCard() {
  const [isTaskAdd, setIsTaskAdd] = useState(true);
  const [textarea, setTextarea] = useState("");
  const [taskData, setTaskData] = useRecoilState(tasks);

  const handleShowInput = () => {
    setIsTaskAdd(false);
  };

  const handleHideInput = () => {
    setIsTaskAdd(true);
    setTextarea("");
  };

  const handleAddTasks = () => {
    if (textarea.length == 0) {
      input.focus();
    } else if (textarea.length > 0) {
      setTaskData([...taskData, textarea]);
      setTextarea("");
    }
  };

  return (
    <div className={style.mainDiv}>
      {isTaskAdd ? (
        <IconButton
          className={style.IconDiv}
          sx={{
            // border: "1px solid red",
            borderRadius: "10px",
            height: "2rem",
            display:"flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            gap:"10px",
            width: "100%",
            padding:"1.2rem 0rem 1.2rem 1rem",

          }}
          onClick={handleShowInput}
        >
          <AddIcon className={style.icon} fontSize="medium" />
          <p className={style.cardText}>Add a Card</p>
        </IconButton>
      ) : (
        <div className={style.secondMainDiv}>
          <textarea
          placeholder="Enter a title for this card..."
            id="input"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
          <div className={style.addTaskDiv}>
            <div className={style.Btn_icon}>
              <Button onClick={handleAddTasks} size="small" variant="contained">
                Add Card
              </Button>
              <IconButton className={style.icon_Btn} onClick={handleHideInput}>
                <CloseSharpIcon className={style.icon} fontSize="medium" />
              </IconButton>
            </div>
            <IconButton className={style.icon_Btn}>
              <MoreHorizIcon className={style.icon} fontSize="small" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
}
