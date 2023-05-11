import React from "react";
import btn from "./Button.module.css";

export default function Button(props) {
  return (
    <div>
      <button className={btn.button}>{props.buttonName}</button>
    </div>
  );
}
