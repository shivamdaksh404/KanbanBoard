import React from "react";
import inputBox from './InputBox.module.css'

import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { toggleState } from "../../atom/Atom";

export default function InputBox() {
  const [toggle, setToggle] = useRecoilState(toggleState);

  return (
    <div className={inputBox.mainDiv}>
      <form>
        <input type="text" className={inputBox.inputTag}/>
        <div>
          <Button>Save</Button>
          <Button onClick={() => setToggle(false)}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}
