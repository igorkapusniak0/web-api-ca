import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import SimilarMovies from "../components/similarMovies";
import MovieTrailers from "../components/movieTrailer";
import MovieCast from "../components/movieCast";
import WhereToWatchMovie from "../components/whereToWatchMovie";
import { getMovie } from '../api/tmdb-api'
import { getMovieProviders } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: movieProviders, error1, isLoading1, isError1 } = useQuery(
    ["movieProviders", { id: id }],
    getMovieProviders
    
  );
  console.log("Providers Data:", movieProviders);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading1) {
    return <Spinner />;
  }

  if (isError1) {
    return <h1>{error1.message}</h1>;
  }


  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <WhereToWatchMovie movieProviders={movieProviders} />
            <MovieTrailers movieId={movie.id} />
            <MovieCast movieId={movie.id} />
            <SimilarMovies movieId={movie.id} /> 
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;