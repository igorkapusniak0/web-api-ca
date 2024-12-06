import React from "react";
import { useParams } from 'react-router-dom';
import ShowDetails from "../components/showDetails";
import PageTemplate from "../components/templateShowPage";
import SimilarShows from "../components/similarShows";
import { getShowProviders } from "../api/tmdb-api";
import WhereToWatchShow from "../components/whereToWatchShow";
import ShowCast from "../components/showCast";
import ShowTrailers from "../components/showTrailer";
import { getShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ShowPage = (props) => {
  const { id } = useParams();
  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getShow
  );
  const { data: showProviders, error1, isLoading1, isError1 } = useQuery(
    ["show Providers", { id: id }],
    getShowProviders
    
  );

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
      {show ? (
        <>
          <PageTemplate show={show}>
            <ShowDetails show={show} />
            <WhereToWatchShow showProviders={showProviders}/>
            <ShowTrailers showId={show.id}/>
            <ShowCast showId={show.id}/>
            <SimilarShows showId={show.id} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default ShowPage;