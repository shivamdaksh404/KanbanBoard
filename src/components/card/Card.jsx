import React, { useState } from "react";

import style from "./Card.module.css";
import AddCard from "./AddCard";
// import { tasks } from "../../atom/Atom";
// import { useRecoilValue } from "recoil";
import { IconButton } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from '@mui/icons-material/Delete';

import { useNavigate } from "react-router-dom";

export default function Card(props) {
//   const taskData = useRecoilValue(tasks);
  const navigate = useNavigate();

  const [isEditVisible, setIsEditVisible] = useState(false);

  const handleShowEdit = () => {
    setIsEditVisible(true);
  };

  const handleHideEdit = ()=>{
    setIsEditVisible(false);
  }
  console.log(isEditVisible);

  return (
    <div>
      <div className={style.addCard}>
        <div className={style.todoTasks}>
          {props.taskData.map((ele, index) => (
            <>
              <li
                key={index}
                onMouseOver={handleShowEdit}
                onMouseOut={handleHideEdit}
                className={style.taskLists}
                onClick={() => navigate("/popup")}
              >
                <p>{ele}</p>

                {isEditVisible === true ? 
                <>

                  <IconButton
                 aria-label="edit"
                  >
                    <EditSharpIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="error"
                 aria-label="edit"
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>

                </>
                 : ""}
              </li>

            </>
          ))}
        </div>
        <AddCard index={props.index} />
      </div>
    </div>
  );
}
