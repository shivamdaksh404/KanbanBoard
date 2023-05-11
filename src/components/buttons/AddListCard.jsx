import React from "react";
import addListCard from "./AddListCard.module.css";

import { toggleState } from "../../atom/Atom";
import { useRecoilState } from "recoil";

export default function AddListCard(props) {
  const [toggle, setToggle] = useRecoilState(toggleState);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div onClick={handleToggle} className={addListCard.mainDiv}>
      <span >{props.text}</span>
    </div>
  );
}
