import React, { useEffect, useState } from "react";
import popup from "./PopUp.module.css";
import Comments from "./Comments";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  data,
  demo,
  descriptionState,
  // dummy,
  ListId,
  newTasknameState,
  taskIndex,
} from "../../atom/Atom";

export default function PopUp() {
  const [List, setList] = useRecoilState(data);
  const [taskname, settaskname] = useRecoilState(demo);
  const [tindex, settindex] = useRecoilState(taskIndex);
  const [listid, setlistid] = useRecoilState(ListId);
  const navigate = useNavigate();
  const [description, setDescription] = useRecoilState(descriptionState);
  const [newTaskname, setnewTaskname] = useRecoilState(newTasknameState);

  function handleChange(e) {
    setDescription(e.target.value);
  }

  function addDescription(id) {
    let newList = List.map((item) => {
      if (item.id === listid) {
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

  function handleName(e) {
    setnewTaskname(e.target.value);
  }
  function handleTaskname(id) {
    let newList = List.map((item) => {
      if (item.id === listid) {
        let newTasklist = item.list.map((obj, index) => {
          if (index === id) {
            return { ...obj, name: newTaskname };
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
    setnewTaskname("");
  }

  useEffect(() => {
    const ListObject = List.find((item) => item.id === listid);

    if (ListObject) {
      const TaskObject = ListObject.list[tindex];
      settaskname(TaskObject);
    }
  }, [List]);
  return (
    <>
      <div className={popup.mainDiv}>
        <div className={popup.title}>
          <h2 className={popup.head}>
            <span>📻</span> <span>{taskname.name} </span> <input onChange={handleName} />
          <Button onClick={() => handleTaskname(tindex)}>save</Button>
          </h2>
          <span onClick={() => navigate("/")}>❌</span>
        </div>
        <div>
          
        </div>
        <span className={popup.para}>in list To Do</span>
        <div className={popup.des}>
          <MenuIcon sx={{ marginRight: "1rem" }} /> <h4>Description</h4>
        </div>
        <div className={popup.inputDiv}>
          <p>{taskname.description}</p>
          <input
            className={popup.firstInputBox}
            placeholder="Add a more detailed description..."
            value={description}
            onChange={handleChange}
          />
          <Button onClick={() => addDescription(tindex)}>save</Button>
        </div>
        <div className={popup.des}>
          <ReceiptLongIcon sx={{ marginRight: "1rem" }} /> <h4>Activity</h4>
        </div>
        <span className={popup.username}>PR</span>
        <input
          className={popup.secondInputBox}
          placeholder="Write a comment..."
        />
        <br /> <br />
        <Comments />
      </div>
    </>
  );
}
