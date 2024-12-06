import React from "react";
import { getTopRatedShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIconsShow/playlistAdd';
import AddToFavoritesIcon from '../components/cardIconsShow/addToFavorites'

const TopRatedShowsPage = (props) => {

  const { data, error, isLoading, isError }  = useQuery('topRatedShows', getTopRatedShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlist = shows.filter(m => m.playlist)

  localStorage.setItem('playlist', JSON.stringify(playlist))
  //const addToFavorites = (movieId) => true 
  

  return (
    <PageTemplate
      title="Top Rated Shows"
      shows={shows}
      action={(show) => {
        return <AddToFavoritesIcon show={show} />
      }}
    />
);
}
export default TopRatedShowsPage;