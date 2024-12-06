import React from "react";
import MovieCard from "../movieCard";
import Grid from "@mui/material/Grid";

const MovieScrollList = (props) => {
  const movieCard = (props.movies || []).map((movie) => (
    <Grid 
      key={movie.id} 
      item 
      sx={{ width: "2000px", padding: "10px" }} 
    >
      <MovieCard key={movie.id} movie={movie} action={props.action} />
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
      {movieCard}
    </div>
  );
};

export default MovieScrollList;
