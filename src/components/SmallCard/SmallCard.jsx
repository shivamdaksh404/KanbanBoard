import React from "react";
import smallCard from "./SmallCard.module.css";
import Button from "../buttons/Button";

export default function SmallCard() {
  return (
    <>
      <input className={smallCard.editableBox} />

      <div className={smallCard.SecondDiv}>
        <span className={smallCard.Span}>
          <Button buttonName={"Add card"} />
          <span>❌</span>
        </span>
        <span>...</span>
      </div>
    </>
  );
}
