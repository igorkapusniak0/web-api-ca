import React, { useState, useContext } from "react"; 
import ShowScrollList from "../showScrollList";
import Typography from "@mui/material/Typography";
import { getActorShows } from "../../api/tmdb-api"; 
import { useQuery } from "react-query";
import { ShowsContext } from "../../contexts/showsContext";
import Button from "@mui/material/Button"; 


const ActorShows = ({ actorId }) => {
    const { addToFavorites } = useContext(ShowsContext); 

    
    const { data: shows, error, isLoading, isError } = useQuery(["actorShows", actorId], () => getActorShows(actorId));
    console.log(shows)
    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error: {error.message}</Typography>;

    const action = (show) => (
        <Button onClick={(e) => { e.preventDefault(); addToFavorites(show); }}>
            Add to Favorites
        </Button>
    );

    return (
        <>
            <Typography variant="h5" component="h3">
                Shows
            </Typography>

            <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                padding: '16px 0',
            }}>
                <ShowScrollList shows={shows.cast} action={action} /> 
            </div>
        </>
    );
};

export default ActorShows;
