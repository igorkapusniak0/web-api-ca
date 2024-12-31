import React, { useState } from "react";
import { getLogin, getUsername } from "../user/user";
import { setShowsPlaylist } from "../api/login-api";


export const ShowsContext = React.createContext(null);

let externalSetFavorites = null; 

const ShowsContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )

  const addToFavorites = (show) => {
    let newFavorites = [];
    if (!favorites.includes(show.id)){
      newFavorites = [...favorites, show.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
    if (getLogin()){
      setShowsPlaylist(getUsername(), newFavorites)
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
        setShowsPlaylist(getUsername(), updatedFavourites)
        
      }
    };

  const addToPlaylist = (show) => {
    let newPlaylist = [];
    if (!playlist.includes(show.id)){
      newPlaylist = [...playlist, show.id];
    }
    else{
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist)
    console.log(newPlaylist)
  };
  
  // We will use this function in the next step
  const removeFromPlaylist = (show) => {
    setPlaylist( playlist.filter(
      (mId) => mId !== show.id
    ) )
  };

  const [myReviews, setMyReviews] = useState( {} ) 
const addReview = (show, review) => {
    setMyReviews( {...myReviews, [show.id]: review } )
  };

  return (
    <ShowsContext.Provider
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
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;


export const updateFavoriteShows = (favorites) => {
  console.log("before", favorites)
  if (favorites == undefined){
    externalSetFavorites([]);
  }else{
    externalSetFavorites(favorites);
  }
  console.log("after", favorites)
};


