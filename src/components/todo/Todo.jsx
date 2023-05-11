import React from "react";
import todo from "./Todo.module.css";
import Button from "../button/Button";

export default function Todo() {
  return (
    <div className={todo.firstTopDiv}>
      <div className={todo.topDiv}>
        <h3>To do</h3>
        <span>...</span>
      </div>

      <SmallCard />
      <div className={todo.SecondDiv}>
        <span className={todo.Span}>
          <Button buttonName={"Add card"} />
          <span>❌</span>
        </span>
        <span>...</span>
      </div>
    </div>
  );
}

function SmallCard() {
  return (
    <div className={todo.smallCard}>
      <h4 className={todo.smallCardHeading}>Cook Food</h4>
    </div>
  );
}
