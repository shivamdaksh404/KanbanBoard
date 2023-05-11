import React, { useState } from "react";
import todo from "./Todo.module.css";
import SmallCard from "../SmallCard/SmallCard";
import AddListCard from "../buttons/AddListCard";

import { toggleState } from "../../atom/Atom";
import { useRecoilState } from "recoil";

export default function Todo() {
  const [toggle, setToggle] = useRecoilState(toggleState);

  return (
    <div className={todo.firstTopDiv}>
      <div className={todo.topDiv}>
        <h3>To do</h3>
        <span>...</span>
      </div>
      
      {!toggle ? <AddListCard text={" ➕ Add a list"} /> : <SmallCard /> }
    </div>
  );
}
