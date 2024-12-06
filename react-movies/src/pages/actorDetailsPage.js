import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails";
import TemplateActorPage from "../components/templateActorPage";
import ActorMovies from "../components/actorMovies";
import ActorShows from "../components/actorShows";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const ActorPage = (props) => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <TemplateActorPage actor={actor}>
            <ActorDetails actor={actor} />
            <ActorMovies actorId={actor.id} />
            <ActorShows actorId={actor.id} />
          </TemplateActorPage>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;