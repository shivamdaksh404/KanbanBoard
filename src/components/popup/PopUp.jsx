import React, { useState } from "react";
import popup from "./PopUp.module.css";
// import { useRecoilState } from "recoil";
// import { toggleState } from "../../atom/Atom";

import MenuIcon from "@mui/icons-material/Menu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import { useNavigate } from "react-router-dom";

export default function PopUp() {
  // const [toggle, setToggle] = useRecoilState(toggleState);
  const navigate = useNavigate();

  return (
    <>
      <div className={popup.mainDiv}>
        <div className={popup.title}>
          <h2 className={popup.head}>📻 Cook Food</h2>
          <span onClick={() => navigate('/')}>❌</span>
        </div>
        <span className={popup.para}>in list To Do</span>
        <div className={popup.des}>
          <MenuIcon sx={{ marginRight: "1rem" }} /> <h4>Description</h4>
        </div>
        <input
          className={popup.firstInputBox}
          placeholder="Add a more detailed description..."
        />
        <div className={popup.des}>
          <ReceiptLongIcon sx={{ marginRight: "1rem" }} /> <h4>Activity</h4>
        </div>
        <span className={popup.username}>PR</span>
        <input
          className={popup.secondInputBox}
          placeholder="Write a comment..."
        />
        <br /> <br />
        <span className={popup.username}>PR</span>
        <span className={popup.comments}>PR added this card to To Do</span>
        <p className={popup.commentsTime}>a minute ago</p>
      </div>
    </>
  );
}
