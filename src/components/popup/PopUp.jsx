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
  ListId,
  newTasknameState,
  taskIndex,
} from "../../atom/Atom";

export default function PopUp() {
  const [List, setList] = useRecoilState(data);
  const [taskname, setTaskname] = useRecoilState(demo);
  const [tindex, setTindex] = useRecoilState(taskIndex);
  const [listid, setListid] = useRecoilState(ListId);
  const navigate = useNavigate();
  const [description, setDescription] = useRecoilState(descriptionState);
  const [newTaskname, setNewTaskname] = useRecoilState(newTasknameState);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

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
    setIsEditingDescription(false);
  }

  function handleName(e) {
    setNewTaskname(e.target.value);
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
    setNewTaskname("");
    setIsEditingName(false);
  }

  useEffect(() => {
    const ListObject = List.find((item) => item.id === listid);

    if (ListObject) {
      const TaskObject = ListObject.list[tindex];
      setTaskname(TaskObject);
    }
  }, [List, listid, setTaskname, tindex]);

  const handleTaskNameClick = () => {
    setIsEditingName(true);
  };

  const handleCancelName = () => {
    setIsEditingName(false);
    setNewTaskname("");
  };

  const handleDescriptionClick = () => {
    setIsEditingDescription(true);
  };

  const handleCancelDescription = () => {
    setIsEditingDescription(false);
    setDescription("");
  };

  return (
    <>
      <div className={popup.mainDiv}>
        <div className={popup.title}>
          {isEditingName ? (
            <>
              <h2 className={popup.head}>
                <span className={popup.radio}>📻</span>
                <input
                  value={newTaskname}
                  onChange={handleName}
                  className={popup.tasknameInput}
                  
                />
                <Button onClick={() => handleTaskname(tindex)}>Save</Button>
                <Button onClick={handleCancelName}>Cancel</Button>
              </h2>
            </>
          ) : (
            <>
              <h2 className={popup.head} onClick={handleTaskNameClick}>
                <span className={popup.radio}>📻</span>
                <span>{taskname.name}</span>
                <Button onClick={() => setIsEditingName(true)}>Edit</Button>
              </h2>
            </>
          )}
          <span onClick={() => navigate("/")}>❌</span>
        </div>
        <div> </div>
        <span className={popup.para}>in list To Do</span>
        <div className={popup.des}>
          <MenuIcon sx={{ marginRight: "1rem" }} /> <h4>Description</h4>
        </div>
        <div className={popup.inputDiv}>
          {isEditingDescription ? (
            <>
              <input
                className={popup.firstInputBox}
                placeholder="Add a more detailed description..."
                value={description}
                onChange={handleChange}
                
              />
              <Button onClick={() => addDescription(tindex)}>Save</Button>
              <Button onClick={handleCancelDescription}>Cancel</Button>
            </>
          ) : (
            <>
              <span style={{ display: "flex" }}>
                <p>{taskname.description}</p>
                <Button onClick={handleDescriptionClick}>Edit</Button>{" "}
              </span>
            </>
          )}
        </div>
        <div className={popup.activity}>
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
