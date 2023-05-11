import React from "react";
import { Grid } from "@mui/material";

export default function App() {
  return (
    <Grid container>
      <Grid md={4}>

      </Grid>
      
      <Grid md={4}>
      <p>second column</p>
      </Grid>

      <Grid md={4}>
        <p>third column</p>
      </Grid>
    </Grid>
  );
}
