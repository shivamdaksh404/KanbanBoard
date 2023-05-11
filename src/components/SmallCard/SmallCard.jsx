import React from "react";
import smallCard from "./SmallCard.module.css";
import Button from "../buttons/Button";

import { toggleState } from "../../atom/Atom";
import { useRecoilState } from "recoil";

export default function SmallCard() {
  const [toggle, setToggle] = useRecoilState(toggleState);

  return (
    <>
      <input className={smallCard.editableBox} />

      <div className={smallCard.SecondDiv}>
        <span className={smallCard.Span}>
          <Button buttonName={"Add card"} />
          <span onClick={() => setToggle(false)}>❌</span>
        </span>
        <span>...</span>
      </div>
    </>
  );
}
