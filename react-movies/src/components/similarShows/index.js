import React, { useState, useContext } from "react"; 
import ShowScrollList from "../showScrollList";
import Typography from "@mui/material/Typography";
import { getSimilarShows } from "../../api/tmdb-api"; 
import { useQuery } from "react-query";
import { ShowsContext } from "../../contexts/showsContext"; 
import Button from "@mui/material/Button"; 
import Paper from "@mui/material/Paper";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const SimilarShows = ({ showId }) => { 
    const { addToFavorites } = useContext(ShowsContext); 

    const { data: similarShows, error, isLoading, isError } = useQuery(["similarShows", showId], () => getSimilarShows(showId));
    
    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error: {error.message}</Typography>;

    const action = (show) => (
        <Button onClick={(e) => { e.preventDefault(); addToFavorites(show); }}>
            Add to Favorites
        </Button>
    );

    return (
        <>
        <Paper component="ul" sx={{ ...root }} style={{ marginBottom: '1em' }}>
            <Typography variant="h5" component="h3" style={{ textAlign: 'center', marginBottom: '1em' }}>
                Similar Shows
            </Typography>

            <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                padding: '16px 0',
            }}>
                <ShowScrollList shows={similarShows.results} action={action} /> 
            </div>
            </Paper>
        </>
    );
};

export default SimilarShows;
