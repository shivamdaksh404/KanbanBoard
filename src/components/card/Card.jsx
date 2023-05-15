import React, { useEffect, useState } from "react";

import style from "./Card.module.css";
import AddCard from "./AddCard";
// import { tasks } from "../../atom/Atom";
// import { useRecoilValue } from "recoil";
import { IconButton } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";

import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { data, demo, dummy, indexrecoil, taskIndex } from "../../atom/Atom";
// import PopUp from "../popup/PopUp";

export default function Card(props) {
  const List = useRecoilValue(data);
  const [name, setname] = useRecoilState(demo);
  const [tindex, settindex] = useRecoilState(taskIndex);
  const [id, setid] = useRecoilState(indexrecoil);
  const navigate = useNavigate();
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [descript, setdescript] = useRecoilState(dummy);
  const handleShowEdit = (index) => {
    setIsEditVisible(!isEditVisible);
  };

  useEffect(() => {
    console.log(props.taskData);
  }, [List]);

  function taskClick(taskname, index) {
    setname(taskname);
    settindex(index);
    setid(props.index);
    navigate("/popup");
  }

  return (
    <div>
      <div className={style.addCard}>
        <div className={style.todoTasks}>
          {props.taskData.map((ele, index) => (
            <>
              <li
                key={index}
                onMouseMove={() => handleShowEdit(index)}
                className={style.taskLists}
                onClick={() => taskClick(ele, index)}
              >
                <p>{ele.name}</p>

                {isEditVisible && (
                  <IconButton>
                    <EditSharpIcon fontSize="small" />
                  </IconButton>
                )}
              </li>
            </>
          ))}
        </div>
        <AddCard index={props.index} />
      </div>
    </div>
  );
}
