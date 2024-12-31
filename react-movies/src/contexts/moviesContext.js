import React, { useState, useEffect } from "react";
import { setMoviePlaylist } from "../api/login-api";
import { getLogin, getUsername } from "../user/user";


export const MoviesContext = React.createContext(null);

let externalSetFavorites = null; 


const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
    if (getLogin()){
      setMoviePlaylist(getUsername(), newFavorites)
      console.log("old", favorites)
      console.log("new",newFavorites)
    }
  };
  
  externalSetFavorites = (fav) => {
    console.log(fav)
    setFavorites(fav);
    console.log(fav)
  };

  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    const updatedFavourites = favorites.filter((mId) => mId !== movie.id);
    setFavorites(updatedFavourites);
    console.log("Updated fav:", updatedFavourites);
    if (getLogin()){
      setMoviePlaylist(getUsername(), updatedFavourites)
      
    }
  };

  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
    }
    else{
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist)
    console.log(newPlaylist)
  };
  
  // We will use this function in the next step
  const removeFromPlaylist = (movie) => {
    
    setPlaylist( playlist.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const [myReviews, setMyReviews] = useState( {} ) 
const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlaylist,
        removeFromPlaylist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

export const updateFavoriteMovies = (favorites) => {
  console.log("before", favorites)
  if (favorites == undefined){
    externalSetFavorites([]);
  }else{
    externalSetFavorites(favorites);
  }

  console.log("after", favorites)
};