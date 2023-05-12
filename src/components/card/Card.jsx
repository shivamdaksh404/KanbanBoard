import React, { useState } from "react";

import style from "./Card.module.css";
import AddCard from "./AddCard";
// import { tasks } from "../../atom/Atom";
// import { useRecoilValue } from "recoil";
import { IconButton } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";


import { useNavigate } from "react-router-dom";

export default function Card(props) {
//   const taskData = useRecoilValue(tasks);
  const navigate = useNavigate();

  const [isEditVisible, setIsEditVisible] = useState(false);

  const handleShowEdit = (index) => {
    setIsEditVisible(!isEditVisible);
  };

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
                onClick={() => navigate("/popup")}
              >
                <p>{ele}</p>

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
