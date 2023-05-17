import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, IconButton } from "@mui/material";
import Popover from "@mui/material/Popover";
import { v4 as uuidv4 } from "uuid";

import PopupState, {
  bindTrigger,
  bindPopover,
  bindDialog,
} from "material-ui-popup-state";
import { listClasses } from "@mui/material";
import styles from "./Board.module.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from '../navBar/Navbar'
import Card from "../card/Card";
import { useRecoilState } from "recoil";
import { data } from "../../atom/Atom";
import MainNavbar from "../mainNavbar/MainNavbar";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { storess } from "../../atom/Atom";

function Board() {
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

      input.focus();
//       localStorage.setItem("List", JSON.stringify([...List, newlist]));

      
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

//   function handleListDelete(id) {
//     let filteredList = List.filter((_, index) => id !== index);
//     localStorage.setItem("List", JSON.stringify(filteredList));
//     setList(filteredList);
//   }
//   return (
//     <>
   
//     <Grid className={styles.mainContainer}
//       container
//       sx={{
//         flexWrap: "nowrap",
//         paddingTop: "2rem",
//         paddingLeft: "1rem",
//         paddingRight: "1rem",
//         overflowX:"scroll",
//         height:"100%",
       
//       }}
//     >
//       {List.map((item, index) => (
//         <Grid item md={3} key={index}>
//           <div className={styles.card}>
//             <h2 className={styles.listHeading}>
//               {item.name}
//               <PopupState variant="popover" popupId="demo-popup-popover">
//                 {(popupState) => (
//                   <div>
//                     <IconButton
//                       variant="contained"
//                       {...bindTrigger(popupState)}
//                     >
//                       <MoreHorizSharpIcon />
//                     </IconButton>
//                     <Popover
//                       {...bindPopover(popupState)}
//                       anchorOrigin={{
//                         vertical: "bottom",
//                         horizontal: "center",
//                       }}
//                       transformOrigin={{
//                         vertical: "top",
//                         horizontal: "center",
//                       }}
//                     >
//                       <IconButton onClick={() => handleListdelete(index)}>
//                         <DeleteIcon fontSize="small" />
//                       </IconButton>
//                     </Popover>
//                   </div>
//                 )}
//               </PopupState>
//             </h2>
//             <Card index={item.id} taskData={item.list} />
//           </div>
//         </Grid>
//       ))}
//       <Grid item md={3}>
//         {isShowBtn && (
//           <Button
//             variant="outlined"
//             onClick={handleClick}
//             startIcon={<AddSharpIcon />}
//             className={styles.btn}
//             sx={{
//               border: "none",
//               backgroundColor: "#e7e9ea4a",

//               borderRadius: "10px",
//               color: "white",
//               width: "18rem",
//               height: "2.5rem",
//               marginLeft: "10px",
//               "&:hover": {
//                 backgroundColor: "#ffffff26",
//                 border: "none",
//               },
//             }}
//           >
//             Add Another List
//           </Button>
//         )}
//         {isShow && (
//           <div className={styles.taskAdd}>
//             <input
//               type="text"
//               id="input"
//               onChange={handleChange}
//               value={inputvalue}
//             />
//             <div className={styles.taskAddBtn}>
//               <Button
//                 onClick={handleTaskAdd}
//                 variant="contained"
//                 size="small"
//                 startIcon={<AddSharpIcon />}
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
// <<<<<<< Day_7_Shivam
//           </div>
//         )}
//       </Grid>
//     </Grid>
//     </>
// =======
          )}
        </DragDropContext>
      </div>
    </div>
// >>>>>>> new-dragNdrop
  );
}

export default Board;