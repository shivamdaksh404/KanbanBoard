import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import styles from "./Board.module.css";
export default function Board() {
  const [data, setData] = useState([]);
  const [isShow, setisShow] = useState(false);
  const [isShowBtn, setisShowBtn] = useState(true);
  const [inputvalue, setinputvalue] = useState("");
  // let inputvalue;

  function handleChange(e) {
    setinputvalue(e.target.value);
  }

  function handleTaskAdd() {
    setData((prev) => [...prev, inputvalue]);
    setinputvalue("");
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
      {data &&
        data.map((item, index) => (
          <Grid md={3}>
            <div className={styles.card} key={index}>
              <h2>{item}</h2>
              <button>Add Task</button>
            </div>
          </Grid>
        ))}
      <Grid md={3}>
        {isShowBtn && (
          <button onClick={handleClick} className={styles.btn}>
            + Add Another List
          </button>
        )}
        {isShow && (
          <div className={styles.taskAdd}>
            <input
              type="text"
              onChange={handleChange}
              value={inputvalue}
              style={{
                padding: "8px",
                borderRadius: "3px",
                border: "none",
                boxShadow: "0 1px 0 rgba(9,30,66,.25)",
                backgroundColor: "white",
                marginBottom: "8px",
                width: "70%",
                boxSizing: "border-box",
              }}
            />
            <div className={styles.taskAddBtn}>
              <button
                onClick={handleTaskAdd}
                style={{
                  backgroundColor: "#5aac44",
                  color: "white",
                  padding: "8px",
                  borderRadius: "3px",
                  border: "none",
                  marginRight: "8px",
                  cursor: "pointer",
                }}
              >
                +Add Card
              </button>
              <button
                onClick={handleBtnDisplay}
                style={{
                  backgroundColor: "transparent",
                  color: "#42526e",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                x
              </button>
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
