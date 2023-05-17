import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./App.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
// import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
// import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { storess } from "./Atom";
import AddCard from "./AddCard";
import StoreList from "./Card";

function App() {
  const [stores, setStores] = useRecoilState(storess);
  const [isShow, setisShow] = useState(false);
  const [isShowBtn, setisShowBtn] = useState(true);
  const [inputvalue, setinputvalue] = useState("");
  const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

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

      return setStores(reorderedStores);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

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
  };
  function handleChange(e) {
    setinputvalue(e.target.value);
  }

  function handleTaskAdd() {
    if (inputvalue.length === 0) {
      // input.focus();
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
  return (
    <div className="layout__wrapper">
      <div className="card">
        <DragDropContext onDragEnd={handleDragAndDrop}>
          <div className="header">
            <h1>Shopping List</h1>
          </div>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="container"
              >
                {stores.map((store, index) => (
                  <Draggable
                    draggableId={store.id}
                    index={index}
                    key={store.id}
                  >
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <StoreList {...store} />
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
              // className={styles.btn}
              sx={{
                border: "none",
                backgroundColor: "#e7e9ea4a",
                borderRadius: "10px",
                color: "white",
                width: "22rem",
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
            <div>
              <input
                type="text"
                id="input"
                onChange={handleChange}
                value={inputvalue}
              />
              <div>
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

export default App;
