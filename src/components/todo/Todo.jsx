import React from "react";
import todo from "./Todo.module.css";
import Button from "../button/Button";

export default function Todo() {
  return (
    <div>
      <div className={todo.topDiv}>
        <h3>To do</h3>
        <span>...</span>
      </div>

      <SmallCard />
    </div>
  );
}

function SmallCard() {
  return (
    <>
      <div>
        <h3>Cook Food</h3>
      </div>

      <div className={todo.smallCardSecondDiv}>
      <span className={todo.smallCardSpan}>
        <Button buttonName={"Add card"} />
        <span>❌</span>
      </span>
        <span>...</span>
      </div>
    </>
  );
}
