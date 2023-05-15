import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
// import { PopupState } from "material-ui-popup-state";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Grid, IconButton, listClasses } from "@mui/material";
import styles from "./Board.module.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
// import Button from "@mui/material/Button";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

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
  }, []);

  function handleChange(e) {
    setinputvalue(e.target.value);
  }

  function handleTaskAdd() {
    if(inputvalue.length===0){
      input.focus()
    } else if(inputvalue.length>0){

    
    let newlist = { name: inputvalue, list: [] };
    setList((prev) => [...prev, newlist]);
    localStorage.setItem("List", JSON.stringify([...List, newlist]));
    setinputvalue("");
    console.log(List);
    }
  }
  function handleClick() {
    setisShow(true);
    setisShowBtn(false);
  }
  function handleBtnDisplay() {
    setisShowBtn(true);
    setisShow(false);
  }
  function handleListdelete(id) {
    let FilteredList = List.filter((_, index) => id !== index);
    localStorage.setItem("List", JSON.stringify(FilteredList));
    setList(FilteredList);
  }
  return (
    <Grid container sx={{
marginTop:"1rem",
marginLeft: "1rem"
    }}>
      {List.map((item, index) => (
        <Grid md={3}>
          <div className={styles.card} key={index}>
            <h2 className={styles.listHeading}>
              {item.name}
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <IconButton variant="contained" {...bindTrigger(popupState)}>
                      <MoreHorizSharpIcon />
                    </IconButton>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Typography sx={{ p: 2 }}>
                        <button onClick={() => handleListdelete(index)}>
                          Delete
                        </button>
                      </Typography>
                    </Popover>
                  </div>
                )}
              </PopupState>
            </h2>
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
              border: "none",
              backgroundColor: "#e7e9ea4a",
              borderRadius: "10px",
              color: "white",
              width: "22rem",
              height: "2.5rem",
              marginLeft: "10px",
              "&:hover" :{
              backgroundColor: "#ffffff26",
              border: "none",

              }
            }}
          >
            Add Another List
          </Button>
        )}
        {isShow && (
          <div className={styles.taskAdd}>
            <input
              type="text"
              id="input"
              onChange={handleChange}
              value={inputvalue}
            />
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