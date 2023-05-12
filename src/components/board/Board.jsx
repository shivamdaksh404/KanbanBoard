import React, { useEffect, useState } from "react";

import { Grid, IconButton,listClasses } from "@mui/material";
import styles from "./Board.module.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Button from "@mui/material/Button";
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';

import Card from "../card/Card";
import { useRecoilState } from "recoil";
import { data } from "../../atom/Atom";

export default function Board() {
  const [List, setList] = useRecoilState(data);

  const [isShow, setisShow] = useState(false);
  const [isShowBtn, setisShowBtn] = useState(true);
  const [inputvalue, setinputvalue] = useState("");
  // const [isShowCard, setIsShowCard] = useState(false);

  useEffect(() => {
    const storedList = localStorage.getItem("List");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
},[]);

  function handleChange(e) {
    setinputvalue(e.target.value);
  }

  function handleTaskAdd() {

    let newlist = { name: inputvalue, list: [] };

    setList((prev) => [...prev, newlist]);
    localStorage.setItem("List", JSON.stringify([...List, newlist]));
    setinputvalue("");
    console.log(List);
  }
  function handleClick() {
    setisShow(true);
    setisShowBtn(false);
  }
  function handleBtnDisplay() {
    setisShowBtn(true);
    setisShow(false);
  }

  return (
    <Grid container>
      {List.map((item, index) => (
        <Grid md={3}>
          <div className={styles.card} key={index}>
            <h2 className={styles.listHeading}>{item.name} <MoreHorizSharpIcon/> </h2>
            
            <Card index={index} taskData={item.list} />
          </div>
        </Grid>
      ))}
      <Grid md={3}>

        {isShowBtn && (
          <Button
            variant="outlined"
            onClick={handleClick}
            startIcon={<AddSharpIcon />}
            className={styles.btn}
            sx={{ 
              backgroundColor:"rgba(9,30,66,0.08)",
              border:'none',
              borderRadius:"10px",
              color:"#172b4d",
              width:"22rem",
              height:"2.5rem",
              marginLeft:"10px"
             }}
          >
            Add Another List
          </Button>
        )}
        {isShow && (
          <div className={styles.taskAdd}>
            <input type="text" id="input" onChange={handleChange} value={inputvalue} />
            <div className={styles.taskAddBtn}>
              <Button
                onClick={handleTaskAdd}
                variant="contained"
                size="small"
                startIcon={<AddSharpIcon />}
              >
                Add Card
              </Button>
              <IconButton onClick={handleBtnDisplay}>
                <CloseSharpIcon />
              </IconButton>
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
