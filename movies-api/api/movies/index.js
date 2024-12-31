import movieModel from './movieModel.js';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getActor, getMovie, getTopRatedShows, getShows, getUpcoming, getGenres, getActorImages, getActorMovies, getActorShows, getGenresShow, getMovieCast, getMovieImages, getMovieProviders, getMovieReviews, getMovies, getMovieTrailer, getShow, getShowCast, getShowImages, getShowProviders, getShowReviews, getShowTrailer, getSimilarMovies, getSimilarShows, getTopRated, getUpcomingShows } from '../tmdb-api.js';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const result = await getUpcoming();
    res.status(200).json(result);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const result = await getGenres();
    res.status(200).json(result);
}));

router.get('/tmdb/movies', asyncHandler(async (req, res) => {
    const result = await getMovies();
    console.log("get movies ran",result)
    res.status(200).json(result);
}));

router.get('/tmdb/topRated', asyncHandler(async (req, res) => {
    const result = await getTopRated();
    res.status(200).json(result);
}));

router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const id = req.params;
    console.log("routes",id.id)
    const result = await getMovie(id.id);
    res.status(200).json(result);
}));

router.get('/tmdb/movieProviders/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getMovieProviders({ queryKey: ["movieProviders", { id }] });
    res.status(200).json(result);
}));

router.get('/tmdb/show/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getShow({ queryKey: ["show", { id }] });
    res.status(200).json(result);
}));

router.get('/tmdb/showProviders/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getShowProviders({ queryKey: ["showProviders", { id }] });
    res.status(200).json(result);
}));

router.get('/tmdb/genreShow', asyncHandler(async (req, res) => {
    const result = await getGenresShow();
    res.status(200).json(result);
}));

router.get('/tmdb/movieImages/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getMovieImages({ queryKey: ["movieImages", { id }] });
    res.status(200).json(result);
}));

router.get('/tmdb/showImages/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getShowImages({ queryKey: ["showImages", { id }] });
    res.status(200).json(result);
}));

router.get('/tmdb/movieReviews/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getMovieReviews({ queryKey: ["movieReviews", { id }] });
    res.status(200).json(result);
}));

router.get('/tmdb/showReviews/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getShowReviews({ queryKey: ["showReviews", { id }] });
    res.status(200).json(result);
}));

router.get('/tmdb/shows', asyncHandler(async (req, res) => {
    const result = await getShows();
    res.status(200).json(result);
}));

router.get('/tmdb/upcomingShows', asyncHandler(async (req, res) => {
    const result = await getUpcomingShows();
    res.status(200).json(result);
}));

router.get('/tmdb/topRatedShows', asyncHandler(async (req, res) => {
    const result = await getTopRatedShows();
    res.status(200).json(result);
}));

router.get('/tmdb/similarMovies/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log("similar movies ", id)
    const result = await getSimilarMovies(id);
    res.status(200).json(result);
}));

router.get('/tmdb/similarShows/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getSimilarShows(id);
    res.status(200).json(result);
}));

router.get('/tmdb/movieCast/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getMovieCast(id);
    res.status(200).json(result);
}));

router.get('/tmdb/showCast/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getShowCast(id);
    res.status(200).json(result);
}));

router.get('/tmdb/actor/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getActor({ queryKey: ["actor", { id }] });
    res.status(200).json(result);
}));

router.get('/tmdb/actorImages/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getActorImages(id);
    res.status(200).json(result);
}));

router.get('/tmdb/actorMovies/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getActorMovies(id);
    res.status(200).json(result);
}));

router.get('/tmdb/actorShows/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getActorShows(id);
    res.status(200).json(result);
}));

router.get('/tmdb/movieTrailer/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getMovieTrailer({ queryKey: ["movieTrailer", { id }] });
    res.status(200).json(result);
}));

router.get('/tmdb/showTrailer/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await getShowTrailer({ queryKey: ["showTrailer", { id }] });
    res.status(200).json(result);
}));


export default router;