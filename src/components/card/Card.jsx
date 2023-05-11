import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import style from './Card.module.css'
import AddCard from './AddCard';
import {  tasks } from '../../atom/Atom';
import { useRecoilValue } from 'recoil';
import { IconButton } from '@mui/material';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import { StyleRounded } from '@mui/icons-material';

export default function Card() {
const taskData = useRecoilValue(tasks)
const [isEditVisible,setIsEditVisible] =useState(false)

const handleShowEdit =(index)=>{
  
  setIsEditVisible(!isEditVisible);
}

  return (
    <div>
    {/* <div className={style.nameDiv}>
      <h1>List Name</h1>
      <MoreHorizIcon/>
    </div> */}
    <div className={style.addCard}>
    <div className={style.todoTasks}>
    {taskData.map((ele,index)=><li key={index} onMouseMove={()=>handleShowEdit(index)} className={style.taskLists}>{ele} 
    {isEditVisible && <IconButton  ><EditSharpIcon fontSize='small'/></IconButton>}
    </li>)}
    </div>
    <AddCard/>
    </div>

    </div>
  )
}
