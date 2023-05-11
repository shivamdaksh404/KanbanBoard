import React, { useState } from "react";
import todo from "./Todo.module.css";
import SmallCard from "../SmallCard/SmallCard";
import AddListCard from "../buttons/AddListCard";

export default function Todo() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={todo.firstTopDiv}>
      <div className={todo.topDiv}>
        <h3>To do</h3>
        <span>...</span>
      </div>
      <button onClick={handleToggle}>Toggle</button> <br/>
      {toggle ? <SmallCard /> : <AddListCard text={" ➕ Add a list"} />}
    </div>
  );
}
