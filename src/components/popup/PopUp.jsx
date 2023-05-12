import React from "react";
import popup from "./PopUp.module.css";
import { useRecoilState } from "recoil";
import { toggleState } from "../../atom/Atom";

import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import { useNavigate } from "react-router-dom";
import InputBox from "./InputBox";
import Comments from "./Comments";

export default function PopUp() {
  const [toggle, setToggle] = useRecoilState(toggleState);
  const navigate = useNavigate();

  return (
    <>
      <div className={popup.mainDiv}>
        <div className={popup.title}>
          <h2 className={popup.head}>
            <span>📻</span> <span contentEditable> Cook Food </span>
          </h2>
          <span onClick={() => navigate("/")}>❌</span>
        </div>
        <span className={popup.para}>
          in list <span contentEditable> To Do </span>
        </span>
        <div className={popup.des}>
          <MenuIcon sx={{ marginRight: "1rem" }} /> <h4>Description</h4>
        </div>
        {!toggle ? (
          <p className={popup.paraTwo} onClick={() => setToggle(true)}>
            Add a more detailed description...
          </p>
        ) : (
          <InputBox />
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
