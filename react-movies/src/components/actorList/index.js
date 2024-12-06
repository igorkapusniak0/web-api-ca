import React from "react";
import ActorCard from "../actorCard/";
import Grid from "@mui/material/Grid";

const ActorList = (props) => {
  const actorCards = (props.actors || []).map((actor) => (
    <Grid 
      key={actor.id} 
      item 
      sx={{ width: "2000px", padding: "10px" }} 
    >
      <ActorCard key={actor.id} actor={actor} action={props.action} />
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
      {actorCards}
    </div>
  );
};

export default ActorList;
