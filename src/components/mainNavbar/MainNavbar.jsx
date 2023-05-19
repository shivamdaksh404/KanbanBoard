import React from "react";
import style from "./MainNavbar.module.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function MainNavbar() {
  return (
    <>
      <nav className={style.Mnav_background}>
        <div className={style.Mnav_leftDiv}>
          <div className={style.imageDiv}>
            <div>{/* <img src="https://i.gifer.com/KeSB.gif" alt="" /> */}</div>
            <h2>KanBan Trello</h2>
          </div>

          <p>
            Workspaces &nbsp; <KeyboardArrowDownOutlinedIcon />
          </p>

          <p>
            Recent &nbsp; <KeyboardArrowDownOutlinedIcon />
          </p>

          <p>
            Starred &nbsp; <KeyboardArrowDownOutlinedIcon />
          </p>

          <p>
            Templates &nbsp; <KeyboardArrowDownOutlinedIcon />
          </p>

          <p>
            <span>Create</span>
          </p>
        </div>

        <div className={style.Mnav_rightDiv}></div>
      </nav>
    </>
  );
}
