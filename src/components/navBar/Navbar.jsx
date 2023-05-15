import React from "react";
import style from "./Navbar.module.css";
import { Button, IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Navbar() {

    const styles={
        color:"white",
        "&:hover" : {
            backgroundColor:"#e7e9ea4a"
        }
    }
    return (
    <nav className={style.mainContainer}>
      <ul className={style.leftContainer}>
        <li>
          <h1 > KanBan Board</h1>
        </li>
        <li>
          <IconButton
            sx={{
                color:"white",
              borderRadius: "5px",
              "&:hover" :{
      backgroundColor:"#e7e9ea4a"

              }
            }}
          >
            <StarOutlineIcon />
          </IconButton>
        </li>
        <li>
          <Button sx={styles} startIcon={<GroupOutlinedIcon />}>Workspace visible</Button>
        </li>
        <li>
          {" "}
          <Button variant="contained" startIcon={<EqualizerOutlinedIcon />}
          sx={{
              height:"2rem"
            }}>
            Board
          </Button>
        </li>
        <li>
          <IconButton
            sx={{
                color:"white",
              borderRadius: "5px",
              "&:hover" :{
      backgroundColor:"#e7e9ea4a"

              }
            }}
          >
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
        </li>
      </ul>
      <ul className={style.rightContainer}>
        <li> <Button sx={styles} startIcon={<RocketLaunchOutlinedIcon />}>Power-Ups</Button></li>
        <li> <Button  sx={styles} startIcon={<BoltIcon />}>Automation</Button></li>
        <li> <Button sx={styles} startIcon={<FilterListIcon />}>Filter</Button></li>
        
        <li> <Button variant="contained"  sx={{
              height:"2rem"
            }} startIcon={<PersonAddAltOutlinedIcon />}>
            Share
          </Button></li>
        <li> <IconButton
        sx={{
                color:"white",
              borderRadius: "5px",
              "&:hover" :{
      backgroundColor:"#e7e9ea4a"

              }
            }}
           
          >
            <MoreHorizIcon />
          </IconButton></li>
      </ul>
    </nav>
  );
}
