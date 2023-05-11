import React from 'react'
import addListCard from './AddListCard.module.css'

export default function AddListCard(props) {
  return (
    <div className={addListCard.mainDiv}>
      <span>{props.text}</span>
    </div>
  )
}
