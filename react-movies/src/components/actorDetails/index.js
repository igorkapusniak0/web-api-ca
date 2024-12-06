import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Known For" sx={{...chip}} color="primary" />
        </li>
        {(actor.known_for || []).map((work) => (
          <li key={work.id}>
            <Chip label={work.title || work.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`Born: ${actor.birthday}`} />
        <Chip label={`Place of Birth: ${actor.place_of_birth}`} />
        <Chip
          icon={<StarRate />}
          label={`Popularity: ${actor.popularity}`}
        />
      </Paper>
      
      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Also Known As" sx={{...chip}} color="primary" />
        </li>
        {(actor.also_known_as || []).map((name) => (
          <li key={name}>
            <Chip label={name} sx={{...chip}} />
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
        More Details
      </Fab>
      
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ padding: '20px' }}>
          <Typography variant="h6">Filmography</Typography>
        </div>
      </Drawer>
    </>
  );
};

export default ActorDetails;
