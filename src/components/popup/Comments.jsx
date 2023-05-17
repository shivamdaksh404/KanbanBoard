import React from "react";
import comments from "./Comments.module.css";

export default function Comments({ cardName }) {
  return (
    <div>
      <span className={comments.username}>PR</span>
      <span className={comments.comments}>PR added this card to {cardName}</span>
      <p className={comments.commentsTime}>a minute ago</p>
    </div>
  );
}