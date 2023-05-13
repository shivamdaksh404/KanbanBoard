import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import { v4 as uuidv4 } from "uuid";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Grid, IconButton } from "@mui/material";
import styles from "./Board.module.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

import Card from "../card/Card";
import { useRecoilState } from "recoil";
import { data } from "../../atom/Atom";

export default function Board() {
  const [list, setList] = useRecoilState(data);
  const [isShow, setIsShow] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedList = localStorage.getItem("List");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleTaskAdd() {
    let newlist = { name: inputValue, id: uuidv4(), list: [] };

    setList((prev) => [...prev, newlist]);
    localStorage.setItem("List", JSON.stringify([...list, newlist]));
    setInputValue("");
    console.log(list);
  }

  function handleClick() {
    setIsShow(true);
    setIsShowBtn(false);
  }

  function handleBtnDisplay() {
    setIsShowBtn(true);
    setIsShow(false);
  }

  function handleListDelete(id) {
    let filteredList = list.filter((_, index) => id !== index);
    localStorage.setItem("List", JSON.stringify(filteredList));
    setList(filteredList);
  }

  return (
    <Grid container>
      {list.map((item, index) => (
        <Grid item md={3} key={index}>
          <div className={styles.card}>
            <h2 className={styles.listHeading}>
              {item.name}
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      <MoreHorizSharpIcon />
                    </Button>
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
                        <button onClick={() => handleListDelete(index)}>
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
      <Grid item md={3}>
        {isShowBtn && (
          <Button
            variant="outlined"
            onClick={handleClick}
            startIcon={<AddSharpIcon />}
            className={styles.btn}
            sx={{
              backgroundColor: "rgba(9,30,66,0.08)",
              border: "none",
              borderRadius: "10px",
              color: "#172b4d",
              width: "22rem",
              height: "2.5rem",
              marginLeft: "10px",
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
              value={inputValue}
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
