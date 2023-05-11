import React from "react";
import { Grid } from "@mui/material";
import Todo from "./components/todo/Todo";

export default function App() {
  return (
    <Grid container >
      <Grid item md={3} sx={{border:'1px solid'}}>
        <Todo/>
      </Grid>
      
      <Grid item md={3} sx={{border:'1px solid'}}>
      {/* <p>second column</p> */}
      </Grid>

      <Grid item md={3} sx={{border:'1px solid'}}>
        {/* <p>third column</p> */}
      </Grid>
    </Grid>
  );
}
