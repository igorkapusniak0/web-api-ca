import React from "react";
import ActorList from "../actorList";
import Typography from "@mui/material/Typography";
import { getShowCast } from "../../api/tmdb-api"; 
import { useQuery } from "react-query";
import { Paper } from "@mui/material";

const ShowCast = ({ showId }) => { 
    const { data: showCast, error, isLoading, isError } = useQuery(["showCast", showId], () => getShowCast(showId));

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error: {error.message}</Typography>;

    console.log("Fetched Cast Data:", showCast); 

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
                Cast
            </Typography>
         <Paper component="ul" sx={{ ...root }} style={{ marginBottom: '2em' }}>
            

            <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                padding: '16px 0',
            }}>
                <ActorList actors={showCast?.cast || []} /> 
            </div>
            </Paper>
        </>
    );
};

export default ShowCast;
