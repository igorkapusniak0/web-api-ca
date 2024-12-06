import React, { useContext } from "react";
import PageTemplate from "../components/templateShowListPage";
import { ShowsContext } from "../contexts/showsContext";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIconsShow/removeFromFavorites";
import WriteReview from "../components/cardIconsShow/writeReview";

const FavoriteShowsPage = () => {
  const {favorites: showIds } = useContext(ShowsContext);

  console.log("Favorite show IDs:", showIds);

  // Create an array of queries and run in parallel.
  const favoriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }], 
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favoriteShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  //const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromFavorites show={show} />
            <WriteReview show={show} />
          </>
        );
      }}
    />
  );
};

export default FavoriteShowsPage;