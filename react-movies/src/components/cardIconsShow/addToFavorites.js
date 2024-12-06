import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/showsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ show }) => {
  const context = useContext(ShowsContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(show);
    console.log(show)
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;