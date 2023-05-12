import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import style from "./Card.module.css";
import AddCard from "./AddCard";
import { tasks } from "../../atom/Atom";
import { useRecoilValue } from "recoil";
import { IconButton } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { StyleRounded } from "@mui/icons-material";
import PopUp from "../popup/PopUp";

export default function Card() {
  const taskData = useRecoilValue(tasks);
  const [toggle, setToggle] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);

  const handleShowEdit = (index) => {
    setIsEditVisible(!isEditVisible);
  };
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div>
      <div className={style.addCard}>
        <div className={style.todoTasks}>
          {taskData.map((ele, index) => (
            <>
              <li
                key={index}
                onMouseMove={() => handleShowEdit(index)}
                className={style.taskLists}
              >
                <p onClick={handleToggle}>{ele}</p>

                {isEditVisible && (
                  <IconButton>
                    <EditSharpIcon fontSize="small" />
                  </IconButton>
                )}
              </li>
              {toggle && <PopUp />}
            </>
          ))}
        </div>
        <AddCard />
      </div>
    </div>
  );
}
