import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import AddCard from "./AddCard";
import { IconButton } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { data, demo, ListId, taskIndex } from "../../atom/Atom";

export default function Card(props) {
  const [List, setList] = useRecoilState(data);
  const [name, setname] = useRecoilState(demo);
  const [tindex, settindex] = useRecoilState(taskIndex);
  const [id, setid] = useRecoilState(ListId);
  const navigate = useNavigate();

  const [isEditVisible, setIsEditVisible] = useState("");
  useEffect(() => {
    const storedList = localStorage.getItem("List");
    if (storedList) {
      setList(JSON.parse(storedList));
}
},[]);
  

  function taskClick(taskname, index) {
    setname(taskname);
    settindex(index);
    setid(props.index);
    navigate("/popup");
  }
  const handleShowEdit = (Index) => {
    setIsEditVisible(Index);
  };
  const handleHideEdit =(index)=>{
    setIsEditVisible(-1)
  }
  
  const handleDeleteCard = (Index) => {
    // const filteredList = (props.taskData).filter((_,index) => index !== ID);
  //  setList(filteredList)
  // console.log(ID);
  let data = [...List]
  data = data.filter((_,index)=> index!==Index)
  // setList(data)
  console.log(List)
  console.log(data)
  console.log("form delelt",props.taskData[Index])
  };

  // function handleShowEdit(index) {
  //   setHoveredIndex(index);
  // }

  return (
    <div>
      <div className={style.addCard}>
        <div className={style.todoTasks}>
          {props.taskData.map((ele, index) => (
            <>
              <li
                key={index}
                onMouseOver={() => handleShowEdit(index)}
                onMouseOut={() => handleHideEdit(index)}
                className={style.taskLists}
                onClick={() => taskClick(ele, index)}
              >
                <p>{ele.name}</p>

                {isEditVisible === index ? (
                  <div className={style.icon_btn}>
                    <IconButton
                      sx={{
                        "&:hover": {
                          borderRadius: "5px",
                          backgroundColor: "whitesmoke",
                        },
                      }}
                      aria-label="edit"
                    >
                      <EditSharpIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                      onClick={() => handleDeleteCard(index)}
                      sx={{
                        "&:hover": {
                          borderRadius: "5px",
                          backgroundColor: "whitesmoke",
                        },
                      }}
                      color="error"
                      aria-label="edit"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                ) : (
                  ""
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
