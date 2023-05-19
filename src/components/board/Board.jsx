import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import styles from "./Board.module.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Card from "../card/Card";
import { useRecoilState } from "recoil";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  storess,
  srcState,
  desState,
  srcDragIdState,
  desDragIdState,
  timetag,
} from "../../atom/Atom";

function Board() {
  const [sourceState, setSourceState] = useRecoilState(srcState);
  const [destinationState, setDestinationState] = useRecoilState(desState);
  const [draggableIdSource, setDraggableIdSource] =
    useRecoilState(srcDragIdState);
  const [draggableIdDestination, setDraggableIdDestination] =
    useRecoilState(desDragIdState);

  const [stores, setStores] = useRecoilState(storess);
  const [isShow, setisShow] = useState(false);
  const [isShowBtn, setisShowBtn] = useState(true);
  const [inputvalue, setinputvalue] = useState("");
  const[timeTag,setTimeTag] = useRecoilState(timetag)
  let timestamp = new Date().toLocaleTimeString();
  let dateStamp = new Date().toLocaleDateString();
  let combineTime = timestamp + " " + dateStamp;



  const handleDragAndDrop = (results) => {
    console.log("res", results);
    setTimeTag(combineTime)
    const { source, destination, type } = results;
setDraggableIdSource(results.draggableId);
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...stores];

      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);
      localStorage.setItem("List", JSON.stringify(reorderedStores));

      return setStores(reorderedStores);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;
    setSourceState(source.droppableId);
    setDestinationState(destination.droppableId);

    const storeSourceIndex = stores.findIndex(
      (store) => store.id === source.droppableId
    );
    const storeDestinationIndex = stores.findIndex(
      (store) => store.id === destination.droppableId
    );

    const newSourceItems = [...stores[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems,
    };
    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems,
    };

    setStores(newStores);
    localStorage.setItem("List", JSON.stringify(newStores));

  

  
  };
  function handleChange(e) {
    setinputvalue(e.target.value);
  }

  function handleTaskAdd() {
    if (inputvalue.length === 0) {
      input.focus();
    } else if (inputvalue.length > 0) {
      let newlist = { name: inputvalue, id: uuidv4(), items: [] };
      setStores((prev) => [...prev, newlist]);
      localStorage.setItem("List", JSON.stringify([...stores, newlist]));

      setinputvalue("");
      console.log(stores);
    }
  }

  function handleClick() {
    setisShow(true);
    setisShowBtn(false);
  }

  function handleBtnDisplay() {
    setisShowBtn(true);
    setisShow(false);
  }

  const handleClearDashboard =() =>{
    setStores([]);
    setisShow(false)
    setisShowBtn(true)
    localStorage.setItem("List", JSON.stringify([]));
  }

  return (
    <div className={styles.mainContainer}>
    <div className={styles.header}>
    <div className={styles.imageDiv}>
            <div></div>
            <h2>KanBan Trello</h2>
          </div>
      <button onClick={handleClearDashboard} >Clean All ToDos </button>
    </div>
      <div className={styles.wrapperContainer}>
        <DragDropContext onDragEnd={handleDragAndDrop}>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={styles.container}
              >
                {stores.map((store, index) => (
                  <Draggable
                    draggableId={store.id}
                    index={index}
                    key={store.id}
                  >
                    {(provided) => (
                      <div
                        className={styles.card}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <Card {...store} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {isShowBtn && (
            <Button
              variant="outlined"
              onClick={handleClick}
              startIcon={<AddSharpIcon />}
              className={styles.btn}
              sx={{
                border: "none",
                backgroundColor: "#e7e9ea4a",
                borderRadius: "10px",
                color: "white",
                minWidth: "20rem",
                height: "2.5rem",
                marginLeft: "10px",
                "&:hover": {
                  backgroundColor: "#ffffff26",
                  border: "none",
                },
              }}
            >
              Add Another List
            </Button>
          )}
          {isShow && (
            <div className={styles.taskAdd}>
              <input
                type="text"
                id="input"
                onChange={handleChange}
                value={inputvalue}
              />
              <div className={styles.taskAddBtn}>
                <Button
                  onClick={handleTaskAdd}
                  variant="contained"
                  size="small"
                  startIcon={<AddSharpIcon />}
                >
                  Add Card
                </Button>
                <IconButton onClick={handleBtnDisplay}>
                  <CloseSharpIcon />
                </IconButton>
              </div>
            </div>
          )}
        </DragDropContext>
      </div>
    </div>
  );
}

export default Board;
