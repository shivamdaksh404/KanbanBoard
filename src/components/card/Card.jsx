import React, { useState } from "react";
import style from "./Card.module.css";
import AddCard from "./AddCard";
import { IconButton } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { useNavigate } from "react-router-dom";
import PopUp from "../popup/PopUp"; 

export default function Card(props) {
  const navigate = useNavigate();
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 

  const handleShowEdit = () => {
    setIsEditVisible(!isEditVisible);
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className={style.addCard}>
        <div className={style.todoTasks}>
          {props.taskData.map((ele, index) => (
            <li
              key={index}
              onMouseMove={handleShowEdit}
              className={style.taskLists}
              onClick={handleOpenPopup} 
            >
              <p>{ele}</p>
              {isEditVisible && (
                <IconButton>
                  <EditSharpIcon fontSize="small" />
                </IconButton>
              )}
            </li>
          ))}
        </div>
        <AddCard index={props.index} />
      </div>
      {showPopup && <PopUp onClose={handleClosePopup} />} 
    </div>
  );
}
