import React from "react";
import ShowCard from "../showCard";
import Grid from "@mui/material/Grid";

const ShowScrollList = (props) => {
  const showCard = (props.shows || []).map((show) => (
    <Grid 
      key={show.id} 
      item 
      sx={{ width: "2000px", padding: "10px" }} 
    >
      <ShowCard key={show.id} show={show} action={props.action} />
    </Grid>
  ));

  return (
    <div 
      style={{
        display: "flex",
        overflowX: "auto",  
        padding: "10px",
      }}
    >
      {showCard}
    </div>
  );
};

export default ShowScrollList;
