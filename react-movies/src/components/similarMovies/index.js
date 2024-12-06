import React, { useState, useContext } from "react"; 
import MovieScrollList from "../movieScrollList";
import Typography from "@mui/material/Typography";
import { getSimilarMovies } from "../../api/tmdb-api"; 
import { useQuery } from "react-query";
import { MoviesContext } from "../../contexts/moviesContext"; 
import Button from "@mui/material/Button"; 
import { Paper } from "@mui/material";


const SimilarMovies = ({ movieId }) => { 
    const { addToFavorites } = useContext(MoviesContext); 

    const { data: similarMovies, error, isLoading, isError } = useQuery(["similarMovies", movieId], () => getSimilarMovies(movieId));
    
    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error: {error.message}</Typography>;

    const action = (movie) => (
        <Button onClick={(e) => { e.preventDefault(); addToFavorites(movie); }}>
            Add to Favorites
        </Button>
    );
    const root = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    };   

    return (
        <>
         <Typography variant="h5" component="h3" style={{ textAlign: 'center', marginBottom: '1em' }}>
                Similar Movies
            </Typography>
        <Paper component="ul" sx={{ ...root }} style={{ marginBottom: '1em' }}>
           

            <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                padding: '16px 0',
            }}>
                <MovieScrollList movies={similarMovies.results} action={action} /> 
            </div>
            </Paper>
        </>
    );
};

export default SimilarMovies;
