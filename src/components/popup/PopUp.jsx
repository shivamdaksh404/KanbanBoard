import React, { useEffect, useState } from "react";
import popup from "./PopUp.module.css";
// import { useRecoilState } from "recoil";
// import { toggleState } from "../../atom/Atom";

import MenuIcon from "@mui/icons-material/Menu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { data, demo, dummy, indexrecoil, taskIndex } from "../../atom/Atom";

export default function PopUp() {
  const [List, setList] = useRecoilState(data);
  const taskname = useRecoilValue(demo);
  const tindex = useRecoilValue(taskIndex);
  const navigate = useNavigate();
  const indexRecoil = useRecoilValue(indexrecoil);
  const [description, setDescription] = useRecoilState(dummy);

  function handleChange(e) {
    setDescription(e.target.value);
    // addDescription(tindex);
  }

  useEffect(() => {
    console.log(taskname);
  }, [description]);

  function addDescription(id) {
    let newList = List.map((item) => {
      if (item.id === indexRecoil) {
        let newTasklist = item.list.map((obj, index) => {
          if (index === id) {
            return { ...obj, description: description };
          } else {
            return obj;
          }
        });
        return { ...item, list: newTasklist };
      } else {
        return item;
      }
    });
    setList(newList);
    localStorage.setItem("List", JSON.stringify(newList));
    setDescription("");
  }

  return (
    <>
      <div className={popup.mainDiv}>
        <div className={popup.title}>
          <h2 className={popup.head}>{taskname.name}</h2>
          <span onClick={() => navigate("/")}>❌</span>
        </div>
        <span className={popup.para}>in list To Do</span>
        <div className={popup.des}>
          <MenuIcon sx={{ marginRight: "1rem" }} /> <h4>Description</h4>
        </div>
        <p>{taskname.description}</p>
        <input
          className={popup.firstInputBox}
          placeholder="Add a more detailed description..."
          value={description}
          onChange={handleChange}
          // onBlur={() => adddescript(tindex)}
        />
        <button onClick={() => addDescription(tindex)}>save</button>
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
