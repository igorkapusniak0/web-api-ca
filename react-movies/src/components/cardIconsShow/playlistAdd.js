import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/showsContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ show }) => {
    const context = useContext(ShowsContext);
  
    const handleAddToPlaylist = (e) => {
      e.preventDefault();
      context.addToPlaylist(show);
    };
    
    return (
      <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };
  
  export default AddToPlaylistIcon;