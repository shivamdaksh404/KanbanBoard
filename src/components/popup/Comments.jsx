import React, { useEffect, useState } from "react";
// import { DateTime } from "luxon";
import comments from "./Comments.module.css";
import { useRecoilState } from "recoil";
import {
  storess,
  srcState,
  desState,
  ListId,
  srcDragIdState,
  desDragIdState,
} from "../../atom/Atom";

export default function Comments({ cardName }) {
  // const timestamp = DateTime.now().toRelative();
  let timestamp = new Date().toLocaleTimeString();
  let dateStamp = new Date().toLocaleDateString();
  let combineTime = timestamp + " " + dateStamp;
  // let times = String(timestamp)

  console.log("time", timestamp);
  const [list, setList] = useRecoilState(storess);
  const [sourceState, setSourceState] = useRecoilState(srcState);
  const [destinationState, setDestinationState] = useRecoilState(desState);
  const [draggableIdSource, setDraggableIdSource] =
    useRecoilState(srcDragIdState);
  const [draggableIdDestination, setDraggableIdDestination] =
    useRecoilState(desDragIdState);

  const [listid, setListid] = useRecoilState(ListId);

  const [names, setNames] = useState("");

  useEffect(() => {
    list.map((item) => {
      // let names
      if (item.id == sourceState) {
        setNames(item.name);
      }
    });
  }, [sourceState]);
  console.log("baharwala", names);

  useEffect(() => {
    console.log("Srcs", sourceState);
    console.log("des", destinationState);
    console.log("drag", draggableIdSource);

    let newList = list.map((item) => {
      if (item.id !== destinationState) {
        let newTasklist = item.items.map((obj) => {
          if (obj.id === draggableIdSource) {
            // console.log('obj.id', obj.id)
            return { ...obj, activity: [...obj.activity, names] };
          } else {
            return obj;
          }
        });
        console.log("name", names);
        console.log("thodabhot", newTasklist);
        return { ...item, items: newTasklist };
      } else {
        return item;
      }
    });
    setList(newList);
    localStorage.setItem("List", JSON.stringify(newList));
    // console.log();
    console.log("drgIDdes", draggableIdSource);
  }, [names]);
  return (
    <>
      {/* <div>
      <span className={comments.username}>PR</span>
      <span className={comments.comments}>PR added this card to {cardName}</span>
      <p className={comments.commentsTime}>{timestamp} ago</p>
    </div> */}

      <div>
        <span className={comments.username}>PR</span>
        <span className={comments.comments}>
          User moved this card from {names} to {cardName}{" "}
        </span>
        <p className={comments.commentsTime}> updated on {combineTime} </p>
      </div>
    </>
  );
}
