import React from "react";
import Show from "../showCard/";
import Grid from "@mui/material/Grid2";

const ShowList = (props, action) => {
  let showCards = props.shows.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
      <Show key={m.id} show={m} action={props.action} />
      </Grid>
  ));
  return showCards;
};

export default ShowList;