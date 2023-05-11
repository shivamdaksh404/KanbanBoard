import React from "react";
import { Grid } from "@mui/material";
import Todo from "./components/todo/Todo";
import Card from './components/card/Card'


export default function App() {
  return (
    <Grid container >
      <Grid md={3} sx={{border:'1px solid'}}>
        <Todo/>
      </Grid>
      
      <Grid md={3} sx={{border:'1px solid'}}>
      <p>second column</p>
      </Grid>

      <Grid md={3} sx={{border:'1px solid'}}>
        <p>third column</p>
      </Grid>
  <Card/>
    </Grid>
  );

}
