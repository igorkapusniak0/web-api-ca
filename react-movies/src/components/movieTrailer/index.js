import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import YouTube from "react-youtube";
import { getMovieTrailer } from "../../api/tmdb-api";  
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

const MovieTrailers = ({ movieId }) => {
    const [trailers, setTrailers] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTrailers = async () => {
            const response = await getMovieTrailer({ queryKey: ["getMovieTrailer", { id: movieId }] });
            const trailerResults = response.results.filter((video) => video.type === "Trailer" && video.site === "YouTube");
            setTrailers(trailerResults);
        };
        getTrailers();
    });

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
        <Typography variant="h5" component="h3" style={{ textAlign: 'center', marginTop: '2em' }}>
                Trailers
            </Typography>
         <Paper component="ul" sx={{ ...root }} style={{ marginBottom: '2em' }}>
      
            {trailers.length > 0 ? (
                <Box
                    sx={{
                        display: "flex",
                        overflowX: "auto",
                        gap: "1em",
                        padding: "1em",
                    }}
                >
                    {trailers.map((trailer) => (
                        <Box key={trailer.id} sx={{ minWidth: "300px", flex: "0 0 auto", textAlign: "center" }}>
                            <Typography variant="h6">{trailer.name}</Typography>
                            <YouTube videoId={trailer.key} opts={{ width: "600px", height: "300px" }} />
                        </Box>
                    ))}
                </Box>
            ) : (
                <Typography variant="h6" component="p" style={{ textAlign: 'center' }}>
                    {error || "No trailers available."}
                </Typography>
            )}
            </Paper>
        </>
    );
};

export default MovieTrailers;
