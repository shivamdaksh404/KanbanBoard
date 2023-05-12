import React from "react";
import comments from "./Comments.module.css";

export default function Comments() {
  return (
    <div>
      <span className={comments.username}>PR</span>
      <span className={comments.comments}>PR added this card to To Do</span>
      <p className={comments.commentsTime}>a minute ago</p>
    </div>
  );
}
