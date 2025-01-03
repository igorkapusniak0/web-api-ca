# Assignment 2 - Web API.

Name: Igor Kapusniak

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
+ Storing favourite movies in database
+ Storing favourite shows in database
+ Email password reset
  

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

npm install nodemailer


## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://192.168.178.116:27017/movies_db
REACT_APP_TMDB_KEY=
SECRET=ilikecake
EMAIL_USER=
EMAIL_PASS=
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 
- Movies
- /api/movies	| GET	| Gets a list of movies.
- /api/movies/{id} |	GET	| Gets details of a specific movie.
- /api/movies/tmdb/{id} |	GET	| Gets details of a specific movie from TMDB.
- /api/movies/tmdb/upcoming	| GET	| Fetches upcoming movies from TMDB.
- /api/movies/tmdb/genres	| GET |	Fetches movie genres from TMDB.
- /api/movies/tmdb/movies	| GET	| Fetches movies from TMDB.
- /api/movies/tmdb/topRated	| GET	| Fetches top-rated movies from TMDB.
- /api/movies/tmdb/similarMovies/{id} |	GET |	Fetches similar movies by ID.
- /api/movies/tmdb/movieProviders/{id}	| GET |	Fetches providers for a specific movie.
- /api/movies/tmdb/movieImages/{id} |	GET	| Fetches images for a specific movie.
- /api/movies/tmdb/movieReviews/{id} |	GET	| Fetches reviews for a specific movie.
- /api/movies/tmdb/movieTrailer/{id} |	GET	| Fetches the trailer for a specific movie.
- /api/movies/tmdb/movieCast/{id}	| GET	|Fetches cast information for a specific movie.

- Shows
- /api/movies/shows	GET	Gets a list of shows.
- /api/movies/shows/tmdb/upcomingShows |	GET |	Fetches upcoming shows from TMDB.
- /api/movies/shows/tmdb/topRatedShows	| GET	| Fetches top-rated shows from TMDB.
- /api/movies/shows/tmdb/similarShows/{id} |	GET |	Fetches similar shows by ID.
- /api/movies/shows/tmdb/genreShow	| GET |	Fetches show genres from TMDB.
- /api/movies/shows/tmdb/showProviders/{id} |	GET |	Fetches providers for a specific show.
- /api/movies/shows/tmdb/showImages/{id} |	GET	| Fetches images for a specific show.
- /api/movies/shows/tmdb/showReviews/{id}	| GET |	Fetches reviews for a specific show.
- /api/movies/shows/tmdb/showTrailer/{id} |	GET	| Fetches the trailer for a specific show.
- /api/movies/shows/tmdb/showCast/{id} |	GET	| Fetches cast information for a specific show.

- /api/movies/actors/tmdb/actor/{id}	| GET |	Fetches details of an actor.
- /api/movies/actors/tmdb/actorImages/{id} | GET	| Fetches images of an actor.
- /api/movies/actors/tmdb/actorMovies/{id}	| GET |	Fetches movies featuring the actor.
- /api/movies/actors/tmdb/actorShows/{id}	| GET |	Fetches shows featuring the actor.

- /api/users |	GET |	Fetches all users.
- /api/users	| POST |	Registers or authenticates a user.
- /api/users/{id} |	PUT	| Updates user information.
- /api/users/setFavourites |	POST	| Adds movies or shows to favorites.
- /api/users/getFavourites	| POST |	Retrieves the user's favorite movies or shows.

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

To set and get favourites a user has to be logged in with a valid tocken using jsonwebtoken
Protected Routes:
- /api/users/setFavourites
- /api/users/getFavourites

Aditionally to access the favourites section on the react web page has been resticed to only logged in users
- /shows/favorites
- /movies/favorites
If a user is not logged in they are redirected to the login page
  
## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

The react app calls functions like login/register and movie/show related from the node API by using http routes

+ All TMDB API calls rerouted through node
+ The API handles all user login related functions



## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   

Email sending service through the use of nodemailer
