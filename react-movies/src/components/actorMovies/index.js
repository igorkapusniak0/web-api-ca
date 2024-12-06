import React, { useState, useContext } from "react"; 
import MovieScrollList from "../movieScrollList";
import Typography from "@mui/material/Typography";
import { getActorMovies } from "../../api/tmdb-api"; 
import { useQuery } from "react-query";
import { MoviesContext } from "../../contexts/moviesContext"; 
import Button from "@mui/material/Button"; 


const ActorMovies = ({ actorId }) => {
    const { addToFavorites } = useContext(MoviesContext); 

    
    const { data: movies, error, isLoading, isError } = useQuery(["actorMovies", actorId], () => getActorMovies(actorId));
    console.log(movies)
    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error: {error.message}</Typography>;

    const action = (movie) => (
        <Button onClick={(e) => { e.preventDefault(); addToFavorites(movie); }}>
            Add to Favorites
        </Button>
    );

    return (
        <>
            <Typography variant="h5" component="h3">
                Movies
            </Typography>

            <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                padding: '16px 0',
            }}>
                <MovieScrollList movies={movies.cast} action={action} /> 
            </div>
        </>
    );
};

export default ActorMovies;
