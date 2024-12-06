import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import MovieIcon from "@mui/icons-material/Movie";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import ShowReviews from "../showReviews";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ShowDetails = ({ show }) => { // Don't miss this!
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Typography variant="h5" component="h3" style={{ textAlign: 'center', marginBottom: '1em' }}>
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {show.overview}
            </Typography>

            <Paper component="ul" sx={{ ...root }}>
                <li>
                    <Chip label="Genres" sx={{ ...chip }} color="primary" />
                </li>
                {show.genres.map((g) => (
                    <li key={g.id}> 
                        <Chip label={g.name} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={{ ...root }}>
                <Chip icon={<MovieIcon />} label={`${show.number_of_episodes} Episodes`} />
                <Chip icon={<AcUnitIcon />} label={`${show.number_of_seasons} Seasons`} />
                
                <Chip
                    icon={<StarRate />}
                    label={`${show.vote_average})`}
                />
                <Chip label={`First Aired: ${show.first_air_date}`} />
                <Chip label={`Last Aired: ${show.last_air_date}`} />
            </Paper>
            <Paper component="ul" sx={{ ...root }}>
                <li>
                    <Chip label="Production Countries" sx={{ ...chip }} color="primary" />
                </li>
                {show.production_countries.map((country) => (
                    <li key={country.iso_3166_1}>
                        <Chip label={country.name} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={{ ...root }}>
                <li>
                    <Chip label="Networks" sx={{ ...chip }} color="primary" />
                </li>
                {show.networks.map((network) => (
                    <li key={network.id}>
                        <Chip label={network.name} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={{
                    position: 'fixed',
                    bottom: '1em',
                    right: '1em'
                }}
            >
                <NavigationIcon />
                Reviews
            </Fab>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <ShowReviews show={show} />
            </Drawer>
        </>
    );
};

export default ShowDetails;
