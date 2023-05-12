import React, { useEffect, useState } from "react";
import { Grid, listClasses } from "@mui/material";
import styles from "./Board.module.css";
import Card from "../card/Card";
import { useRecoilState } from "recoil";
import { data } from "../../atom/Atom";

export default function Board() {
  const [List, setList] = useRecoilState(data);

  const [isShow, setisShow] = useState(false);
  const [isShowBtn, setisShowBtn] = useState(true);
  const [inputvalue, setinputvalue] = useState("");
  // const [isShowCard, setIsShowCard] = useState(false);

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
            <h2>{item.name}</h2>
            <Card index={index} taskData={item.list} />
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
