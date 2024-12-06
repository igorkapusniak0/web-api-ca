import React from "react";
import { createRoot } from "react-dom/client";

import HomePage from "./pages/homePage";
import ShowsHomePage from "./pages/showHomePage";

import MoviePage from "./pages/movieDetailsPage";
import ShowPage from "./pages/ShowDetailsPage";

import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import FavoriteShowsPage from "./pages/favoriteShowsPage";

import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import UpcomingShowsPage from "./pages/upcomingShowsPage";

import MovieReviewPage from "./pages/movieReviewPage";
import ShowReviewPage from "./pages/showReviewPage";

import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import TopRatedShowsPage from "./pages/topRatedShowsPage";

import SiteHeader from './components/siteHeader'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

import MoviesContextProvider from "./contexts/moviesContext";
import ShowsContextProvider from "./contexts/showsContext";

import AddMovieReviewPage from './pages/addMovieReviewPage';
import AddShowReviewPage from "./pages/addShowReviewPage"

import ActorPage from "./pages/actorDetailsPage";

import Login from "./pages/loginPage";
import Register from "./pages/registerPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <ShowsContextProvider>
            <Routes>
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies" element={<HomePage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/top_rated" element={<TopRatedMoviesPage />} />

              <Route path="/shows" element={<ShowsHomePage />} />
              <Route path="/shows/upcoming" element={<UpcomingShowsPage />} />
              <Route path="/shows/top_rated" element={<TopRatedShowsPage />} />
              <Route path="/shows/:id" element={<ShowPage />} />
              <Route path="/shows/favorites" element={<FavoriteShowsPage />} />
              
              <Route path="/movie_reviews/:id" element={<MovieReviewPage /> } />
              <Route path="/movie_reviews/form" element={<AddMovieReviewPage /> } />

              <Route path="/show_reviews/:id" element={<ShowReviewPage /> } />
              <Route path="/show_reviews/form" element={<AddShowReviewPage /> } />

              <Route path="/actors/:id" element={<ActorPage/>} />

              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />


              <Route path="*" element={<Navigate to="/movies" />} />
            </Routes>
          </ShowsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);