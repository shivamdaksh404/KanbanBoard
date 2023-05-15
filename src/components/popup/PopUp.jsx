import React, { useState } from "react";
import popup from "./PopUp.module.css";

import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useNavigate, useParams } from "react-router-dom";
import InputBox from "./InputBox";
import Comments from "./Comments";

import { data } from "../../atom/Atom";
import { useRecoilState } from "recoil"; 

export default function PopUp() {
  const navigate = useNavigate();
  const { listId, taskId } = useParams();

  const [showText, setShowText] = useState(false);
  const [savedText, setSavedText] = useState("");

  const handleSaveText = (text) => {
    setSavedText(text);
    setShowText(true);
  };

  const [Lists, setLists] = useRecoilState(data); 
  const list = Lists.find((item) => item.id === listId);
  console.log(list);
  const task = list.list[taskId];
  return (
    <>
      <div className={popup.mainDiv}>
        <div className={popup.title}>
          <h2 className={popup.head}>
            <span>📻</span>{" "}
            <span>
              {task.name}
            </span>
          </h2>
          <span onClick={() => navigate("/")}>❌</span>
        </div>
        <span className={popup.para}>
          in list{" "}
          <span>
            {list.name}
          </span>
        </span>
        <div className={popup.des}>
          <MenuIcon sx={{ marginRight: "1rem" }} /> <h4>Description</h4>
        </div>
        {!showText ? (
          <p className={popup.paraTwo} onClick={() => setShowText(true)}>
            Add a more detailed description...
          </p>
        ) : (
          <InputBox onSaveText={handleSaveText} />
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
