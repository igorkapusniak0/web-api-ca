import React from "react";
import { getTopRated } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/playlistAdd';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const TopRatedMoviesPage = (props) => {

  const { data, error, isLoading, isError } = useQuery('topRatedMovies', getTopRated)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlist = movies.filter(m => m.playlist)

  localStorage.setItem('playlist', JSON.stringify(playlist))
  //const addToFavorites = (movieId) => true 
  

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
}
export default TopRatedMoviesPage;